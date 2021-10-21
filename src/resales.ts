import {
  ethereum,
  Address,
  BigInt
} from '@graphprotocol/graph-ts'

import {
  Event,
  Transaction,
  Account,
  TokenRegistry,
  Token,
  Balance,
  Transfer,
  Approval,
  Sale,
  SecondarySale,
  Treat,
  Creator,
  User
} from '../generated/schema'

import {
  TreatMarketplace,
  OnNftSold as OnNftSoldEvent
} from '../generated/TreatMarketplace/TreatMarketplace'

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

export function handleOnNftSold(event: OnNftSoldEvent) : void {
  let purchase = new SecondarySale(event.transaction.hash.toHex())
  purchase.treatPurchased = event.params.nftId
  purchase.cost = event.transaction.value
  purchase.purchaseDate = event.block.timestamp
  //purchase.sourceContract = event.transaction.to
  purchase.sourceContract = event.address
  purchase.seller = event.params.from
  purchase.buyer = event.params.to
  purchase.quantity = event.params.quantity
  purchase.save()
}