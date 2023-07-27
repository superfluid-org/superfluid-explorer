import metadata from "@superfluid-finance/metadata";
import { networksByChainId } from "./networks";
import { findNetworkOrThrow } from "../utils/findNetwork";

interface ContractAddresses {
  resolver: string;
  host: string;
  CFAv1: string;
  IDAv1: string;
  superTokenFactory: string;
  superfluidLoader: string;
  TOGA?: string;
  GDAv1?: string;
  flowScheduler?: string;
  vestingScheduler?: string;
  batchLiquidator?: string;
}

interface NetworkContracts {
  [any: string]: ContractAddresses;
}

const networkMetadataToChainId = metadata.networks.reduce((acc, config) => {
  acc[config.chainId] = {
    resolver: config.contractsV1.resolver,
    host: config.contractsV1.host,
    CFAv1: config.contractsV1.cfaV1,
    IDAv1: config.contractsV1.idaV1,
    superTokenFactory: config.contractsV1.superTokenFactory,
    superfluidLoader: config.contractsV1.superfluidLoader,
    TOGA: config.contractsV1.toga,
    GDAv1: config.contractsV1.gdaV1,
    batchLiquidator: config.contractsV1.batchLiquidator,
    flowScheduler: config.contractsV1.flowScheduler,
    vestingScheduler: config.contractsV1.vestingScheduler,
  };
  return acc;
}, {} as { [key: string]: ContractAddresses });

const getNetwork = (chainId: number) => {
  const network = networksByChainId.get(chainId);
  if (!network) {
    throw new Error(`No network found for chainId ${chainId}`);
  }
  return network;
};

findNetworkOrThrow;

const protocolContracts: NetworkContracts = {
  [getNetwork(1).slugName]: networkMetadataToChainId[1],
  [getNetwork(137).slugName]: networkMetadataToChainId[137],
  [getNetwork(100).slugName]: networkMetadataToChainId[100],
  [getNetwork(10).slugName]: networkMetadataToChainId[10],
  [getNetwork(42161).slugName]: networkMetadataToChainId[42161],
  [getNetwork(5).slugName]: networkMetadataToChainId[5],
  [getNetwork(80001).slugName]: networkMetadataToChainId[80001],
  [getNetwork(43113).slugName]: networkMetadataToChainId[43113],
  [getNetwork(43114).slugName]: networkMetadataToChainId[43114],
  [getNetwork(56).slugName]: networkMetadataToChainId[56],
  [getNetwork(42220).slugName]: networkMetadataToChainId[42220],
  [getNetwork(421613).slugName]: networkMetadataToChainId[421613],
  [getNetwork(420).slugName]: networkMetadataToChainId[420],
  [getNetwork(11155111).slugName]: networkMetadataToChainId[11155111],
  [getNetwork(1442).slugName]: networkMetadataToChainId[1442],
  [getNetwork(84531).slugName]: networkMetadataToChainId[84531],
};

export default protocolContracts;
