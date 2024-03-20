import { createConfig, http } from 'wagmi'
import {
  mainnet,
  gnosis,
  polygon,
  optimism,
  arbitrum,
  avalanche,
  bsc,
  celo,
  base,
  scroll,
  polygonMumbai,
  avalancheFuji,
  sepolia,
  optimismSepolia,
  scrollSepolia
} from 'viem/chains' // prolly not a fantastic approach for bundle size

import { networks } from '../redux/networks'
import { Transport } from 'viem'

const allWagmiChains = [
  mainnet,
  gnosis,
  polygon,
  optimism,
  arbitrum,
  avalanche,
  bsc,
  celo,
  base,
  scroll,
  polygonMumbai,
  avalancheFuji,
  sepolia,
  optimismSepolia,
  scrollSepolia
] as const

if (allWagmiChains.length !== networks.length) {
  throw new Error(
    'Mismatch between wagmi chains and app networks. Please update to keep in sync'
  )
}

type WagmiChainId = (typeof allWagmiChains)[number]['id']

export const wagmiConfig = createConfig({
  chains: allWagmiChains,
  transports: networks.reduce(
    (acc, curr) => {
      acc[curr.chainId] = http(curr.rpcUrl)
      return acc
    },
    {} as Record<WagmiChainId, Transport>
  ),
  batch: { multicall: true }
})
