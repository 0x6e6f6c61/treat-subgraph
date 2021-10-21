import {
  ethereum,
  Address,
  BigInt
} from '@graphprotocol/graph-ts'

import {
  Account,
  Event,
  Transaction,
  TokenRegistry,
  Token,
  Balance,
  Transfer,
  Approval,
  Sale,
  Treat,
  Creator,
  User
} from '../generated/schema'

import {
  TreatNFTMinterV2,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
} from '../generated/TreatNFTMinterV2/TreatNFTMinterV2'

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
    let purchase = new Sale(event.transaction.hash.toHex())
    purchase.treatPurchased = event.params._id
    purchase.cost = event.transaction.value
    purchase.purchaseDate = event.block.timestamp
    purchase.sourceContract = event.params._operator
    purchase.quantity = event.params._amount
    purchase.save()
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

  if (event.params._from.toString() == constants.ADDRESS_ZERO) {
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

/*import { BigInt } from "@graphprotocol/graph-ts"
import {
  TreatNFTMinterV2,
  ApprovalForAll,
  PerformerAdded,
  PerformerRemoved,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/TreatNFTMinterV2/TreatNFTMinterV2"
import { ExampleEntity, Treat, User, Creator, PrimarySale, SecondarySale, TreatBalance } from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAll): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._owner = event.params._owner
  entity._operator = event.params._operator

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.contractURI(...)
  // - contract.create(...)
  // - contract.createTreat(...)
  // - contract.creators(...)
  // - contract.isApprovedForAll(...)
  // - contract.isMinter(...)
  // - contract.isOwner(...)
  // - contract.isPerformer(...)
  // - contract.isWhitelistAdmin(...)
  // - contract.maxSupply(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.referrers(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenMaxSupply(...)
  // - contract.tokenSupply(...)
  // - contract.totalSupply(...)
  // - contract.uri(...)
}

export function handlePerformerAdded(event: PerformerAdded): void {}

export function handlePerformerRemoved(event: PerformerRemoved): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {
  // let nft = 
}*/