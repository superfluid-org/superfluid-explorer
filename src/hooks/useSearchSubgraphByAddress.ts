import { skipToken } from '@reduxjs/toolkit/query'
import { ethers } from 'ethers'
import { gql } from 'graphql-request'
import { useCallback, useMemo } from 'react'

import { useAvailableNetworks } from '../contexts/AvailableNetworksContext'
import { useAppSelector } from '../redux/hooks'
import { networks } from '../redux/networks'
import { sfSubgraph } from '../redux/store'

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
`

export type SubgraphSearchByAddressResult = {
  tokensByAddress: {
    id: string
    symbol: string
    name: string
    isListed: boolean
  }[]
  tokensByUnderlyingAddress: {
    id: string
    symbol: string
    name: string
    isListed: boolean
  }[]
  accounts: {
    id: string
  }[]
}

export const useSearchSubgraphByAddress = (searchTerm: string) => {
  const { availableNetworks } = useAvailableNetworks()

  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  )

  const isNetworkAvailable = useCallback(
    (chainId: number) =>
      availableNetworks.some((network) => network.chainId === chainId),
    [availableNetworks]
  )

  const currentDisplayedNetworks = useAppSelector(
    (state) => state.appPreferences.displayedTestNets
  )

  return networks.map((network) =>
    sfSubgraph.useCustomQuery(
      isSearchTermAddress &&
        isNetworkAvailable(network.chainId) &&
        (!network.isTestnet || currentDisplayedNetworks[network.chainId])
        ? {
            chainId: network.chainId,
            document: searchByAddressDocument,
            variables: {
              addressId: searchTerm.toLowerCase(),
              addressBytes: searchTerm.toLowerCase()
            }
          }
        : skipToken
    )
  )
}
