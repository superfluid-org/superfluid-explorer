import { skipToken } from '@reduxjs/toolkit/query'
import { ethers } from 'ethers'
import { gql } from 'graphql-request'
import { useMemo } from 'react'

import { useAvailableNetworks } from '../contexts/AvailableNetworksContext'
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
  const { availableNetworks, isNetworkVisible } = useAvailableNetworks()

  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  )

  return availableNetworks.map((network) =>
    sfSubgraph.useCustomQuery(
      isSearchTermAddress && isNetworkVisible(network.chainId)
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
