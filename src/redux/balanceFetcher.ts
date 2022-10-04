import { providers } from "@0xsequence/multicall";
import { getFramework } from "@superfluid-finance/sdk-redux";
import { ethers } from "ethers";
import { networks } from "./networks";

const multicallContractAddress = "0xcA11bde05977b3631167028862bE2a173976CA11";

export type RealtimeBalance = {
  balance: string;
  balanceTimestamp: number;
  flowRate: string;
  e;
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
  state.nextFetching = null;

  if (state.queryBatch.length) {
    const queries = state.queryBatch.splice(0, state.queryBatch.length); // Makes a copy of the queries and empties the original array.
    const framework = await getFramework(chainId);

    const provider = new providers.MulticallProvider(
      framework.settings.provider
    );

    const results = await Promise.all(
      queries
        .filter((x) => x.isSuperToken)
        .map((x) =>
          Promise.all([
            x.params,
            framework.cfaV1.getNetFlow({
              account: x.params.accountAddress,
              superToken: x.params.tokenAddress,
              providerOrSigner: provider,
            }),
            provider.getBalance(x.params.tokenAddress),
          ])
        )
    );

    const mappedResult: Record<string, RealtimeBalance> = Object.fromEntries(
      results.map(([params, netFlow, realtimeBalanceOfNow]) => {
        console.log(params, netFlow, realtimeBalanceOfNow);
        return [
          getKey(params),
          {
            balance: ethers.BigNumber.from(realtimeBalanceOfNow).toString(),
            balanceTimestamp: ethers.BigNumber.from("0").toNumber(),
            flowRate: ethers.BigNumber.from(netFlow).toString(),
          } as RealtimeBalance,
        ];
      })
    );

    return mappedResult;
  }

  return {};
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
    state.nextFetching = state.nextFetching || createFetching(params.chainId);
    return (await state.nextFetching)[getKey(params)] as RealtimeBalance;
  },
};
