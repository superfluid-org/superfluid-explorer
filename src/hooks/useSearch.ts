import {Network, networks, networksByChainId} from "../redux/networks";
import _ from "lodash";
import {ethers} from "ethers";
import {useSearchAddressBook} from "./useSearchAddressBook";
import {SubgraphSearchByAddressResult, useSearchSubgraphByAddress} from "./useSearchSubgraphByAddress";
import {SubgraphSearchByTokenSymbolResult, useSearchSubgraphByTokenSymbol} from "./useSearchSubgraphByTokenSymbol";
import { SerializedError } from "@reduxjs/toolkit";

export type NetworkSearchResult = {
  network: Network;
  isFetching: boolean;
  error?: SerializedError;
  tokens: {
    id: string;
    symbol: string;
    name: string;
    isListed: boolean;
  }[];
  accounts: {
    id: string;
  }[];
};

export const useSearch = (searchTerm: string) => {
  const subgraphSearchByAddressResults = useSearchSubgraphByAddress(searchTerm);
  const subgraphSearchByTokenSymbolResults =
    useSearchSubgraphByTokenSymbol(searchTerm);
  const addressBookResults = useSearchAddressBook(searchTerm);

  const subgraphSearchByAddressMappedResults: NetworkSearchResult[] =
    subgraphSearchByAddressResults
      .filter((x) => !!x.originalArgs)
      .map((searchQuery) => {
        const searchResult: SubgraphSearchByAddressResult =
          (searchQuery.data as SubgraphSearchByAddressResult) ?? {
            accounts: [],
            tokensByAddress: [],
            tokensByUnderlyingAddress: [],
          };

        return {
          network: networksByChainId.get(searchQuery.originalArgs!.chainId)!,
          isFetching: searchQuery.isFetching,
          error: searchQuery.error,
          tokens: searchResult.tokensByAddress.concat(
            searchResult.tokensByUnderlyingAddress
          ),
          accounts: searchResult.accounts,
        };
      });

  const subgraphSearchByTokenSymbolMappedResults: NetworkSearchResult[] =
    subgraphSearchByTokenSymbolResults
      .filter((x) => !!x.originalArgs)
      .map((searchQuery) => {
        const searchResult: SubgraphSearchByTokenSymbolResult =
          (searchQuery.data as SubgraphSearchByTokenSymbolResult) ?? {
            tokensBySymbol: [],
          };

        return {
          network: networksByChainId.get(searchQuery.originalArgs!.chainId)!,
          isFetching: searchQuery.isFetching,
          error: searchQuery.error,
          tokens: searchResult.tokensBySymbol,
          accounts: [],
        };
      });

  const subgraphSearchByAddressResultsMappedDictionary = Object.fromEntries(
    subgraphSearchByAddressMappedResults.map((x) => [x.network.slugName, x])
  );
  const subgraphSearchByTokenSymbolResultsMappedDictionary = Object.fromEntries(
    subgraphSearchByTokenSymbolMappedResults.map((x) => [x.network.slugName, x])
  );
  const addressBookMappedResultsDictionary = Object.fromEntries(
    addressBookResults.map((x) => [x.network.slugName, x])
  );

  return _.orderBy(networks, (x) => x.isTestnet, "asc").map((network) => {
    const searchByAddressMappedResult =
      subgraphSearchByAddressResultsMappedDictionary[network.slugName] ?? {
        isFetching: false,
        accounts: [],
        tokens: [],
      };

    const searchByTokenSymbolMappedResult =
      subgraphSearchByTokenSymbolResultsMappedDictionary[network.slugName] ?? {
        isFetching: false,
        accounts: [],
        tokens: [],
      };

    const addressBookResult = addressBookMappedResultsDictionary[
      network.slugName
      ] ?? {
      accounts: [],
    };

    return {
      network: network,
      isFetching:
        searchByAddressMappedResult.isFetching ||
        searchByTokenSymbolMappedResult.isFetching,
      error:
        searchByAddressMappedResult.error &&
        searchByTokenSymbolMappedResult.error,
      tokens: _.orderBy(
        _.uniqBy(
          searchByAddressMappedResult.tokens
            .concat(searchByTokenSymbolMappedResult.tokens)
            .map((x) => ({...x, id: ethers.utils.getAddress(x.id)})),
          (x) => x.id
        ),
        (x) => x.isListed,
        "desc"
      ),
      accounts: _.uniqBy(
        searchByAddressMappedResult.accounts
          .concat(addressBookResult.accounts)
          .map((x) => ({...x, id: ethers.utils.getAddress(x.id)})),
        (x) => x.id
      ),
    };
  });
};
