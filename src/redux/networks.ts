import sortBy from "lodash/fp/sortBy";
import superfluidMetadata from "@superfluid-finance/metadata";
import { memoize } from "lodash";

export type Network = {
  displayName: string;
  slugName: string; // The displayed slug by default. To find network by slug, use `tryFindNetwork` which looks from more sources.
  chainId: number;
  rpcUrl: string;
  subgraphUrl: string;
  getLinkForTransaction(txHash: string): string;
  getLinkForAddress(adderss: string): string;
  isTestnet: boolean;
};

const getNetworkFromMetadataOrThrow = memoize((chainId: number) => {
  const networkFromMetadata = superfluidMetadata.getNetworkByChainId(chainId);
  if (!networkFromMetadata) {
    throw new Error(
      `Network not found in metadata with chain ID [${chainId}].`
    );
  }
  return networkFromMetadata;
});

const getSubgraphUrl = (chainId: number): string => {
  const networkFromMetadata = getNetworkFromMetadataOrThrow(chainId);
  return `https://${networkFromMetadata.name}.subgraph.x.superfluid.dev`;
};

const getRpcUrl = (chainId: number): string => {
  const networkFromMetadata = getNetworkFromMetadataOrThrow(chainId);
  return `https://rpc-endpoints.superfluid.dev/${networkFromMetadata.name}`;
};

export const networks: Network[] = [
  // mainnets
  {
    displayName: "Ethereum",
    slugName: "ethereum",
    chainId: 1,
    isTestnet: false,
    rpcUrl: getRpcUrl(1),
    subgraphUrl: getSubgraphUrl(1),
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
    rpcUrl: getRpcUrl(100),
    subgraphUrl: getSubgraphUrl(100),
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
    rpcUrl: getRpcUrl(137),
    subgraphUrl: getSubgraphUrl(137),
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
    rpcUrl: getRpcUrl(10),
    subgraphUrl: getSubgraphUrl(10),
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
    rpcUrl: getRpcUrl(42161),
    subgraphUrl: getSubgraphUrl(42161),
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
    rpcUrl: getRpcUrl(43114),
    subgraphUrl: getSubgraphUrl(43114),
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
    rpcUrl: getRpcUrl(56),
    subgraphUrl: getSubgraphUrl(56),
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
    rpcUrl: getRpcUrl(42220),
    subgraphUrl: getSubgraphUrl(42220),
    getLinkForTransaction: (txHash: string): string =>
      `https://celoscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://celoscan.io/address/${address}`,
  },
  {
    isTestnet: false,
    chainId: 8453,
    slugName: "base-mainnet",
    displayName: "Base Mainnet",
    rpcUrl: getRpcUrl(8453),
    subgraphUrl: getSubgraphUrl(8453),
    getLinkForTransaction: (txHash: string): string =>
      `https://basescan.org/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://basescan.org/address/${address}`,
  },
  // testnets
  {
    displayName: "Goerli",
    slugName: "goerli",
    chainId: 5,
    isTestnet: true,
    rpcUrl: getRpcUrl(5),
    subgraphUrl: getSubgraphUrl(5),
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
    rpcUrl: getRpcUrl(80001),
    subgraphUrl: getSubgraphUrl(80001),
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
    rpcUrl: getRpcUrl(43113),
    subgraphUrl: getSubgraphUrl(43113),
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
    rpcUrl: getRpcUrl(420),
    subgraphUrl: getSubgraphUrl(420),
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
    rpcUrl: getRpcUrl(421613),
    subgraphUrl: getSubgraphUrl(421613),
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
    rpcUrl: getRpcUrl(11155111),
    subgraphUrl: getSubgraphUrl(11155111),
    getLinkForTransaction: (txHash: string): string =>
      `https://sepolia.etherscan.io/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://sepolia.etherscan.io/address/${address}`,
  },
  {
    isTestnet: true,
    chainId: 1442,
    slugName: "polygon-zkevm-testnet",
    displayName: "Polygon zkEVM Testnet",
    rpcUrl: getRpcUrl(1442),
    subgraphUrl: getSubgraphUrl(1442),
    getLinkForTransaction: (txHash: string): string =>
      `https://testnet-zkevm.polygonscan.com/tx/${txHash}`,
    getLinkForAddress: (address: string): string =>
      `https://testnet-zkevm.polygonscan.com/address/${address}`,
  },
  {
    isTestnet: true,
    chainId: 84531,
    slugName: "base-goerli",
    displayName: "Base Goerli",
    rpcUrl: getRpcUrl(84531),
    subgraphUrl: getSubgraphUrl(84531),
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

export const polygon = networksByChainId.get(137)!;

export const networksByTestAndName = sortBy(
  [(x) => x.isTestnet, (x) => x.slugName],
  networks
);

export const tryGetString = (x: unknown): string | undefined => {
  if (typeof x === "string") {
    return x;
  }
};
