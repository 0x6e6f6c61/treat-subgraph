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
  Transaction,
  Account,
  TokenRegistry,
  Token,
  Balance,
  Transfer,
  Approval,
  Sale
} from '../generated/schema'

import {
    SweetShop,
    NFTCreatedAndAdded as NFTCreatedAndAddedEvent,
    Redeemed as RedeemedSSEvent
} from '../generated/SweetShop/SweetShop'

import {
    SubscriberMart,
    NFTCreatedAndAdded as SubNFTCreatedAndAddedEvent,
    Redeemed as RedeemedSubEvent
} from '../generated/SubscriberMart/SubscriberMart'

import {
    SweetShop0,
    NFTCreatedAndAdded as NFTSS0CreatedAndAddedEvent,
    Redeemed as RedeemSS0Event,
} from '../generated/SweetShop0/SweetShop0'

import {
  TreatMart0,
  NFTAdded as V0NFTAddedEvent,
  Redeemed as RedeemedT0Event
} from '../generated/TreatMart0/TreatMart0'

import {
  TreatBundleMart0,
  SetAdded as V0TreatBundleAddedEvent
} from '../generated/TreatBundleMart0/TreatBundleMart0'

import {
  TreatMart1,
  NFTAdded as V1NFTAddedEvent,
  SetAdded as V1TreatBundleAddedEvent,
  Redeemed as RedeemedT1Event
} from '../generated/TreatMart1/TreatMart1'

import {
  TreatMart2,
  NFTAdded as V2NFTAddedEvent,
  SetAdded as V2TreatBundleAddedEvent,
  Redeemed as RedeemedT2Event
} from '../generated/TreatMart2/TreatMart2'

import {
  TreatMinterHelper0,
  TotwNftsCreated as TotwNftsCreatedEvent
} from '../generated/TreatMinterHelper0/TreatMinterHelper0'

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
  
function fetchToken(registry: TokenRegistry, id: BigInt, tokenCreator: Account, tokenMaxSupply: BigInt): Token {
  let tokenid = registry.id.concat('-').concat(id.toHex())
  let token = Token.load(tokenid)
  if (token == null) {
      token = new Token(tokenid)
      token.registry = registry.id
      token.identifier = id
      token.totalSupply = constants.BIGINT_ZERO
      token.maxSupply = tokenMaxSupply
      token.totalSales = constants.BIGINT_ZERO
      token.totalSaleValue = constants.BIGINT_ZERO
      token.creator = tokenCreator.id
  }
  return token as Token
}

function registerCreate(
    event: ethereum.Event,
    registry: TokenRegistry,
    creator: Account,
    id: BigInt,
    maxsupply: BigInt)
    : void {
    let token = fetchToken(registry, id, creator, maxsupply)
    token.save()
  }

export function handleTotwNftsCreated(event: TotwNftsCreatedEvent): void {
    let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
    let creator = new Account(event.params.creatorAddress.toHex())
    registry.save()
    creator.save()

    for (let i=0; i< event.params.nftIds.length; i++) {
      registerCreate(
        event,
        registry,
        creator,
        event.params.nftIds[i],
        event.params.maxSupplys[i]
      )
    }
}
  
export function handleNFTCreatedAndAdded(event: NFTCreatedAndAddedEvent): void {
    let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
    let creator = new Account(event.params.treatModel.toHex())
    registry.save()
    creator.save()
    let eventHex = event.transaction.input.toHexString()
    //let maxSupply =  parseInt(eventHex.substring(10,74),16) as i32
  
    for (let i=0; i< event.params.nftIds.length; i++) {
      let maxSupply = parseInt(eventHex.substring(10+(64*(i+5)),74+(64*(i+5))),16) as i32
      registerCreate(
        event,
        registry,
        creator,
        event.params.nftIds[i],
        BigInt.fromI32(maxSupply)
      )
    }
}
  
export function handleSS0NFTCreatedAndAdded(event: NFTSS0CreatedAndAddedEvent): void {
    let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
    let creator = new Account(event.params.treatModel.toHex())
    registry.save()
    creator.save()
    let eventHex = event.transaction.input.toHexString()
  
    for (let i=0; i< event.params.nftIds.length; i++) {
      let maxSupply = parseInt(eventHex.substring(10+(64*(i+5)),74+(64*(i+5))),16) as i32
      registerCreate(
        event,
        registry,
        creator,
        event.params.nftIds[i],
        BigInt.fromI32(maxSupply)
      )
    }
}

export function handleSubNFTCreatedAndAdded(event: SubNFTCreatedAndAddedEvent): void {
    let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
    let creator = new Account(event.params.treatModel.toHex())
    registry.save()
    creator.save()
    let eventHex = event.transaction.input.toHexString()
  
    for (let i=0; i< event.params.nftIds.length; i++) {
      let maxSupply = parseInt(eventHex.substring(10+(64*(i+5)),74+(64*(i+5))),16) as i32
      registerCreate(
        event,
        registry,
        creator,
        event.params.nftIds[i],
        BigInt.fromI32(maxSupply)
      )
    }
}

export function handleTreatBundleV0Added(event: V0TreatBundleAddedEvent): void {
  //append creator address to token id
}

export function handleTreatV0NFTAdded(event: V0NFTAddedEvent): void {
  let registry = new TokenRegistry("0xdE39D0B9A93dCD541c24E80c8361f362AAb0f213".toLowerCase())
  let creator = new Account(event.params.treatModel.toHex())
  registry.save()
  creator.save()

  for (let i=0; i< event.params.nftIds.length; i++) {    
    registerCreate(
      event,
      registry,
      creator,
      event.params.nftIds[i],
      BigInt.fromU32(691337420)
    )
  }
}

export function handleTreatBundleV1Added(event: V1TreatBundleAddedEvent): void {
  let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
  let creator = new Account(event.params.treatModel.toHex())
  registry.save()
  creator.save()

  for (let i=0; i< event.params.nftIds.length; i++) {    
    registerCreate(
      event,
      registry,
      creator,
      event.params.nftIds[i],
      BigInt.fromU32(691337420)
    )
  }
}

export function handleTreatV1NFTAdded(event: V1NFTAddedEvent): void {
  /*let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
  let creator = new Account(event.params.treatModel.toHex())
  registry.save()
  creator.save()

  for (let i=0; i< event.params.nftIds.length; i++) {    
    registerCreate(
      event,
      registry,
      creator,
      event.params.nftIds[i]
    )
  }*/
  //commented out because creator is 0x0 address for some reason
}

export function handleTreatBundleV2Added(event: V2TreatBundleAddedEvent): void {
  let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
  let creator = new Account(event.params.treatModel.toHex())
  registry.save()
  creator.save()

  for (let i=0; i< event.params.nftIds.length; i++) {    
    registerCreate(
      event,
      registry,
      creator,
      event.params.nftIds[i],
      BigInt.fromU32(691337420)
    )
  }
}

export function handleTreatV2NFTAdded(event: V2NFTAddedEvent): void {
  /*let registry = new TokenRegistry("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase())
  let creator = new Account(event.params.treatModel.toHex())
  registry.save()
  creator.save()

  for (let i=0; i< event.params.nftIds.length; i++) {    
    registerCreate(
      event,
      registry,
      creator,
      event.params.nftIds[i]
    )
  }*/
}

export function handleTreatV0NFTRedeemed(event: RedeemedT0Event): void {
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
  //log.info('lucas mum like it when: {}',[lucasMum.toString()])
  let token = Token.load("0xdE39D0B9A93dCD541c24E80c8361f362AAb0f213".toLowerCase().concat('-').concat(BigInt.fromI32(lucasMum).toHex()))
  if (!token) {
      //do nothing
  } else {
    token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
    token.save()
  }
  let theAddress = event.transaction.to
  if (theAddress) {
    let totwcontract = TreatMart0.bind(theAddress)
    let creator = Account.load(totwcontract.treatModels(BigInt.fromI32(lucasMum)).toHex())
    //let creator = Account.load(sweetshopcontract.getCreatorAddress(BigInt.fromI32(event.transaction.input.toI32())).toHex())
    //let creator = Account.load(totwcontract.treatModels(BigInt.fromUnsignedBytes(ByteArray.fromHexString(event.transaction.input.toHexString().substring(44)))).toHex())
    //let creator = Account.load(totwcontract.treatModels(json.fromBytes(ByteArray.fromHexString(event.transaction.input.toHexString().substring(44))).toBigInt()).toHex())
    log.info('logging this {}', [event.transaction.input.toHexString()])
    //let creator = Account.load(totwcontract.treatModels(BigInt.fromUnsignedBytes(event.transaction.input)).toHex())
    if (!creator){
      //do nothing
    } else {
      creator.totalSales = integers.increment(creator.totalSales, event.transaction.value)
      creator.save()
    }
  } else {
    //do nothing
  }
}

export function handleTreatV1NFTRedeemed(event: RedeemedT1Event): void {
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
  let lucasMum =  parseInt(eventHex.substring(10,74),16) as i32
  let token = Token.load("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase().concat('-').concat(BigInt.fromI32(lucasMum).toHex()))
  if (!token) {
      //do nothing
  } else {
    token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
    token.save()
  }
  let theAddress = event.transaction.to
  if (theAddress) {
    let totwcontract = TreatMart1.bind(theAddress)
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
}


export function handleTreatV2NFTRedeemed(event: RedeemedT2Event): void {
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
  if (!token) {
      //do nothing
  } else {
    token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
    token.save()
  }
  let theAddress = event.transaction.to
  if (theAddress) {
    let totwcontract = TreatMart2.bind(theAddress)
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
}

export function handleSweetShopRedeem(event: RedeemedSSEvent): void {
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
  //log.info('lucas mum also likes it when: ',[lucasMum.toString()])
  let token = Token.load("0x36F8f51f65Fe200311F709b797baF4E193DD0b0D".toLowerCase().concat('-').concat(BigInt.fromI32(lucasMum).toHex()))
  if (!token) {
      //do nothing
  } else {
    token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
    token.save()
  }
  let theAddress = event.transaction.to
  if (theAddress) {
    let sweetshopcontract = SweetShop.bind(theAddress)
    //let creator = Account.load(sweetshopcontract.getCreatorAddress(BigInt.fromI32(event.transaction.input.toI32())).toHex())
    let creator = Account.load(sweetshopcontract.getCreatorAddress(BigInt.fromI32(lucasMum)).toHex())
    if (!creator){
      //do nothing
    } else {
      creator.totalSales = integers.increment(creator.totalSales, event.transaction.value)
      creator.save()
    }
  } else {
    //do nothing
  }
}

export function handleSweetShop0Redeem(event: RedeemSS0Event): void {
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
  if (token == null) {
      //do nothing
  } else {
    token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
    token.save()
  }
  let theAddress = event.transaction.to
  if (theAddress) {
    let sweetshopcontract = SweetShop0.bind(theAddress)
    let theNftId = BigInt.fromI32(lucasMum)
    let creator = Account.load(sweetshopcontract.getCreatorAddress(theNftId).toHex())
    if (creator == null){
      //do nothing
    } else {
      creator.totalSales = integers.increment(creator.totalSales, event.transaction.value)
      creator.save()
    }
  }
}

export function handleSubShopRedeem(event: RedeemedSubEvent): void {
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
  if (!token) {
      //do nothing
  } else {
    token.totalSaleValue = integers.increment(token.totalSaleValue, event.transaction.value)
    token.save()
  }
  let theAddress = event.transaction.to
  if (theAddress) {
    let submartcontract = SubscriberMart.bind(theAddress)
    //let creator = Account.load(sweetshopcontract.getCreatorAddress(BigInt.fromI32(event.transaction.input.toI32())).toHex())
    let creator = Account.load(submartcontract.getCreatorAddress(BigInt.fromI32(lucasMum)).toHex())
    if (!creator){
      //do nothing
    } else {
      creator.totalSales = integers.increment(creator.totalSales, event.transaction.value)
      creator.save()
    }
  } else {
    //do nothing
  }
}