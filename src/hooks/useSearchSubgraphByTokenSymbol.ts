import {useMemo} from "react";
import {ethers} from "ethers";
import {networks} from "../redux/networks";
import {sfSubgraph} from "../redux/store";
import {skipToken} from "@reduxjs/toolkit/query";
import {gql} from "graphql-request";
import { ensApi } from "../redux/slices/ensResolver.slice";

const searchByTokenSymbolDocument = gql`
  query Search($tokenSymbol: String) {
    tokensBySymbol: tokens(
      where: { isSuperToken: true, symbol_contains: $tokenSymbol }
    ) {
      id
      symbol
      name
      isListed
    }
  }
`;

export type SubgraphSearchByTokenSymbolResult = {
  tokensBySymbol: {
    id: string;
    symbol: string;
    name: string;
    isListed: boolean;
  }[];
};

export const useSearchSubgraphByTokenSymbol = (searchTerm: string) => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  );

  const ensQuery = ensApi.useResolveNameQuery(
    searchTerm
  )

  const isEnsAddress =  !!ensQuery.data?.address

  return networks.map((network) =>
    sfSubgraph.useCustomQuery(
      !isSearchTermAddress && searchTerm.length > 2 && !isEnsAddress
        ? {
          chainId: network.chainId,
          document: searchByTokenSymbolDocument,
          variables: {
            tokenSymbol: searchTerm,
          },
        }
        : skipToken
    )
  );
};
