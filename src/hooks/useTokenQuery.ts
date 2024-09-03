import { memoize } from "lodash";
import { sfSubgraph } from "../redux/store";
import { extendedSuperTokenList } from "@superfluid-finance/tokenlist";
import { UseQueryResult } from "../redux/UseQueryResult";
import { Token } from "@superfluid-finance/sdk-core";

type Arg = Parameters<typeof sfSubgraph.useTokenQuery>[0];
type Options = Parameters<typeof sfSubgraph.useTokenQuery>[1];

type ExtendedQueryResult = UseQueryResult<Token & { logoURI?: string }>;

export function useTokenQuery(arg: Arg, options?: Omit<Options, "selectFromResult">) {
    const tokenQuery = sfSubgraph.useTokenQuery(arg, {
        ...options,
        selectFromResult: (queryResult) => {
            let updatedQueryResult = queryResult as ExtendedQueryResult;
            if (queryResult.data && queryResult.currentData) {
                const chainId = (arg as unknown as { chainId: number }).chainId;
                const tokenFromTokenList = findTokenFromTokenList({ chainId: chainId, address: queryResult.data.id });
                if (tokenFromTokenList) {
                    updatedQueryResult = {
                        ...queryResult,
                        data: {
                            ...queryResult.data,
                            name: tokenFromTokenList.name,
                            symbol: tokenFromTokenList.symbol,
                            logoURI: tokenFromTokenList.logoURI,
                            isListed: true
                        },
                        currentData: {
                            ...queryResult.currentData,
                            name: tokenFromTokenList.name,
                            symbol: tokenFromTokenList.symbol,
                            logoURI: tokenFromTokenList.logoURI,
                            isListed: true
                        } 
                    };
                }
            }

            return updatedQueryResult;
        }
    });
    return tokenQuery;
}

export const findTokenFromTokenList = memoize((input: { chainId: number, address: string }) => {
    const tokenAddressLowerCased = input.address.toLowerCase();
    const tokenListToken = extendedSuperTokenList.tokens.find(x => x.chainId === input.chainId && x.address === tokenAddressLowerCased);
    return tokenListToken;
}, ({ chainId, address }) => `${chainId}-${address.toLowerCase()}`);