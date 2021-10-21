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

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class MinterAdded extends ethereum.Event {
  get params(): MinterAdded__Params {
    return new MinterAdded__Params(this);
  }
}

export class MinterAdded__Params {
  _event: MinterAdded;

  constructor(event: MinterAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterRemoved extends ethereum.Event {
  get params(): MinterRemoved__Params {
    return new MinterRemoved__Params(this);
  }
}

export class MinterRemoved__Params {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
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

export class PerformerAdded extends ethereum.Event {
  get params(): PerformerAdded__Params {
    return new PerformerAdded__Params(this);
  }
}

export class PerformerAdded__Params {
  _event: PerformerAdded;

  constructor(event: PerformerAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PerformerRemoved extends ethereum.Event {
  get params(): PerformerRemoved__Params {
    return new PerformerRemoved__Params(this);
  }
}

export class PerformerRemoved__Params {
  _event: PerformerRemoved;

  constructor(event: PerformerRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get _operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get _amounts(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get _operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get _uri(): string {
    return this._event.parameters[0].value.toString();
  }

  get _id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class WhitelistAdminAdded extends ethereum.Event {
  get params(): WhitelistAdminAdded__Params {
    return new WhitelistAdminAdded__Params(this);
  }
}

export class WhitelistAdminAdded__Params {
  _event: WhitelistAdminAdded;

  constructor(event: WhitelistAdminAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class WhitelistAdminRemoved extends ethereum.Event {
  get params(): WhitelistAdminRemoved__Params {
    return new WhitelistAdminRemoved__Params(this);
  }
}

export class WhitelistAdminRemoved__Params {
  _event: WhitelistAdminRemoved;

  constructor(event: WhitelistAdminRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TreatNFTMinterV2 extends ethereum.SmartContract {
  static bind(address: Address): TreatNFTMinterV2 {
    return new TreatNFTMinterV2("TreatNFTMinterV2", address);
  }

  balanceOf(_owner: Address, _id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address, _id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(_owners: Array<Address>, _ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(_owners),
        ethereum.Value.fromUnsignedBigIntArray(_ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    _owners: Array<Address>,
    _ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(_owners),
        ethereum.Value.fromUnsignedBigIntArray(_ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  contractURI(): string {
    let result = super.call("contractURI", "contractURI():(string)", []);

    return result[0].toString();
  }

  try_contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("contractURI", "contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  create(
    _maxSupply: BigInt,
    _initialSupply: BigInt,
    _uri: string,
    _data: Bytes,
    _performerAddress: Address
  ): BigInt {
    let result = super.call(
      "create",
      "create(uint256,uint256,string,bytes,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_maxSupply),
        ethereum.Value.fromUnsignedBigInt(_initialSupply),
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromAddress(_performerAddress)
      ]
    );

    return result[0].toBigInt();
  }

  try_create(
    _maxSupply: BigInt,
    _initialSupply: BigInt,
    _uri: string,
    _data: Bytes,
    _performerAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "create",
      "create(uint256,uint256,string,bytes,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_maxSupply),
        ethereum.Value.fromUnsignedBigInt(_initialSupply),
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromAddress(_performerAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createTreat(_maxSupply: BigInt, _uri: string, _data: Bytes): BigInt {
    let result = super.call(
      "createTreat",
      "createTreat(uint256,string,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_maxSupply),
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBigInt();
  }

  try_createTreat(
    _maxSupply: BigInt,
    _uri: string,
    _data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createTreat",
      "createTreat(uint256,string,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_maxSupply),
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  creators(param0: BigInt): Address {
    let result = super.call("creators", "creators(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_creators(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("creators", "creators(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    _owner: Address,
    _operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(account: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
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

  isPerformer(account: Address): boolean {
    let result = super.call("isPerformer", "isPerformer(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isPerformer(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPerformer", "isPerformer(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isWhitelistAdmin(account: Address): boolean {
    let result = super.call(
      "isWhitelistAdmin",
      "isWhitelistAdmin(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBoolean();
  }

  try_isWhitelistAdmin(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhitelistAdmin",
      "isWhitelistAdmin(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxSupply(_id: BigInt): BigInt {
    let result = super.call("maxSupply", "maxSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toBigInt();
  }

  try_maxSupply(_id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  referrers(param0: Address): Address {
    let result = super.call("referrers", "referrers(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_referrers(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("referrers", "referrers(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(_interfaceID: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenMaxSupply(param0: BigInt): BigInt {
    let result = super.call(
      "tokenMaxSupply",
      "tokenMaxSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_tokenMaxSupply(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenMaxSupply",
      "tokenMaxSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenSupply(param0: BigInt): BigInt {
    let result = super.call("tokenSupply", "tokenSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tokenSupply(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenSupply",
      "tokenSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(_id: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(_id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uri(_id: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toString();
  }

  try_uri(_id: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  get _proxyRegistryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddMinterCall extends ethereum.Call {
  get inputs(): AddMinterCall__Inputs {
    return new AddMinterCall__Inputs(this);
  }

  get outputs(): AddMinterCall__Outputs {
    return new AddMinterCall__Outputs(this);
  }
}

export class AddMinterCall__Inputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMinterCall__Outputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }
}

export class AddPerformerCall extends ethereum.Call {
  get inputs(): AddPerformerCall__Inputs {
    return new AddPerformerCall__Inputs(this);
  }

  get outputs(): AddPerformerCall__Outputs {
    return new AddPerformerCall__Outputs(this);
  }
}

export class AddPerformerCall__Inputs {
  _call: AddPerformerCall;

  constructor(call: AddPerformerCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddPerformerCall__Outputs {
  _call: AddPerformerCall;

  constructor(call: AddPerformerCall) {
    this._call = call;
  }
}

export class AddTreatReferrerCall extends ethereum.Call {
  get inputs(): AddTreatReferrerCall__Inputs {
    return new AddTreatReferrerCall__Inputs(this);
  }

  get outputs(): AddTreatReferrerCall__Outputs {
    return new AddTreatReferrerCall__Outputs(this);
  }
}

export class AddTreatReferrerCall__Inputs {
  _call: AddTreatReferrerCall;

  constructor(call: AddTreatReferrerCall) {
    this._call = call;
  }

  get treatmodel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get referrer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddTreatReferrerCall__Outputs {
  _call: AddTreatReferrerCall;

  constructor(call: AddTreatReferrerCall) {
    this._call = call;
  }
}

export class AddWhitelistAdminCall extends ethereum.Call {
  get inputs(): AddWhitelistAdminCall__Inputs {
    return new AddWhitelistAdminCall__Inputs(this);
  }

  get outputs(): AddWhitelistAdminCall__Outputs {
    return new AddWhitelistAdminCall__Outputs(this);
  }
}

export class AddWhitelistAdminCall__Inputs {
  _call: AddWhitelistAdminCall;

  constructor(call: AddWhitelistAdminCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddWhitelistAdminCall__Outputs {
  _call: AddWhitelistAdminCall;

  constructor(call: AddWhitelistAdminCall) {
    this._call = call;
  }
}

export class AirdropCall extends ethereum.Call {
  get inputs(): AirdropCall__Inputs {
    return new AirdropCall__Inputs(this);
  }

  get outputs(): AirdropCall__Outputs {
    return new AirdropCall__Outputs(this);
  }
}

export class AirdropCall__Inputs {
  _call: AirdropCall;

  constructor(call: AirdropCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _addresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class AirdropCall__Outputs {
  _call: AirdropCall;

  constructor(call: AirdropCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get _maxSupply(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _initialSupply(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _uri(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _performerAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateTreatCall extends ethereum.Call {
  get inputs(): CreateTreatCall__Inputs {
    return new CreateTreatCall__Inputs(this);
  }

  get outputs(): CreateTreatCall__Outputs {
    return new CreateTreatCall__Outputs(this);
  }
}

export class CreateTreatCall__Inputs {
  _call: CreateTreatCall;

  constructor(call: CreateTreatCall) {
    this._call = call;
  }

  get _maxSupply(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateTreatCall__Outputs {
  _call: CreateTreatCall;

  constructor(call: CreateTreatCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class EndMintingCall extends ethereum.Call {
  get inputs(): EndMintingCall__Inputs {
    return new EndMintingCall__Inputs(this);
  }

  get outputs(): EndMintingCall__Outputs {
    return new EndMintingCall__Outputs(this);
  }
}

export class EndMintingCall__Inputs {
  _call: EndMintingCall;

  constructor(call: EndMintingCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EndMintingCall__Outputs {
  _call: EndMintingCall;

  constructor(call: EndMintingCall) {
    this._call = call;
  }
}

export class EndTreatMintingCall extends ethereum.Call {
  get inputs(): EndTreatMintingCall__Inputs {
    return new EndTreatMintingCall__Inputs(this);
  }

  get outputs(): EndTreatMintingCall__Outputs {
    return new EndTreatMintingCall__Outputs(this);
  }
}

export class EndTreatMintingCall__Inputs {
  _call: EndTreatMintingCall;

  constructor(call: EndTreatMintingCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EndTreatMintingCall__Outputs {
  _call: EndTreatMintingCall;

  constructor(call: EndTreatMintingCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RemoveMinterCall extends ethereum.Call {
  get inputs(): RemoveMinterCall__Inputs {
    return new RemoveMinterCall__Inputs(this);
  }

  get outputs(): RemoveMinterCall__Outputs {
    return new RemoveMinterCall__Outputs(this);
  }
}

export class RemoveMinterCall__Inputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveMinterCall__Outputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }
}

export class RemovePerformerCall extends ethereum.Call {
  get inputs(): RemovePerformerCall__Inputs {
    return new RemovePerformerCall__Inputs(this);
  }

  get outputs(): RemovePerformerCall__Outputs {
    return new RemovePerformerCall__Outputs(this);
  }
}

export class RemovePerformerCall__Inputs {
  _call: RemovePerformerCall;

  constructor(call: RemovePerformerCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemovePerformerCall__Outputs {
  _call: RemovePerformerCall;

  constructor(call: RemovePerformerCall) {
    this._call = call;
  }
}

export class RemoveTreatReferrerCall extends ethereum.Call {
  get inputs(): RemoveTreatReferrerCall__Inputs {
    return new RemoveTreatReferrerCall__Inputs(this);
  }

  get outputs(): RemoveTreatReferrerCall__Outputs {
    return new RemoveTreatReferrerCall__Outputs(this);
  }
}

export class RemoveTreatReferrerCall__Inputs {
  _call: RemoveTreatReferrerCall;

  constructor(call: RemoveTreatReferrerCall) {
    this._call = call;
  }

  get treatmodel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveTreatReferrerCall__Outputs {
  _call: RemoveTreatReferrerCall;

  constructor(call: RemoveTreatReferrerCall) {
    this._call = call;
  }
}

export class RemoveWhitelistAdminCall extends ethereum.Call {
  get inputs(): RemoveWhitelistAdminCall__Inputs {
    return new RemoveWhitelistAdminCall__Inputs(this);
  }

  get outputs(): RemoveWhitelistAdminCall__Outputs {
    return new RemoveWhitelistAdminCall__Outputs(this);
  }
}

export class RemoveWhitelistAdminCall__Inputs {
  _call: RemoveWhitelistAdminCall;

  constructor(call: RemoveWhitelistAdminCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveWhitelistAdminCall__Outputs {
  _call: RemoveWhitelistAdminCall;

  constructor(call: RemoveWhitelistAdminCall) {
    this._call = call;
  }
}

export class RenounceMinterCall extends ethereum.Call {
  get inputs(): RenounceMinterCall__Inputs {
    return new RenounceMinterCall__Inputs(this);
  }

  get outputs(): RenounceMinterCall__Outputs {
    return new RenounceMinterCall__Outputs(this);
  }
}

export class RenounceMinterCall__Inputs {
  _call: RenounceMinterCall;

  constructor(call: RenounceMinterCall) {
    this._call = call;
  }
}

export class RenounceMinterCall__Outputs {
  _call: RenounceMinterCall;

  constructor(call: RenounceMinterCall) {
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

export class RenouncePerformerCall extends ethereum.Call {
  get inputs(): RenouncePerformerCall__Inputs {
    return new RenouncePerformerCall__Inputs(this);
  }

  get outputs(): RenouncePerformerCall__Outputs {
    return new RenouncePerformerCall__Outputs(this);
  }
}

export class RenouncePerformerCall__Inputs {
  _call: RenouncePerformerCall;

  constructor(call: RenouncePerformerCall) {
    this._call = call;
  }
}

export class RenouncePerformerCall__Outputs {
  _call: RenouncePerformerCall;

  constructor(call: RenouncePerformerCall) {
    this._call = call;
  }
}

export class RenounceWhitelistAdminCall extends ethereum.Call {
  get inputs(): RenounceWhitelistAdminCall__Inputs {
    return new RenounceWhitelistAdminCall__Inputs(this);
  }

  get outputs(): RenounceWhitelistAdminCall__Outputs {
    return new RenounceWhitelistAdminCall__Outputs(this);
  }
}

export class RenounceWhitelistAdminCall__Inputs {
  _call: RenounceWhitelistAdminCall;

  constructor(call: RenounceWhitelistAdminCall) {
    this._call = call;
  }
}

export class RenounceWhitelistAdminCall__Outputs {
  _call: RenounceWhitelistAdminCall;

  constructor(call: RenounceWhitelistAdminCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
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

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
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

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseMetadataURICall extends ethereum.Call {
  get inputs(): SetBaseMetadataURICall__Inputs {
    return new SetBaseMetadataURICall__Inputs(this);
  }

  get outputs(): SetBaseMetadataURICall__Outputs {
    return new SetBaseMetadataURICall__Outputs(this);
  }
}

export class SetBaseMetadataURICall__Inputs {
  _call: SetBaseMetadataURICall;

  constructor(call: SetBaseMetadataURICall) {
    this._call = call;
  }

  get newURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseMetadataURICall__Outputs {
  _call: SetBaseMetadataURICall;

  constructor(call: SetBaseMetadataURICall) {
    this._call = call;
  }
}

export class SetContractURICall extends ethereum.Call {
  get inputs(): SetContractURICall__Inputs {
    return new SetContractURICall__Inputs(this);
  }

  get outputs(): SetContractURICall__Outputs {
    return new SetContractURICall__Outputs(this);
  }
}

export class SetContractURICall__Inputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
    this._call = call;
  }

  get newURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetContractURICall__Outputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
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

export class UpdateNftCreatorCall extends ethereum.Call {
  get inputs(): UpdateNftCreatorCall__Inputs {
    return new UpdateNftCreatorCall__Inputs(this);
  }

  get outputs(): UpdateNftCreatorCall__Outputs {
    return new UpdateNftCreatorCall__Outputs(this);
  }
}

export class UpdateNftCreatorCall__Inputs {
  _call: UpdateNftCreatorCall;

  constructor(call: UpdateNftCreatorCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _creatorAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateNftCreatorCall__Outputs {
  _call: UpdateNftCreatorCall;

  constructor(call: UpdateNftCreatorCall) {
    this._call = call;
  }
}
