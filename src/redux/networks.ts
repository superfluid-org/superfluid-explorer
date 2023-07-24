import sortBy from "lodash/fp/sortBy";

export type Network = {
  displayName: string;
  slugName: string;
  chainId: number;
  rpcUrl: string;
  subgraphUrl: string;
  getLinkForTransaction(txHash: string): string;
  getLinkForAddress(adderss: string): string;
  isTestnet: boolean;
};

export const networks: Network[] = [
  // mainnets
  {
    displayName: "Ethereum",
    slugName: "ethereum",
    chainId: 1,
    isTestnet: false,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/eth-mainnet",
    subgraphUrl:
      "https://subgraph.satsuma-prod.com/c5br3jaVlJI6/superfluid/eth-mainnet/api",
    getLinkForTransaction: (txHash: string): string =>
      `https://etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://etherscan.io/address/${address}`,
  },
  {
    displayName: "Gnosis Chain",
    slugName: "xdai",
    chainId: 100,
    isTestnet: false,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/xdai-mainnet",
    subgraphUrl:
      "https://subgraph.satsuma-prod.com/c5br3jaVlJI6/superfluid/xdai/api",
    getLinkForTransaction: (txHash: string): string =>
      `https://gnosisscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://gnosisscan.io/address/${address}`,
  },
  {
    displayName: "Polygon",
    slugName: "matic",
    chainId: 137,
    isTestnet: false,
    rpcUrl: `https://rpc-endpoints.superfluid.dev/polygon-mainnet`,
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic",
    getLinkForTransaction: (txHash: string): string =>
      `https://polygonscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://polygonscan.com/address/${address}`,
  },
  {
    displayName: "Optimism",
    slugName: "optimism-mainnet",
    chainId: 10,
    isTestnet: false,
    rpcUrl: `https://rpc-endpoints.superfluid.dev/optimism-mainnet`,
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet",
    getLinkForTransaction: (txHash: string): string =>
      `https://optimistic.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://optimistic.etherscan.io/address/${address}`,
  },
  {
    displayName: "Arbitrum One",
    slugName: "arbitrum-one",
    chainId: 42161,
    isTestnet: false,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/arbitrum-one",
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one",
    getLinkForTransaction: (txHash: string): string =>
      `https://arbiscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://arbiscan.io/address/${address}`,
  },
  {
    displayName: "Avalanche C",
    slugName: "avalanche-c",
    chainId: 43114,
    isTestnet: false,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/avalanche-c",
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-c",
    getLinkForTransaction: (txHash: string): string =>
      `https://snowtrace.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://snowtrace.io/address/${address}`,
  },
  {
    displayName: "BNB Smart Chain",
    slugName: "bnb-smart-chain",
    chainId: 56,
    isTestnet: false,
    rpcUrl: `https://bsc-dataseed1.binance.org`,
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-bsc-mainnet",
    getLinkForTransaction: (txHash: string): string =>
      `https://bscscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://bscscan.com/address/${address}`,
  },
  {
    displayName: "Celo",
    slugName: "celo",
    chainId: 42220,
    isTestnet: false,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/celo-mainnet",
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-celo-mainnet",
    getLinkForTransaction: (txHash: string): string =>
      `https://celoscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://celoscan.io/address/${address}`,
  },

  // testnets
  {
    displayName: "Goerli",
    slugName: "goerli",
    chainId: 5,
    isTestnet: true,
    rpcUrl: `https://rpc-endpoints.superfluid.dev/eth-goerli`,
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli",
    getLinkForTransaction: (txHash: string): string =>
      `https://goerli.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://goerli.etherscan.io/address/${address}`,
  },
  {
    displayName: "Mumbai",
    slugName: "mumbai",
    chainId: 80001,
    isTestnet: true,
    rpcUrl: `https://rpc-endpoints.superfluid.dev/polygon-mumbai`,
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai",
    getLinkForTransaction: (txHash: string): string =>
      `https://mumbai.polygonscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://mumbai.polygonscan.com/address/${address}`,
  },
  {
    displayName: "Avalanche Fuji",
    slugName: "avalanche-fuji",
    chainId: 43113,
    isTestnet: true,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/avalanche-fuji",
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-fuji",
    getLinkForTransaction: (txHash: string): string =>
      `https://testnet.snowtrace.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://testnet.snowtrace.io/address/${address}`,
  },
  {
    displayName: "Optimism Goerli",
    slugName: "optimism-goerli",
    chainId: 420,
    isTestnet: true,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/optimism-goerli",
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-goerli",
    getLinkForTransaction: (txHash: string): string =>
      `https://goerli-optimism.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://goerli-optimism.etherscan.io/address/${address}`,
  },
  {
    displayName: "Arbitrum Goerli",
    slugName: "arbitrum-goerli",
    chainId: 421613,
    isTestnet: true,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/arbitrum-goerli",
    subgraphUrl:
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-goerli",
    getLinkForTransaction: (txHash: string): string =>
      `https://goerli.arbiscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://goerli.arbiscan.io/address/${address}`,
  },
  {
    isTestnet: true,
    chainId: 11155111,
    slugName: "eth-sepolia",
    displayName: "Sepolia",
    rpcUrl: "https://rpc-endpoints.superfluid.dev/eth-sepolia",
    subgraphUrl: "https://subgraph.satsuma-prod.com/c5br3jaVlJI6/superfluid/eth-sepolia/api",
    getLinkForTransaction: (txHash: string): string =>
      `https://sepolia.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://sepolia.etherscan.io/address/${address}`,
  },
  {
    isTestnet: true,
    chainId: 1442,
    slugName: "pzkevmtest",
    displayName: "Polygon zkEVM Testnet",
    rpcUrl: "https://rpc-endpoints.superfluid.dev/polygon-zkevm-testnet",
    subgraphUrl: "https://polygon-zkevm-testnet.subgraph.x.superfluid.dev",
    getLinkForTransaction: (txHash: string): string =>
      `https://testnet-zkevm.polygonscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://testnet-zkevm.polygonscan.com/address/${address}`,
  },
  {
    isTestnet: true,
    chainId: 84531,
    slugName: "bgoerli",
    displayName: "Base Goerli",
    rpcUrl: "https://rpc-endpoints.superfluid.dev/base-goerli",
    subgraphUrl: "https://base-goerli.subgraph.x.superfluid.dev/",
    getLinkForTransaction: (txHash: string): string =>
      `https://goerli.basescan.org/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://goerli.basescan.org/address/${address}`,
  },
];

export const networksByName = new Map(
  networks.map((x) => [x.slugName.toLowerCase(), x])
);

export const networksByChainId = new Map(networks.map((x) => [x.chainId, x]));

export const networksByTestAndName = sortBy(
  [(x) => x.isTestnet, (x) => x.slugName],
  networks
);

export const tryGetNetwork = (x: unknown): Network | undefined => {
  let network: Network | undefined = undefined;

  if (typeof x === "string") {
    network = networksByName.get(x.toLowerCase());
  }

  if (typeof x === "number") {
    network = networksByChainId.get(x);
  }

  return network;
};

export const tryGetString = (x: unknown): string | undefined => {
  if (typeof x === "string") {
    return x;
  }
};
