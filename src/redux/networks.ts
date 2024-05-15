import sfMeta from '@superfluid-finance/metadata'
import { memoize } from 'lodash'
import sortBy from 'lodash/fp/sortBy'

export type Network = {
  displayName: string
  slugName: string // The displayed slug by default. To find network by slug, use `tryFindNetwork` which looks from more sources.
  chainId: number
  rpcUrl: string
  subgraphUrl: string
  getLinkForTransaction(txHash: string): string
  getLinkForAddress(adderss: string): string
  isTestnet: boolean
  supportsGDA: boolean
}

const getMetadata = memoize((chainId: number) => {
  const metadata = sfMeta.getNetworkByChainId(chainId)
  if (!metadata) {
    throw new Error(`No metadata for chainId ${chainId}`)
  }
  return metadata
})

const getRpcUrl = (chainId: number) => {
  const metadata = getMetadata(chainId)
  return `https://rpc-endpoints.superfluid.dev/${metadata.name}`
}

const getSubgraphUrl = (chainId: number) => {
  const metadata = getMetadata(chainId)
  return `https://${metadata.name}.subgraph.x.superfluid.dev/`
}

const getSupportsGDA = (chainId: number) => {
  const metadata = getMetadata(chainId)
  return Boolean(metadata.contractsV1.gdaV1)
}

export const networks = [
  {
    displayName: 'Ethereum',
    slugName: 'ethereum',
    chainId: 1,
    isTestnet: false,
    supportsGDA: getSupportsGDA(1),
    rpcUrl: getRpcUrl(1),
    subgraphUrl: getSubgraphUrl(1),
    getLinkForTransaction: (txHash: string): string =>
      `https://etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://etherscan.io/address/${address}`
  },
  {
    displayName: 'Base Mainnet',
    slugName: 'base-mainnet',
    isTestnet: false,
    supportsGDA: getSupportsGDA(8453),
    chainId: 8453,
    rpcUrl: getRpcUrl(8453),
    subgraphUrl: getSubgraphUrl(8453),
    getLinkForTransaction: (txHash: string): string =>
      `https://basescan.org/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://basescan.org/address/${address}`
  },
  {
    displayName: 'Polygon',
    slugName: 'matic',
    chainId: 137,
    isTestnet: false,
    supportsGDA: getSupportsGDA(137),
    rpcUrl: getRpcUrl(137),
    subgraphUrl: getSubgraphUrl(137),
    getLinkForTransaction: (txHash: string): string =>
      `https://polygonscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://polygonscan.com/address/${address}`
  },
  {
    displayName: 'Optimism',
    slugName: 'optimism-mainnet',
    chainId: 10,
    isTestnet: false,
    supportsGDA: getSupportsGDA(10),
    rpcUrl: getRpcUrl(10),
    subgraphUrl: getSubgraphUrl(10),
    getLinkForTransaction: (txHash: string): string =>
      `https://optimistic.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://optimistic.etherscan.io/address/${address}`
  },
  {
    displayName: 'Arbitrum One',
    slugName: 'arbitrum-one',
    chainId: 42161,
    isTestnet: false,
    supportsGDA: getSupportsGDA(42161),
    rpcUrl: getRpcUrl(42161),
    subgraphUrl: getSubgraphUrl(42161),
    getLinkForTransaction: (txHash: string): string =>
      `https://arbiscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://arbiscan.io/address/${address}`
  },
  {
    displayName: 'Gnosis Chain',
    slugName: 'xdai',
    chainId: 100,
    isTestnet: false,
    supportsGDA: getSupportsGDA(100),
    rpcUrl: getRpcUrl(100),
    subgraphUrl: getSubgraphUrl(100),
    getLinkForTransaction: (txHash: string): string =>
      `https://gnosisscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://gnosisscan.io/address/${address}`
  },

  {
    displayName: 'Avalanche C',
    slugName: 'avalanche-c',
    chainId: 43114,
    isTestnet: false,
    supportsGDA: getSupportsGDA(43114),
    rpcUrl: getRpcUrl(43114),
    subgraphUrl: getSubgraphUrl(43114),
    getLinkForTransaction: (txHash: string): string =>
      `https://snowtrace.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://snowtrace.io/address/${address}`
  },
  {
    displayName: 'BNB Smart Chain',
    slugName: 'bnb-smart-chain',
    chainId: 56,
    isTestnet: false,
    supportsGDA: getSupportsGDA(56),
    rpcUrl: getRpcUrl(56),
    subgraphUrl: getSubgraphUrl(56),
    getLinkForTransaction: (txHash: string): string =>
      `https://bscscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://bscscan.com/address/${address}`
  },
  {
    displayName: 'Celo',
    slugName: 'celo',
    chainId: 42220,
    isTestnet: false,
    supportsGDA: getSupportsGDA(42220),
    rpcUrl: getRpcUrl(42220),
    subgraphUrl: getSubgraphUrl(42220),
    getLinkForTransaction: (txHash: string): string =>
      `https://celoscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://celoscan.io/address/${address}`
  },
  {
    displayName: 'Degen Chain',
    slugName: 'degen',
    isTestnet: false,
    supportsGDA: getSupportsGDA(666666666),
    chainId: 666666666,
    rpcUrl: getRpcUrl(666666666),
    subgraphUrl: getSubgraphUrl(666666666),
    getLinkForTransaction: (txHash: string): string =>
      `https://explorer.degen.tips/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://explorer.degen.tips/address/${address}`
  },
  {
    displayName: 'Scroll',
    isTestnet: false,
    supportsGDA: getSupportsGDA(534352),
    chainId: 534352,
    slugName: 'scroll-mainnet',
    rpcUrl: getRpcUrl(534352),
    subgraphUrl: getSubgraphUrl(534352),
    getLinkForTransaction: (txHash: string): string =>
      `https://scrollscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://scrollscan.com/address/${address}`
  },
  // testnets
  {
    displayName: 'Avalanche Fuji',
    slugName: 'avalanche-fuji',
    chainId: 43113,
    isTestnet: true,
    supportsGDA: getSupportsGDA(43113),
    rpcUrl: getRpcUrl(43113),
    subgraphUrl: getSubgraphUrl(43113),
    getLinkForTransaction: (txHash: string): string =>
      `https://testnet.snowtrace.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://testnet.snowtrace.io/address/${address}`
  },
  {
    isTestnet: true,
    supportsGDA: getSupportsGDA(11155111),
    chainId: 11155111,
    slugName: 'eth-sepolia',
    displayName: 'Sepolia',
    rpcUrl: getRpcUrl(11155111),
    subgraphUrl: getSubgraphUrl(11155111),
    getLinkForTransaction: (txHash: string): string =>
      `https://sepolia.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://sepolia.etherscan.io/address/${address}`
  },
  {
    displayName: 'Optimism Sepolia',
    slugName: 'optimism-sepolia',
    isTestnet: true,
    supportsGDA: getSupportsGDA(11155420),
    chainId: 11155420,
    rpcUrl: getRpcUrl(11155420),
    subgraphUrl: getSubgraphUrl(11155420),
    getLinkForTransaction: (txHash: string): string =>
      `https://sepolia-optimism.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://sepolia-optimism.etherscan.io/address/${address}`
  },
  {
    displayName: 'Scroll Sepolia',
    slugName: 'scroll-sepolia',
    isTestnet: true,
    supportsGDA: getSupportsGDA(534351),
    chainId: 534351,
    rpcUrl: getRpcUrl(534351),
    subgraphUrl: getSubgraphUrl(534351),
    getLinkForTransaction: (txHash: string): string =>
      `https://sepolia.scrollscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://sepolia.scrollscan.com/address/${address}`
  }
] as const

export type ChainId = (typeof networks)[number]['chainId']
export type SlugName = (typeof networks)[number]['slugName']

export const networksByName = new Map<string, Network>(
  networks.map((x) => [x.slugName.toLowerCase(), x])
)

export const networksByChainId = new Map<number, Network>(
  networks.map((x) => [x.chainId, x])
)
export const defaultNetwork = networksByChainId.get(8453)!
export const networksByTestAndName = sortBy(
  [(x) => x.isTestnet, (x) => x.slugName],
  networks
)

export const tryGetString = (x: unknown): string | undefined => {
  if (typeof x === 'string') {
    return x
  }
}
