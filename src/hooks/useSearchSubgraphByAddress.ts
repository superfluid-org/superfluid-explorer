import {useMemo} from "react";
import {ethers} from "ethers";
import {networks} from "../redux/networks";
import {sfSubgraph} from "../redux/store";
import {skipToken} from "@reduxjs/toolkit/query";
import {ensApi} from "../redux/slices/ensResolver.slice";
import {gql} from "graphql-request";

const searchByAddressDocument = gql`
  query Search($addressId: ID, $addressBytes: Bytes) {
    tokensByAddress: tokens(where: { id: $addressId, isSuperToken: true }) {
      id
      symbol
      name
      isListed
    }
    tokensByUnderlyingAddress: tokens(
      where: { isSuperToken: true, underlyingAddress: $addressBytes }
    ) {
      id
      symbol
      name
      isListed
    }
    accounts(where: { id: $addressId }) {
      id
    }
  }
`;

export type SubgraphSearchByAddressResult = {
  tokensByAddress: {
    id: string;
    symbol: string;
    name: string;
    isListed: boolean;
  }[];
  tokensByUnderlyingAddress: {
    id: string;
    symbol: string;
    name: string;
    isListed: boolean;
  }[];
  accounts: {
    id: string;
  }[];
};

export const useSearchSubgraphByAddress = (searchTerm: string) => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  );

  const ensQuery = ensApi.useResolveNameQuery(
    searchTerm ? searchTerm : skipToken
  )

  const isEnsAddress = ensQuery !== null ? true : false


  let ensAddress: any = ''
    console.log(ensQuery)

  if(ensQuery){
    ensAddress = ensQuery.data?.address;
    console.log(ensAddress)
  }


  return networks.map((network) =>
    sfSubgraph.useCustomQuery(
      isSearchTermAddress && !isEnsAddress
        ? {
          chainId: network.chainId,
          document: searchByAddressDocument,
          variables: {
            addressId: searchTerm.toLowerCase(),
            addressBytes: searchTerm.toLowerCase(),
          },
        }
        :
        {
          chainId: network.chainId,
          document: searchByAddressDocument,
          variables: {
            addressId: ensAddress ? ensAddress : '',
            addressBytes: ensAddress ? ensAddress : ''
          }
        }
    )
  );
};
