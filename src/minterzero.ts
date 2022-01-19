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
    TransferBatch as TransferBatchEvent,
    TransferSingle as TransferSingleEvent,
    URI as URIEvent,
  } from '../generated/TreatNFTMinter/TreatNFTMinter'

  import {
    TreatMart0
  } from '../generated/TreatMart0/TreatMart0'

  import {
    TreatBundleMart0
  } from '../generated/TreatBundleMart0/TreatBundleMart0'

  
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
        token.totalSales = integers.increment(token.totalSales, event.params._amount)
        token.save()

        if (theAddress) {
          log.info('logging theAddress.toHexString: {}',[theAddress.toHexString()])
          if(event.block.number > BigInt.fromU32(7106754)) {
            let eventHex = event.transaction.input.toHexString()
            log.info('logging method 4 byte signature: {}',[eventHex.substring(0,10)])
            if (eventHex.substring(0,10) == "0x65ef6417") {
              //let totwcontract = TreatMart0.bind(theAddress)
              let totwbundlecontract = TreatBundleMart0.bind(theAddress)
              //let creator = Account.load(totwcontract.treatModels(event.params._id).toHex())
              let setId = parseInt(eventHex.substring(10),16) as i32
              let creator = Account.load(totwbundlecontract.treatSetModels(BigInt.fromI32(setId)).toHex())
              let setCost = totwbundlecontract.nftSetCosts(BigInt.fromI32(setId))
              let nftSet = totwbundlecontract.getSetIds(BigInt.fromI32(setId))
              let nftPurchaseAmount = setCost.div(BigInt.fromU32(nftSet.length))
              log.info('logging nft bundle/set cost: {}',[setCost.toString()])
              log.info('log single nft value from purchase: {}',[nftPurchaseAmount.toString()])
              log.info('log token total Sales before adding current purchase: {}',[token.totalSaleValue.toString()])
              token.totalSaleValue = integers.increment(token.totalSaleValue, nftPurchaseAmount)
              log.info('log total sales of token after adding current purchase: {}',[token.totalSaleValue.toString()])
              token.save()
              if (!creator) {
                //do nothing
              } else {
                creator.totalSales = integers.increment(creator.totalSales, nftPurchaseAmount)
                creator.save()
              }
            } else {
              if (theAddress.toString().toLowerCase() != "0xdE39D0B9A93dCD541c24E80c8361f362AAb0f213".toLowerCase()) {
                let totwcontract = TreatMart0.bind(theAddress)
                log.info('logging a single nft mint: {} ',[event.params._id.toString()])
                let creator = Account.load(totwcontract.treatModels(event.params._id).toHex())
                if(event.transaction.value > BigInt.fromU32(0)) {
                  log.info('logging a single nft buy: {} ',[event.params._id.toString()])
                  token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
                  token.save()
                  if (!creator) {
                    //do nothing
                  } else {
                    log.info('logging a single nft creator increment from nft id: {} ',[event.params._id.toString()])
                    creator.totalSales = integers.increment(creator.totalSales, event.transaction.value)
                    creator.save()
                  }
                }
              } else {
                //do nothing since the minter itself is causing this transfersingle event.
              }
            }
          }
        } else {
          //do nothing
        }
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