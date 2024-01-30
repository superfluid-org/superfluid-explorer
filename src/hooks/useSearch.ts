import { SerializedError } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import _ from 'lodash'

import {
  ChainId,
  Network,
  networks,
  networksByChainId
} from '../redux/networks'
import { useAddressDisplay } from './useAddressDisplay'
import { useSearchAddressBook } from './useSearchAddressBook'
import {
  SubgraphSearchByAddressResult,
  useSearchSubgraphByAddress
} from './useSearchSubgraphByAddress'
import {
  SubgraphSearchByTokenSymbolResult,
  useSearchSubgraphByTokenSymbol
} from './useSearchSubgraphByTokenSymbol'

export type NetworkSearchResult = {
  network: Network
  isFetching: boolean
  error?: SerializedError
  tokens: {
    id: string
    symbol: string
    name: string
    isListed: boolean
  }[]
  accounts: {
    id: string
  }[]
}

export const useSearch = (searchTerm: string) => {
  const addressDisplay = useAddressDisplay(searchTerm)

  const subgraphSearchByAddressResults = useSearchSubgraphByAddress(
    addressDisplay.addressChecksummed ?? 'skip'
  )
  const subgraphSearchByTokenSymbolResults =
    useSearchSubgraphByTokenSymbol(searchTerm)
  const addressBookResults = useSearchAddressBook(searchTerm)

  const subgraphSearchByAddressMappedResults: NetworkSearchResult[] =
    subgraphSearchByAddressResults
      .filter((x) => !!x.originalArgs)
      .map((searchQuery) => {
        const searchResult: SubgraphSearchByAddressResult =
          (searchQuery.data as SubgraphSearchByAddressResult) ?? {
            accounts: [],
            tokensByAddress: [],
            tokensByUnderlyingAddress: []
          }

        return {
          network: networksByChainId.get(
            searchQuery.originalArgs!.chainId as ChainId
          )!,
          isFetching: searchQuery.isFetching,
          error: searchQuery.error,
          tokens: searchResult.tokensByAddress.concat(
            searchResult.tokensByUnderlyingAddress
          ),
          accounts: searchResult.accounts
        }
      })

  const subgraphSearchByTokenSymbolMappedResults: NetworkSearchResult[] =
    subgraphSearchByTokenSymbolResults
      .filter((x) => !!x.originalArgs)
      .map((searchQuery) => {
        const searchResult: SubgraphSearchByTokenSymbolResult =
          (searchQuery.currentData as SubgraphSearchByTokenSymbolResult) ?? {
            tokensBySymbol: []
          }

        return {
          network: networksByChainId.get(
            searchQuery.originalArgs!.chainId as ChainId
          )!,
          isFetching: searchQuery.isFetching,
          error: searchQuery.error,
          tokens: searchResult.tokensBySymbol,
          accounts: []
        }
      })

  const subgraphSearchByAddressResultsMappedDictionary = Object.fromEntries(
    subgraphSearchByAddressMappedResults.map((x) => [x.network.slugName, x])
  )
  const subgraphSearchByTokenSymbolResultsMappedDictionary = Object.fromEntries(
    subgraphSearchByTokenSymbolMappedResults.map((x) => [x.network.slugName, x])
  )
  const addressBookMappedResultsDictionary = Object.fromEntries(
    addressBookResults.map((x) => [x.network.slugName, x])
  )

  return _.orderBy(networks, (x) => x.isTestnet, 'asc').map((network) => {
    const searchByAddressMappedResult =
      subgraphSearchByAddressResultsMappedDictionary[network.slugName] ?? {
        isFetching: false,
        accounts: [],
        tokens: []
      }

    const searchByTokenSymbolMappedResult =
      subgraphSearchByTokenSymbolResultsMappedDictionary[network.slugName] ?? {
        isFetching: false,
        accounts: [],
        tokens: []
      }

    const addressBookResult = addressBookMappedResultsDictionary[
      network.slugName
    ] ?? {
      accounts: []
    }

    return {
      network: network,
      isFetching:
        searchByAddressMappedResult.isFetching ||
        searchByTokenSymbolMappedResult.isFetching ||
        addressDisplay.isFetching,
      error:
        searchByAddressMappedResult.error &&
        searchByTokenSymbolMappedResult.error,
      tokens: _.orderBy(
        _.uniqBy(
          searchByAddressMappedResult.tokens
            .concat(searchByTokenSymbolMappedResult.tokens)
            .map((x) => ({
              ...x,
              id: ethers.utils.getAddress(x.id)
            })),
          (x) => x.id
        ),
        (x) => x.isListed,
        'desc'
      ),
      accounts: _.uniqBy(
        searchByAddressMappedResult.accounts
          .concat(addressBookResult.accounts)
          .map((x) => ({
            ...x,
            id: ethers.utils.getAddress(x.id),
            ENS: addressDisplay.ensName
          })),
        (x) => x.id
      )
    }
  })
}
