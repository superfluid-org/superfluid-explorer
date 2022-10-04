import { getFramework } from "@superfluid-finance/sdk-redux";
import { networks } from "./networks";

export type RealtimeBalance = {
  balance: string;
  balanceTimestamp: number;
  flowRate: string;
};

export type BalanceQueryParams = {
  chainId: number;
  tokenAddress: string;
  accountAddress: string;
};

const getKey = (params: BalanceQueryParams): string =>
  `${params.chainId}-${params.tokenAddress}-${params.accountAddress}`.toLowerCase();

const mutableNetworkStates: Record<
  number,
  {
    queryBatch: { isSuperToken: boolean; params: BalanceQueryParams }[];
    nextFetching: Promise<Record<string, RealtimeBalance>> | null;
  }
> = Object.fromEntries(
  networks.map((x) => [x.chainId, { nextFetching: null, queryBatch: [] }])
);

/**
 * Creates a promise that will batch together super token balance related RPC calls.
 */
const createFetching = async (chainId: number) => {
  const state = mutableNetworkStates[chainId];
  const queries = state.queryBatch;
  const framework = await getFramework(chainId);

  const { provider } = framework.settings;

  const results = await Promise.all(
    queries
      .filter(({ isSuperToken }) => isSuperToken)
      .map(({ params }) =>
        Promise.all([
          getKey(params),
          provider.getBalance(params.tokenAddress),
          framework.cfaV1.getNetFlow({
            superToken: params.tokenAddress,
            account: params.accountAddress,
            providerOrSigner: provider,
          }),
        ])
      )
  );

  const mappedResults: Record<string, RealtimeBalance> = Object.fromEntries(
    results.map(([key, balance, flowRate]) => [
      key,
      {
        balance: balance.toString(),
        balanceTimestamp: 0,
        flowRate,
      },
    ])
  );

  state.queryBatch = [];

  return mappedResults;
};

export const balanceFetcher = {
  async getRealtimeBalance(
    params: BalanceQueryParams
  ): Promise<RealtimeBalance> {
    const state = mutableNetworkStates[params.chainId];
    state.queryBatch.push({
      params,
      isSuperToken: true,
    });

    return (await createFetching(params.chainId))[getKey(params)];
  },
};
