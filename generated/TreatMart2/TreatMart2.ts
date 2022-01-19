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

export class NFTAdded extends ethereum.Event {
  get params(): NFTAdded__Params {
    return new NFTAdded__Params(this);
  }
}

export class NFTAdded__Params {
  _event: NFTAdded;

  constructor(event: NFTAdded) {
    this._event = event;
  }

  get nftIds(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get points(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get treatModel(): Address {
    return this._event.parameters[2].value.toAddress();
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

export class Redeemed extends ethereum.Event {
  get params(): Redeemed__Params {
    return new Redeemed__Params(this);
  }
}

export class Redeemed__Params {
  _event: Redeemed;

  constructor(event: Redeemed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SetAdded extends ethereum.Event {
  get params(): SetAdded__Params {
    return new SetAdded__Params(this);
  }
}

export class SetAdded__Params {
  _event: SetAdded;

  constructor(event: SetAdded) {
    this._event = event;
  }

  get setId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get points(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get treatModel(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class SetEdited extends ethereum.Event {
  get params(): SetEdited__Params {
    return new SetEdited__Params(this);
  }
}

export class SetEdited__Params {
  _event: SetEdited;

  constructor(event: SetEdited) {
    this._event = event;
  }

  get setId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get points(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TreatMart2 extends ethereum.SmartContract {
  static bind(address: Address): TreatMart2 {
    return new TreatMart2("TreatMart2", address);
  }

  defaultCreatorPercentage(): BigInt {
    let result = super.call(
      "defaultCreatorPercentage",
      "defaultCreatorPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_defaultCreatorPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "defaultCreatorPercentage",
      "defaultCreatorPercentage():(uint256)",
      []
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

  getSetIds(_setId: BigInt): Array<BigInt> {
    let result = super.call("getSetIds", "getSetIds(uint256):(uint256[])", [
      ethereum.Value.fromUnsignedBigInt(_setId)
    ]);

    return result[0].toBigIntArray();
  }

  try_getSetIds(_setId: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall("getSetIds", "getSetIds(uint256):(uint256[])", [
      ethereum.Value.fromUnsignedBigInt(_setId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isGiveAwayNFT(param0: BigInt): boolean {
    let result = super.call("isGiveAwayNFT", "isGiveAwayNFT(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isGiveAwayNFT(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isGiveAwayNFT",
      "isGiveAwayNFT(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  maxSetId(): BigInt {
    let result = super.call("maxSetId", "maxSetId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSetId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSetId", "maxSetId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftCosts(param0: BigInt): BigInt {
    let result = super.call("nftCosts", "nftCosts(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_nftCosts(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nftCosts", "nftCosts(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftSetCosts(param0: BigInt): BigInt {
    let result = super.call("nftSetCosts", "nftSetCosts(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_nftSetCosts(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nftSetCosts",
      "nftSetCosts(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftSetIds(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "nftSetIds",
      "nftSetIds(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_nftSetIds(param0: BigInt, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nftSetIds",
      "nftSetIds(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
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

  performerPercentages(param0: BigInt): BigInt {
    let result = super.call(
      "performerPercentages",
      "performerPercentages(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_performerPercentages(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "performerPercentages",
      "performerPercentages(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  performerSetPercentages(param0: BigInt): BigInt {
    let result = super.call(
      "performerSetPercentages",
      "performerSetPercentages(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_performerSetPercentages(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "performerSetPercentages",
      "performerSetPercentages(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  treatModels(param0: BigInt): Address {
    let result = super.call("treatModels", "treatModels(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_treatModels(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treatModels",
      "treatModels(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treatNFTMinter(): Address {
    let result = super.call("treatNFTMinter", "treatNFTMinter():(address)", []);

    return result[0].toAddress();
  }

  try_treatNFTMinter(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treatNFTMinter",
      "treatNFTMinter():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treatSetModels(param0: BigInt): Address {
    let result = super.call(
      "treatSetModels",
      "treatSetModels(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_treatSetModels(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treatSetModels",
      "treatSetModels(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treatTreasuryAddress(): Address {
    let result = super.call(
      "treatTreasuryAddress",
      "treatTreasuryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_treatTreasuryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treatTreasuryAddress",
      "treatTreasuryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _TreatNFTMinterAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _TreatTreasuryAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddGiveAwayTreatCall extends ethereum.Call {
  get inputs(): AddGiveAwayTreatCall__Inputs {
    return new AddGiveAwayTreatCall__Inputs(this);
  }

  get outputs(): AddGiveAwayTreatCall__Outputs {
    return new AddGiveAwayTreatCall__Outputs(this);
  }
}

export class AddGiveAwayTreatCall__Inputs {
  _call: AddGiveAwayTreatCall;

  constructor(call: AddGiveAwayTreatCall) {
    this._call = call;
  }

  get nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddGiveAwayTreatCall__Outputs {
  _call: AddGiveAwayTreatCall;

  constructor(call: AddGiveAwayTreatCall) {
    this._call = call;
  }
}

export class AddNFTCall extends ethereum.Call {
  get inputs(): AddNFTCall__Inputs {
    return new AddNFTCall__Inputs(this);
  }

  get outputs(): AddNFTCall__Outputs {
    return new AddNFTCall__Outputs(this);
  }
}

export class AddNFTCall__Inputs {
  _call: AddNFTCall;

  constructor(call: AddNFTCall) {
    this._call = call;
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddNFTCall__Outputs {
  _call: AddNFTCall;

  constructor(call: AddNFTCall) {
    this._call = call;
  }
}

export class AddSetCall extends ethereum.Call {
  get inputs(): AddSetCall__Inputs {
    return new AddSetCall__Inputs(this);
  }

  get outputs(): AddSetCall__Outputs {
    return new AddSetCall__Outputs(this);
  }
}

export class AddSetCall__Inputs {
  _call: AddSetCall;

  constructor(call: AddSetCall) {
    this._call = call;
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _treatModel(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class AddSetCall__Outputs {
  _call: AddSetCall;

  constructor(call: AddSetCall) {
    this._call = call;
  }
}

export class EditSetCostCall extends ethereum.Call {
  get inputs(): EditSetCostCall__Inputs {
    return new EditSetCostCall__Inputs(this);
  }

  get outputs(): EditSetCostCall__Outputs {
    return new EditSetCostCall__Outputs(this);
  }
}

export class EditSetCostCall__Inputs {
  _call: EditSetCostCall;

  constructor(call: EditSetCostCall) {
    this._call = call;
  }

  get _setId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EditSetCostCall__Outputs {
  _call: EditSetCostCall;

  constructor(call: EditSetCostCall) {
    this._call = call;
  }
}

export class HarvestTreatsCall extends ethereum.Call {
  get inputs(): HarvestTreatsCall__Inputs {
    return new HarvestTreatsCall__Inputs(this);
  }

  get outputs(): HarvestTreatsCall__Outputs {
    return new HarvestTreatsCall__Outputs(this);
  }
}

export class HarvestTreatsCall__Inputs {
  _call: HarvestTreatsCall;

  constructor(call: HarvestTreatsCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class HarvestTreatsCall__Outputs {
  _call: HarvestTreatsCall;

  constructor(call: HarvestTreatsCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get _nft(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class RedeemFreeTreatCall extends ethereum.Call {
  get inputs(): RedeemFreeTreatCall__Inputs {
    return new RedeemFreeTreatCall__Inputs(this);
  }

  get outputs(): RedeemFreeTreatCall__Outputs {
    return new RedeemFreeTreatCall__Outputs(this);
  }
}

export class RedeemFreeTreatCall__Inputs {
  _call: RedeemFreeTreatCall;

  constructor(call: RedeemFreeTreatCall) {
    this._call = call;
  }

  get nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemFreeTreatCall__Outputs {
  _call: RedeemFreeTreatCall;

  constructor(call: RedeemFreeTreatCall) {
    this._call = call;
  }
}

export class RedeemMultipleCall extends ethereum.Call {
  get inputs(): RedeemMultipleCall__Inputs {
    return new RedeemMultipleCall__Inputs(this);
  }

  get outputs(): RedeemMultipleCall__Outputs {
    return new RedeemMultipleCall__Outputs(this);
  }
}

export class RedeemMultipleCall__Inputs {
  _call: RedeemMultipleCall;

  constructor(call: RedeemMultipleCall) {
    this._call = call;
  }

  get _nft(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemMultipleCall__Outputs {
  _call: RedeemMultipleCall;

  constructor(call: RedeemMultipleCall) {
    this._call = call;
  }
}

export class RedeemSetCall extends ethereum.Call {
  get inputs(): RedeemSetCall__Inputs {
    return new RedeemSetCall__Inputs(this);
  }

  get outputs(): RedeemSetCall__Outputs {
    return new RedeemSetCall__Outputs(this);
  }
}

export class RedeemSetCall__Inputs {
  _call: RedeemSetCall;

  constructor(call: RedeemSetCall) {
    this._call = call;
  }

  get _setId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemSetCall__Outputs {
  _call: RedeemSetCall;

  constructor(call: RedeemSetCall) {
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

export class SetNFTPerformerPercentageCall extends ethereum.Call {
  get inputs(): SetNFTPerformerPercentageCall__Inputs {
    return new SetNFTPerformerPercentageCall__Inputs(this);
  }

  get outputs(): SetNFTPerformerPercentageCall__Outputs {
    return new SetNFTPerformerPercentageCall__Outputs(this);
  }
}

export class SetNFTPerformerPercentageCall__Inputs {
  _call: SetNFTPerformerPercentageCall;

  constructor(call: SetNFTPerformerPercentageCall) {
    this._call = call;
  }

  get _nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _percentageToPerformer(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetNFTPerformerPercentageCall__Outputs {
  _call: SetNFTPerformerPercentageCall;

  constructor(call: SetNFTPerformerPercentageCall) {
    this._call = call;
  }
}

export class SetNFTSetPerformerPercentageCall extends ethereum.Call {
  get inputs(): SetNFTSetPerformerPercentageCall__Inputs {
    return new SetNFTSetPerformerPercentageCall__Inputs(this);
  }

  get outputs(): SetNFTSetPerformerPercentageCall__Outputs {
    return new SetNFTSetPerformerPercentageCall__Outputs(this);
  }
}

export class SetNFTSetPerformerPercentageCall__Inputs {
  _call: SetNFTSetPerformerPercentageCall;

  constructor(call: SetNFTSetPerformerPercentageCall) {
    this._call = call;
  }

  get _setId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _percentageToPerformer(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetNFTSetPerformerPercentageCall__Outputs {
  _call: SetNFTSetPerformerPercentageCall;

  constructor(call: SetNFTSetPerformerPercentageCall) {
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

export class TreasuryCall extends ethereum.Call {
  get inputs(): TreasuryCall__Inputs {
    return new TreasuryCall__Inputs(this);
  }

  get outputs(): TreasuryCall__Outputs {
    return new TreasuryCall__Outputs(this);
  }
}

export class TreasuryCall__Inputs {
  _call: TreasuryCall;

  constructor(call: TreasuryCall) {
    this._call = call;
  }

  get _treatTreasuryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TreasuryCall__Outputs {
  _call: TreasuryCall;

  constructor(call: TreasuryCall) {
    this._call = call;
  }
}
