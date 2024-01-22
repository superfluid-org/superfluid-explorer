import { skipToken } from '@reduxjs/toolkit/query'
import { ethers } from 'ethers'
import { gql } from 'graphql-request'
import { useMemo } from 'react'

import { networks } from '../redux/networks'
import { sfSubgraph } from '../redux/store'

const searchByTokenSymbolDocument = gql`
  query Search($tokenSymbol: String) {
    tokensBySymbol: tokens(
      where: { isSuperToken: true, symbol_contains_nocase: $tokenSymbol }
    ) {
      id
      symbol
      name
      isListed
    }
  }
`

export type SubgraphSearchByTokenSymbolResult = {
  tokensBySymbol: {
    id: string
    symbol: string
    name: string
    isListed: boolean
  }[]
}

export const useSearchSubgraphByTokenSymbol = (searchTerm: string) => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  )

  return networks.map((network) =>
    sfSubgraph.useCustomQuery(
      !isSearchTermAddress && searchTerm.length > 2
        ? {
            chainId: network.chainId,
            document: searchByTokenSymbolDocument,
            variables: {
              tokenSymbol: searchTerm
            }
          }
        : skipToken
    )
  )
}
