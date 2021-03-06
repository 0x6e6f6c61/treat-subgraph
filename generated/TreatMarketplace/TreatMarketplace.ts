// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OnCreatorRefUpdated extends ethereum.Event {
  get params(): OnCreatorRefUpdated__Params {
    return new OnCreatorRefUpdated__Params(this);
  }
}

export class OnCreatorRefUpdated__Params {
  _event: OnCreatorRefUpdated;

  constructor(event: OnCreatorRefUpdated) {
    this._event = event;
  }

  get oldAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OnCreatorUpdated extends ethereum.Event {
  get params(): OnCreatorUpdated__Params {
    return new OnCreatorUpdated__Params(this);
  }
}

export class OnCreatorUpdated__Params {
  _event: OnCreatorUpdated;

  constructor(event: OnCreatorUpdated) {
    this._event = event;
  }

  get oldAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OnNftSold extends ethereum.Event {
  get params(): OnNftSold__Params {
    return new OnNftSold__Params(this);
  }
}

export class OnNftSold__Params {
  _event: OnNftSold;

  constructor(event: OnNftSold) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nftId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OnOrderCancelled extends ethereum.Event {
  get params(): OnOrderCancelled__Params {
    return new OnOrderCancelled__Params(this);
  }
}

export class OnOrderCancelled__Params {
  _event: OnOrderCancelled;

  constructor(event: OnOrderCancelled) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OnOrderListed extends ethereum.Event {
  get params(): OnOrderListed__Params {
    return new OnOrderListed__Params(this);
  }
}

export class OnOrderListed__Params {
  _event: OnOrderListed;

  constructor(event: OnOrderListed) {
    this._event = event;
  }

  get nftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TreatMarketplace__orderBookResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class TreatMarketplace extends ethereum.SmartContract {
  static bind(address: Address): TreatMarketplace {
    return new TreatMarketplace("TreatMarketplace", address);
  }

  creatorPercentage(): BigInt {
    let result = super.call(
      "creatorPercentage",
      "creatorPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_creatorPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "creatorPercentage",
      "creatorPercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  creatorRefPercentage(param0: Address): BigInt {
    let result = super.call(
      "creatorRefPercentage",
      "creatorRefPercentage(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_creatorRefPercentage(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "creatorRefPercentage",
      "creatorRefPercentage(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCreatorAddress(nftId: BigInt): Address {
    let result = super.call(
      "getCreatorAddress",
      "getCreatorAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(nftId)]
    );

    return result[0].toAddress();
  }

  try_getCreatorAddress(nftId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCreatorAddress",
      "getCreatorAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(nftId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCreatorRefAddress(treatModel: Address): Address {
    let result = super.call(
      "getCreatorRefAddress",
      "getCreatorRefAddress(address):(address)",
      [ethereum.Value.fromAddress(treatModel)]
    );

    return result[0].toAddress();
  }

  try_getCreatorRefAddress(treatModel: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCreatorRefAddress",
      "getCreatorRefAddress(address):(address)",
      [ethereum.Value.fromAddress(treatModel)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOpenOrdersForNft(nftId: BigInt): Array<Address> {
    let result = super.call(
      "getOpenOrdersForNft",
      "getOpenOrdersForNft(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(nftId)]
    );

    return result[0].toAddressArray();
  }

  try_getOpenOrdersForNft(nftId: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getOpenOrdersForNft",
      "getOpenOrdersForNft(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(nftId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getOpenOrdersForSeller(seller: Address): Array<BigInt> {
    let result = super.call(
      "getOpenOrdersForSeller",
      "getOpenOrdersForSeller(address):(uint256[])",
      [ethereum.Value.fromAddress(seller)]
    );

    return result[0].toBigIntArray();
  }

  try_getOpenOrdersForSeller(
    seller: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getOpenOrdersForSeller",
      "getOpenOrdersForSeller(address):(uint256[])",
      [ethereum.Value.fromAddress(seller)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxTokenId(): BigInt {
    let result = super.call("maxTokenId", "maxTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxTokenId", "maxTokenId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  melonNumber(): BigInt {
    let result = super.call("melonNumber", "melonNumber():(uint256)", []);

    return result[0].toBigInt();
  }

  try_melonNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("melonNumber", "melonNumber():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155BatchReceived(
    _operator: Address,
    _from: Address,
    _ids: Array<BigInt>,
    _amounts: Array<BigInt>,
    _data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigIntArray(_ids),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    _operator: Address,
    _from: Address,
    _ids: Array<BigInt>,
    _amounts: Array<BigInt>,
    _data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigIntArray(_ids),
        ethereum.Value.fromUnsignedBigIntArray(_amounts),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    _operator: Address,
    _from: Address,
    _id: BigInt,
    _amount: BigInt,
    _data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigInt(_id),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    _operator: Address,
    _from: Address,
    _id: BigInt,
    _amount: BigInt,
    _data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigInt(_id),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  orderBalances(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "orderBalances",
      "orderBalances(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_orderBalances(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "orderBalances",
      "orderBalances(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  orderBook(
    param0: BigInt,
    param1: Address
  ): TreatMarketplace__orderBookResult {
    let result = super.call(
      "orderBook",
      "orderBook(uint256,address):(address,address,uint256,uint256,uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new TreatMarketplace__orderBookResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_orderBook(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<TreatMarketplace__orderBookResult> {
    let result = super.tryCall(
      "orderBook",
      "orderBook(uint256,address):(address,address,uint256,uint256,uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TreatMarketplace__orderBookResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceID: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceID)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tittyFundAddress(): Address {
    let result = super.call(
      "tittyFundAddress",
      "tittyFundAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_tittyFundAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tittyFundAddress",
      "tittyFundAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treasuryAddress(): Address {
    let result = super.call(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_treasuryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treasuryPercentage(): BigInt {
    let result = super.call(
      "treasuryPercentage",
      "treasuryPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_treasuryPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "treasuryPercentage",
      "treasuryPercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  treatDaoToken(): Address {
    let result = super.call("treatDaoToken", "treatDaoToken():(address)", []);

    return result[0].toAddress();
  }

  try_treatDaoToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treatDaoToken",
      "treatDaoToken():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treatMinter(): Address {
    let result = super.call("treatMinter", "treatMinter():(address)", []);

    return result[0].toAddress();
  }

  try_treatMinter(): ethereum.CallResult<Address> {
    let result = super.tryCall("treatMinter", "treatMinter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CancelOrderCall extends ethereum.Call {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }

  get nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get seller(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class ListOrderCall extends ethereum.Call {
  get inputs(): ListOrderCall__Inputs {
    return new ListOrderCall__Inputs(this);
  }

  get outputs(): ListOrderCall__Outputs {
    return new ListOrderCall__Outputs(this);
  }
}

export class ListOrderCall__Inputs {
  _call: ListOrderCall;

  constructor(call: ListOrderCall) {
    this._call = call;
  }

  get nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiresDate(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ListOrderCall__Outputs {
  _call: ListOrderCall;

  constructor(call: ListOrderCall) {
    this._call = call;
  }
}

export class PurchaseCall extends ethereum.Call {
  get inputs(): PurchaseCall__Inputs {
    return new PurchaseCall__Inputs(this);
  }

  get outputs(): PurchaseCall__Outputs {
    return new PurchaseCall__Outputs(this);
  }
}

export class PurchaseCall__Inputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get seller(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class PurchaseCall__Outputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCreatorOverridesCall extends ethereum.Call {
  get inputs(): SetCreatorOverridesCall__Inputs {
    return new SetCreatorOverridesCall__Inputs(this);
  }

  get outputs(): SetCreatorOverridesCall__Outputs {
    return new SetCreatorOverridesCall__Outputs(this);
  }
}

export class SetCreatorOverridesCall__Inputs {
  _call: SetCreatorOverridesCall;

  constructor(call: SetCreatorOverridesCall) {
    this._call = call;
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get overrideAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class SetCreatorOverridesCall__Outputs {
  _call: SetCreatorOverridesCall;

  constructor(call: SetCreatorOverridesCall) {
    this._call = call;
  }
}

export class SetCreatorPercentageCall extends ethereum.Call {
  get inputs(): SetCreatorPercentageCall__Inputs {
    return new SetCreatorPercentageCall__Inputs(this);
  }

  get outputs(): SetCreatorPercentageCall__Outputs {
    return new SetCreatorPercentageCall__Outputs(this);
  }
}

export class SetCreatorPercentageCall__Inputs {
  _call: SetCreatorPercentageCall;

  constructor(call: SetCreatorPercentageCall) {
    this._call = call;
  }

  get _creatorPercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCreatorPercentageCall__Outputs {
  _call: SetCreatorPercentageCall;

  constructor(call: SetCreatorPercentageCall) {
    this._call = call;
  }
}

export class SetCreatorRefOverridesCall extends ethereum.Call {
  get inputs(): SetCreatorRefOverridesCall__Inputs {
    return new SetCreatorRefOverridesCall__Inputs(this);
  }

  get outputs(): SetCreatorRefOverridesCall__Outputs {
    return new SetCreatorRefOverridesCall__Outputs(this);
  }
}

export class SetCreatorRefOverridesCall__Inputs {
  _call: SetCreatorRefOverridesCall;

  constructor(call: SetCreatorRefOverridesCall) {
    this._call = call;
  }

  get treatModels(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get overrideAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class SetCreatorRefOverridesCall__Outputs {
  _call: SetCreatorRefOverridesCall;

  constructor(call: SetCreatorRefOverridesCall) {
    this._call = call;
  }
}

export class SetCreatorRefPercentageCall extends ethereum.Call {
  get inputs(): SetCreatorRefPercentageCall__Inputs {
    return new SetCreatorRefPercentageCall__Inputs(this);
  }

  get outputs(): SetCreatorRefPercentageCall__Outputs {
    return new SetCreatorRefPercentageCall__Outputs(this);
  }
}

export class SetCreatorRefPercentageCall__Inputs {
  _call: SetCreatorRefPercentageCall;

  constructor(call: SetCreatorRefPercentageCall) {
    this._call = call;
  }

  get _treatModel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _creatorRefPercentage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCreatorRefPercentageCall__Outputs {
  _call: SetCreatorRefPercentageCall;

  constructor(call: SetCreatorRefPercentageCall) {
    this._call = call;
  }
}

export class SetMelonNumberCall extends ethereum.Call {
  get inputs(): SetMelonNumberCall__Inputs {
    return new SetMelonNumberCall__Inputs(this);
  }

  get outputs(): SetMelonNumberCall__Outputs {
    return new SetMelonNumberCall__Outputs(this);
  }
}

export class SetMelonNumberCall__Inputs {
  _call: SetMelonNumberCall;

  constructor(call: SetMelonNumberCall) {
    this._call = call;
  }

  get _melonNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMelonNumberCall__Outputs {
  _call: SetMelonNumberCall;

  constructor(call: SetMelonNumberCall) {
    this._call = call;
  }
}

export class SetMinterAddressCall extends ethereum.Call {
  get inputs(): SetMinterAddressCall__Inputs {
    return new SetMinterAddressCall__Inputs(this);
  }

  get outputs(): SetMinterAddressCall__Outputs {
    return new SetMinterAddressCall__Outputs(this);
  }
}

export class SetMinterAddressCall__Inputs {
  _call: SetMinterAddressCall;

  constructor(call: SetMinterAddressCall) {
    this._call = call;
  }

  get _minterAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMinterAddressCall__Outputs {
  _call: SetMinterAddressCall;

  constructor(call: SetMinterAddressCall) {
    this._call = call;
  }
}

export class SetTittyFundAddressCall extends ethereum.Call {
  get inputs(): SetTittyFundAddressCall__Inputs {
    return new SetTittyFundAddressCall__Inputs(this);
  }

  get outputs(): SetTittyFundAddressCall__Outputs {
    return new SetTittyFundAddressCall__Outputs(this);
  }
}

export class SetTittyFundAddressCall__Inputs {
  _call: SetTittyFundAddressCall;

  constructor(call: SetTittyFundAddressCall) {
    this._call = call;
  }

  get _tittyFundAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTittyFundAddressCall__Outputs {
  _call: SetTittyFundAddressCall;

  constructor(call: SetTittyFundAddressCall) {
    this._call = call;
  }
}

export class SetTreasuryAddressCall extends ethereum.Call {
  get inputs(): SetTreasuryAddressCall__Inputs {
    return new SetTreasuryAddressCall__Inputs(this);
  }

  get outputs(): SetTreasuryAddressCall__Outputs {
    return new SetTreasuryAddressCall__Outputs(this);
  }
}

export class SetTreasuryAddressCall__Inputs {
  _call: SetTreasuryAddressCall;

  constructor(call: SetTreasuryAddressCall) {
    this._call = call;
  }

  get _treasuryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTreasuryAddressCall__Outputs {
  _call: SetTreasuryAddressCall;

  constructor(call: SetTreasuryAddressCall) {
    this._call = call;
  }
}

export class SetTreasuryPercentageCall extends ethereum.Call {
  get inputs(): SetTreasuryPercentageCall__Inputs {
    return new SetTreasuryPercentageCall__Inputs(this);
  }

  get outputs(): SetTreasuryPercentageCall__Outputs {
    return new SetTreasuryPercentageCall__Outputs(this);
  }
}

export class SetTreasuryPercentageCall__Inputs {
  _call: SetTreasuryPercentageCall;

  constructor(call: SetTreasuryPercentageCall) {
    this._call = call;
  }

  get _treasuryPercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTreasuryPercentageCall__Outputs {
  _call: SetTreasuryPercentageCall;

  constructor(call: SetTreasuryPercentageCall) {
    this._call = call;
  }
}

export class SetTreatDaoAddressCall extends ethereum.Call {
  get inputs(): SetTreatDaoAddressCall__Inputs {
    return new SetTreatDaoAddressCall__Inputs(this);
  }

  get outputs(): SetTreatDaoAddressCall__Outputs {
    return new SetTreatDaoAddressCall__Outputs(this);
  }
}

export class SetTreatDaoAddressCall__Inputs {
  _call: SetTreatDaoAddressCall;

  constructor(call: SetTreatDaoAddressCall) {
    this._call = call;
  }

  get _treatDaoAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTreatDaoAddressCall__Outputs {
  _call: SetTreatDaoAddressCall;

  constructor(call: SetTreatDaoAddressCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _treasuryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _treatMinterAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _treasuryPercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _creatorPercentage(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _tittyFundAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _treatDaoAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
