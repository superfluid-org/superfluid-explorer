import { getFramework } from "@superfluid-finance/sdk-redux";
import { ContractCallContext, Multicall } from "ethereum-multicall";
import { ethers } from "ethers";
import { networks } from "./networks";

const multicallContractAddress = "0xcA11bde05977b3631167028862bE2a173976CA11";

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
const createFetching = (
  chainId: number
): Promise<Record<string, RealtimeBalance>> => {
  return new Promise(async (resolve) => {
    setTimeout(async () => {
      const state = mutableNetworkStates[chainId];
      state.nextFetching = null;

      if (state.queryBatch.length) {
        const queries = state.queryBatch.splice(0, state.queryBatch.length); // Makes a copy of the queries and empties the original array.
        const framework = await getFramework(chainId);

        const realtimeBalanceCalls = (
          await Promise.all(
            queries
              .filter((x) => x.isSuperToken)
              .map((x) =>
                createRealtimeBalanceCalls(
                  framework.settings.config.cfaV1Address,
                  x.params
                )
              )
          )
        ).flat();

        const multicall = new Multicall({
          ethersProvider: framework.settings.provider,
          tryAggregate: false,
          multicallCustomContractAddress: multicallContractAddress,
        });

        const results = (await multicall.call(realtimeBalanceCalls)).results;

        const mappedResult = Object.fromEntries(
          queries.map((x) => {
            const getNetFlowCall =
              results[getKey(x.params) + "-getNetFlow"].callsReturnContext[0];
            const realtimeBalanceOfNowCall =
              results[getKey(x.params) + "-realtimeBalanceOfNow"]
                .callsReturnContext[0];

            return [
              getKey(x.params),
              {
                balance: ethers.BigNumber.from(
                  realtimeBalanceOfNowCall.returnValues[0]
                ).toString(),
                balanceTimestamp: realtimeBalanceOfNowCall.returnValues[3],
                flowRate: ethers.BigNumber.from(
                  getNetFlowCall.returnValues[0]
                ).toString(),
              },
            ];
          })
        );

        resolve(mappedResult);
      }
    }, 100);
  });
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

const createRealtimeBalanceCalls = async (
  cfaContractAddress: string,
  params: BalanceQueryParams
): Promise<[ContractCallContext, ContractCallContext]> => {
  return [
    {
      reference: getKey(params) + "-realtimeBalanceOfNow",
      contractAddress: ethers.utils.getAddress(params.tokenAddress),
      abi: [
        {
          name: "realtimeBalanceOfNow",
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          outputs: [
            {
              internalType: "int256",
              name: "availableBalance",
              type: "int256",
            },
            {
              internalType: "uint256",
              name: "deposit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "owedDeposit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      calls: [
        {
          reference: "realtimeBalanceOfNowCall",
          methodName: "realtimeBalanceOfNow",
          methodParameters: [ethers.utils.getAddress(params.accountAddress)],
        },
      ],
    },
    {
      reference: getKey(params) + "-getNetFlow",
      contractAddress: cfaContractAddress,
      abi: [
        {
          name: "getNetFlow",
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          outputs: [
            {
              internalType: "int96",
              name: "flowRate",
              type: "int96",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      calls: [
        {
          reference: "getNetFlowCall",
          methodName: "getNetFlow",
          methodParameters: [
            ethers.utils.getAddress(params.tokenAddress),
            ethers.utils.getAddress(params.accountAddress),
          ],
        },
      ],
    },
  ];
};
