import metadata from "@superfluid-finance/metadata";

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

const protocolContracts: NetworkContracts = {
  [1]: networkMetadataToChainId[1],
  [137]: networkMetadataToChainId[137],
  [100]: networkMetadataToChainId[100],
  [10]: networkMetadataToChainId[10],
  [42161]: networkMetadataToChainId[42161],
  [5]: networkMetadataToChainId[5],
  [80001]: networkMetadataToChainId[80001],
  [43113]: networkMetadataToChainId[43113],
  [43114]: networkMetadataToChainId[43114],
  [56]: networkMetadataToChainId[56],
  [42220]: networkMetadataToChainId[42220],
  [421613]: networkMetadataToChainId[421613],
  [420]: networkMetadataToChainId[420],
  [11155111]: networkMetadataToChainId[11155111],
  [1442]: networkMetadataToChainId[1442],
  [84531]: networkMetadataToChainId[84531],
};

export default protocolContracts;
