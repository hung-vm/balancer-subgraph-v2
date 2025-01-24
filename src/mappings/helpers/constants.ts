import { BigDecimal, BigInt, Address, dataSource } from '@graphprotocol/graph-ts';

import { assets } from './assets';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ProtocolFeeType {
  export const Swap = 0;
  export const FlashLoan = 1;
  export const Yield = 2;
  export const Aum = 3;
}

export let ZERO = BigInt.fromI32(0);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export const SWAP_IN = 0;
export const SWAP_OUT = 1;

export let ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');

export let MIN_POOL_LIQUIDITY = BigDecimal.fromString('10000');
export let MIN_SWAP_VALUE_USD = BigDecimal.fromString('1');

export let FX_AGGREGATOR_ADDRESSES = assets.fxAggregators;
export let FX_TOKEN_ADDRESSES = assets.fxAssets;

export let USD_STABLE_ASSETS = assets.stableAssets;
export let PRICING_ASSETS = assets.stableAssets.concat(assets.pricingAssets);

class AddressByNetwork {
  public mainnet: string;
  public goerli: string;
  public polygon: string;
  public arbitrum: string;
  public gnosis: string;
  public bnb: string;
  public dev: string;
  public defiverse: string;
  public defiverse_testnet: string;
  public oasys: string;
  public oasys_testnet: string;
}

let network: string = dataSource.network();

let vaultAddressByNetwork: AddressByNetwork = {
  mainnet: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  goerli: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  polygon: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  arbitrum: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  gnosis: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  bnb: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  dev: '0xa0B05b20e511B1612E908dFCeE0E407E22B76028',
  defiverse: '0x2FA699664752B34E90A414A42D62D7A8b2702B85',
  defiverse_testnet: '0x2Da016a77E290fb82F5af7051198304d57779f5d',
  oasys_testnet: '0x1f7a0Bea1CB70FaA0f6b7B1126eCbd01Ef4E5BC8',
  oasys: '0xfb6f8FEdE0Cb63674Ab964affB93D65a4a7D55eA',
};

function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  if (network == 'mainnet') {
    return Address.fromString(addressByNetwork.mainnet);
  } else if (network == 'goerli') {
    return Address.fromString(addressByNetwork.goerli);
  } else if (network == 'matic') {
    return Address.fromString(addressByNetwork.polygon);
  } else if (network == 'arbitrum-one') {
    return Address.fromString(addressByNetwork.arbitrum);
  } else if (network == 'gnosis') {
    return Address.fromString(addressByNetwork.bnb);
  } else if (network == 'bsc') {
    return Address.fromString(addressByNetwork.bnb);
  } else if (network == 'defiverse') {
    return Address.fromString(addressByNetwork.defiverse);
  } else if (network == 'defiverse_testnet') {
    return Address.fromString(addressByNetwork.defiverse_testnet);
  } else if (network == 'oasys_testnet') {
    return Address.fromString(addressByNetwork.oasys_testnet);
  } else if (network == 'oasys') {
    return Address.fromString(addressByNetwork.oasys);
  } else {
    return Address.fromString(addressByNetwork.dev);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
