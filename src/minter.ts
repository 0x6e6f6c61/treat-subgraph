import {
  ethereum,
  Address,
  BigInt,
  Bytes,
  ByteArray,
  json,
  JSONValueKind,
  log
} from '@graphprotocol/graph-ts'

import {
  Account,
  Transaction,
  TokenRegistry,
  Token,
  Balance,
  Transfer,
  Approval,
  Sale
} from '../generated/schema'

import {
  TreatNFTMinterV2,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
} from '../generated/TreatNFTMinterV2/TreatNFTMinterV2'

import {
  TreatMart1,
  NFTAdded as V1NFTAddedEvent,
  Redeemed as RedeemedT1Event
} from '../generated/TreatMart1/TreatMart1'

import {
  TreatMart2,
  NFTAdded as V2NFTAddedEvent,
  Redeemed as RedeemedT2Event
} from '../generated/TreatMart2/TreatMart2'


import {
  constants,
  events,
  integers,
  transactions,
} from '@amxx/graphprotocol-utils'

function replaceAll(input: string, search: string[], replace: string): string {
  let result = '';
  for (let i = 0; i < input.length; i++) {
      result += search.includes(input.charAt(i)) ? replace : input.charAt(i);
  }
  return result
}

function fetchToken(registry: TokenRegistry, id: BigInt): Token {
  let tokenid = registry.id.concat('-').concat(id.toHex())
  let token = Token.load(tokenid)
  if (token == null) {
      token = new Token(tokenid)
      token.registry = registry.id
      token.identifier = id
      token.totalSupply = constants.BIGINT_ZERO
      token.totalSales = constants.BIGINT_ZERO
      token.totalSaleValue = constants.BIGINT_ZERO
  }
  return token as Token
}

function fetchBalance(token: Token, account: Account): Balance {
  let balanceid = token.id.concat('-').concat(account.id)
  let balance = Balance.load(balanceid)
  if (balance == null) {
      balance = new Balance(balanceid)
      balance.token = token.id
      balance.account = account.id
      balance.value = constants.BIGINT_ZERO
  }
  return balance as Balance
}

function registerTransfer(
  event: ethereum.Event,
  suffix: String,
  registry: TokenRegistry,
  operator: Account,
  from: Account,
  to: Account,
  id: BigInt,
  value: BigInt)
  : void {
  let token = fetchToken(registry, id)
  let ev = new Transfer(events.id(event).concat(suffix))
  ev.transaction = transactions.log(event).id
  ev.timestamp = event.block.timestamp
  ev.token = token.id
  ev.operator = operator.id
  ev.from = from.id
  ev.to = to.id
  ev.value = value

  if (from.id == constants.ADDRESS_ZERO) {
      token.totalSupply = integers.increment(token.totalSupply, value)
  } else {
      let balance = fetchBalance(token, from)
      balance.value = integers.decrement(balance.value, value)
      balance.save()
      ev.fromBalance = balance.id
  }

  if (to.id == constants.ADDRESS_ZERO) {
      token.totalSupply = integers.decrement(token.totalSupply, value)
  } else {
      let balance = fetchBalance(token, to)
      balance.value = integers.increment(balance.value, value)
      balance.save()
      ev.toBalance = balance.id
  }

  token.save()
  ev.save()
}

function handleMint(
  event: TransferSingleEvent) : void {
    let purchase = Sale.load(event.transaction.hash.toHex())
    if (purchase == null) {
      let purchase = new Sale(event.transaction.hash.toHex())
      let txPurchase = purchase.treatsPurchased
      txPurchase.push(event.params._id)
      purchase.treatsPurchased = txPurchase
      //purchase.treatsPurchased.push(event.params._id)
      purchase.cost = event.transaction.value
      purchase.purchaseDate = event.block.timestamp
      purchase.sourceContract = event.params._operator
      purchase.quantity = event.params._amount
      //let theSeller = new Account(event.params._operator.toHex())
      //purchase.seller = theSeller
      purchase.seller = event.params._operator
      purchase.buyer =  event.params._to
      purchase.save()
    } else {
      let txPurchase = purchase.treatsPurchased
      txPurchase.push(event.params._id)
      purchase.treatsPurchased = txPurchase
      purchase.cost = event.transaction.value
      purchase.purchaseDate = event.block.timestamp
      purchase.sourceContract = event.params._operator
      purchase.quantity = event.params._amount
      purchase.seller = event.params._operator
      purchase.buyer =  event.params._to
      purchase.save()
    }
    let token = Token.load(event.address.toHex().concat('-').concat(event.params._id.toHex()))
    if (token == null) {
        //do nothing
    } else {
      let theAddress = event.transaction.to
      //if (token.totalSales == constants.BIGINT_ZERO) {
      //  token.totalSales = constants.BIGINT_ONE
        //token.totalSaleValue = event.transaction.value
        //token.save()

      //} else {
      token.totalSales = integers.increment(token.totalSales, event.params._amount)
      token.save()
      //}
      if (theAddress) {
        if(event.block.number > BigInt.fromU32(9588820)) {
          let totwcontract = TreatMart2.bind(theAddress)
          let creator = Account.load(totwcontract.getCreatorAddress(event.params._id).toHex())
          let eventHex = event.transaction.input.toHexString()
          log.info('logging method sig substr 0,10--{}',[eventHex.substring(0,10)])
          if (eventHex.substring(0,10) == "0x65ef6417") {
            let setId = parseInt(eventHex.substring(10),16) as i32
            let setCost = totwcontract.nftSetCosts(BigInt.fromI32(setId))
            let nftSet = totwcontract.getSetIds(BigInt.fromI32(setId))
            let nftPurchaseAmount = setCost.div(BigInt.fromU32(nftSet.length))
            log.info('logging nft bundle/set cost: {}',[setCost.toString()])
            log.info('log single nft value from purchase: {}',[nftPurchaseAmount.toString()])
            log.info('log token total Sales before adding current purchase: {}',[token.totalSaleValue.toString()])
            token.totalSaleValue = integers.increment(token.totalSaleValue, nftPurchaseAmount)
            log.info('log total sales of token after adding current purchase: {}',[token.totalSaleValue.toString()])
            token.save()
          } else {
            token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
            token.save()
          }
          if (!creator){
            //do nothing
          } else {
            if (eventHex.substring(0,10) == "0x65ef6417") {
              let setId = parseInt(eventHex.substring(10),16) as i32
              let setCost = totwcontract.nftSetCosts(BigInt.fromI32(setId))
              let nftSet = totwcontract.getSetIds(BigInt.fromI32(setId))
              let nftPurchaseAmount = setCost.div(BigInt.fromU32(nftSet.length))
              creator.totalSales = integers.increment(creator.totalSales, nftPurchaseAmount)
              creator.save()
            } else {
              creator.totalSales = integers.increment(creator.totalSales, event.transaction.value)
              creator.save()
            }
          }
        }
      } else {
        //do nothing
      }
      //token.totalSales = integers.increment(token.totalSales, event.params._amount)
      //token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
    }
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let registry = new TokenRegistry(event.address.toHex())
  let operator = new Account(event.params._operator.toHex())
  let from = new Account(event.params._from.toHex())
  let to = new Account(event.params._to.toHex())
  registry.save()
  operator.save()
  from.save()
  to.save()

  registerTransfer(
      event,
      "",
      registry,
      operator,
      from,
      to,
      event.params._id,
      event.params._amount
  )

  if (event.params._from.toHex() == constants.ADDRESS_ZERO) {
    handleMint(event)
  }
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let registry = new TokenRegistry(event.address.toHex())
  let operator = new Account(event.params._operator.toHex())
  let from = new Account(event.params._from.toHex())
  let to = new Account(event.params._to.toHex())
  registry.save()
  operator.save()
  from.save()
  to.save()

  let ids = event.params._ids
  let values = event.params._amounts
  for (let i = 0; i < ids.length; ++i) {
      registerTransfer(
          event,
          "-".concat(i.toString()),
          registry,
          operator,
          from,
          to,
          ids[i],
          values[i]
      )
  }
}

/*export function handleTreatV2NFTRedeemed(event: RedeemedT2Event): void {
  let purchase = Sale.load(event.transaction.hash.toHex())
  if (purchase == null) {
    let purchase = new Sale(event.transaction.hash.toHex())
    purchase.cost = event.transaction.value
    purchase.save()
  } else {
    purchase.cost = event.transaction.value
    purchase.save()
  }
  let eventHex = event.transaction.input.toHexString()
  let lucasMum =  parseInt(eventHex.substring(10),16) as i32
  let token = Token.load("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase().concat('-').concat(BigInt.fromI32(lucasMum).toHex()))
  let theAddress = event.transaction.to
  if (theAddress) {
    let totwcontract = TreatMart2.bind(theAddress)
    if (!token) {
        //do nothing
    } else {
      if (eventHex.substring(0,10) == "0x65ef6417") {
        let setCost = totwcontract.nftSetCosts(BigInt.fromI32(lucasMum))
        let nftSet = totwcontract.getSetIds(BigInt.fromI32(lucasMum))
        token.totalSaleValue = 
      } else {
        token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
        token.save()
      }
    }
    let creator = Account.load(totwcontract.getCreatorAddress(BigInt.fromI32(lucasMum)).toHex())
    if (!creator){
      //do nothing
    } else {
      creator.totalSales = integers.increment(creator.totalSales, event.transaction.value)
      creator.save()
    }
  } else {
    //do nothing
  }
}*/