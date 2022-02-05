import { ensureEnvironmentVariable } from "../utils/getEnvironmentVariableOrThrow";

export type Network = {
  displayName: string,
  slugName: string,
  chainId: number,
  rpcUrl: string,
  subgraphUrl: string
  getLinkForTransaction(txHash: string): string;
  isTestnet: boolean
}

export const networks: Network[] = [
  {
    displayName: "Ropsten",
    slugName: "ropsten",
    chainId: 3,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_ROPSTEN_RPC, "NEXT_PUBLIC_ROPSTEN_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_ROPSTEN_SUBGRAPH, "NEXT_PUBLIC_ROPSTEN_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://ropsten.etherscan.io/tx/${txHash}`,
  },
  {
    displayName: "Rinkeby",
    slugName: "rinkeby",
    chainId: 4,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_RINKEBY_RPC, "NEXT_PUBLIC_RINKEBY_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_RINKEBY_SUBGRAPH, "NEXT_PUBLIC_RINKEBY_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://rinkeby.etherscan.io/tx/${txHash}`
  },
  {
    displayName: "Goerli",
    slugName: "goerli",
    chainId: 5,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_GOERLI_RPC, "NEXT_PUBLIC_GOERLI_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_GOERLI_SUBGRAPH, "NEXT_PUBLIC_GOERLI_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://goerli.etherscan.io/tx/${txHash}`
  },
  {
    displayName: "Kovan",
    slugName: "kovan",
    chainId: 42,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_KOVAN_RPC, "NEXT_PUBLIC_KOVAN_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_KOVAN_SUBGRAPH, "NEXT_PUBLIC_KOVAN_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://kovan.etherscan.io/tx/${txHash}`
  },
  {
    displayName: "Gnosis Chain",
    slugName: "xdai",
    chainId: 100,
    isTestnet: false,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_XDAI_RPC, "NEXT_PUBLIC_XDAI_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_XDAI_SUBGRAPH, "NEXT_PUBLIC_XDAI_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://blockscout.com/xdai/mainnet/tx/${txHash}`
  },
  {
    displayName: "Polygon",
    slugName: "matic",
    chainId: 137,
    isTestnet: false,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_MATIC_RPC, "NEXT_PUBLIC_MATIC_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_MATIC_SUBGRAPH, "NEXT_PUBLIC_MATIC_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://polygonscan.com/tx/${txHash}`
  },
  {
    displayName: "Mumbai",
    slugName: "mumbai",
    chainId: 80001,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_MUMBAI_RPC, "NEXT_PUBLIC_MUMBAI_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_MUMBAI_SUBGRAPH, "NEXT_PUBLIC_MUMBAI_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://mumbai.polygonscan.com/tx/${txHash}`
  },
  {
    displayName: "Arbitrum-Rinkeby",
    slugName: "arbitrum-rinkeby",
    chainId: 421611,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_ARBITRUM_RINKEBY_RPC, "NEXT_PUBLIC_ARBITRUM_RINKEBY_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_ARBITRUM_RINKEBY_SUBGRAPH, "NEXT_PUBLIC_ARBITRUM_RINKEBY_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://rinkeby-explorer.arbitrum.io/tx/${txHash}`
  },
  {
    displayName: "Optimism-Kovan",
    slugName: "optimism-kovan",
    chainId: 69,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_OPTIMISM_KOVAN_RPC, "NEXT_PUBLIC_OPTIMISM_KOVAN_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_OPTIMISM_KOVAN_SUBGRAPH, "NEXT_PUBLIC_OPTIMISM_KOVAN_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://kovan-optimistic.etherscan.io/tx/${txHash}`
  },
  {
    displayName: "Avalanche-Fuji",
    slugName: "avalanche-fuji",
    chainId: 43113,
    isTestnet: true,
    rpcUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_AVALANCHE_FUJI_RPC, "NEXT_PUBLIC_AVALANCHE_FUJI_RPC"),
    subgraphUrl: ensureEnvironmentVariable(process.env.NEXT_PUBLIC_AVALANCHE_FUJI_SUBGRAPH, "NEXT_PUBLIC_AVALANCHE_FUJI_SUBGRAPH"),
    getLinkForTransaction: (txHash: string): string => `https://testnet.snowtrace.io/tx/${txHash}`
  },
];

export const networksByName = new Map(networks.map(x => [x.slugName.toLowerCase(), x]))

export const networksByChainId = new Map(networks.map(x => [x.chainId, x]))

export const tryGetNetwork = (x: unknown): Network | undefined => {
  let network: Network | undefined = undefined;

  if (typeof x === "string") {
    network = networksByName.get(x.toLowerCase());
  }

  if (typeof x === "number") {
    network = networksByChainId.get(x);
  }

  return network;
}

export const tryGetString = (x: unknown): string | undefined => {
  if (typeof x === "string") {
    return x;
  }
} 
