import { Transport } from 'viem'
import {
  arbitrum,
  avalanche,
  avalancheFuji,
  base,
  baseSepolia,
  bsc,
  celo,
  degen,
  gnosis,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  scroll,
  scrollSepolia,
  sepolia
} from 'viem/chains' // prolly not a fantastic approach for bundle size
import { createConfig, http } from 'wagmi'

import { networks } from '../redux/networks'

const allWagmiChains = [
  mainnet,
  gnosis,
  polygon,
  optimism,
  arbitrum,
  avalanche,
  bsc,
  celo,
  degen,
  base,
  scroll,
  avalancheFuji,
  sepolia,
  optimismSepolia,
  baseSepolia,
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
