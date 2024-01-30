import metadata from '@superfluid-finance/metadata'

import { ChainId, networks, SlugName } from './networks'

interface ContractAddresses {
  resolver: string
  host: string
  CFAv1: string
  CFAv1Forwarder: string
  IDAv1: string
  superTokenFactory: string
  superfluidLoader: string
  TOGA?: string
  GDAv1?: string
  GDAv1Forwarder?: string
  flowScheduler?: string
  vestingScheduler?: string
  batchLiquidator?: string
  existentialNFTCloneFactory?: string
}

type NetworkContracts = {
  [key: string]: ContractAddresses
}

const networkMetadataToChainId = metadata.networks.reduce(
  (acc, config) => {
    acc[config.chainId] = {
      resolver: config.contractsV1.resolver,
      host: config.contractsV1.host,
      CFAv1: config.contractsV1.cfaV1,
      CFAv1Forwarder: config.contractsV1.cfaV1Forwarder,
      IDAv1: config.contractsV1.idaV1,
      superTokenFactory: config.contractsV1.superTokenFactory,
      superfluidLoader: config.contractsV1.superfluidLoader,
      TOGA: config.contractsV1.toga,
      GDAv1: config.contractsV1.gdaV1,
      GDAv1Forwarder: config.contractsV1.gdaV1Forwarder,
      batchLiquidator: config.contractsV1.batchLiquidator,
      flowScheduler: config.contractsV1.flowScheduler,
      vestingScheduler: config.contractsV1.vestingScheduler,
      existentialNFTCloneFactory: config.contractsV1.existentialNFTCloneFactory
    }
    return acc
  },
  {} as { [key: number]: ContractAddresses }
)

const protocolContracts = networks.reduce((acc, network) => {
  acc[network.slugName] = networkMetadataToChainId[network.chainId]
  return acc
}, {} as NetworkContracts)

export default protocolContracts
