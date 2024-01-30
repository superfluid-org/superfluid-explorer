import { ethers } from 'ethers'
import { useMemo } from 'react'

import { useAppSelector } from '../redux/hooks'
import { networks } from '../redux/networks'
import { addressBookSelectors } from '../redux/slices/addressBook.slice'

export const useSearchAddressBook = (searchTerm: string) => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  )

  const addressBookEntries = useAppSelector((state) =>
    searchTerm !== '' && !isSearchTermAddress
      ? addressBookSelectors.selectAll(state)
      : []
  )

  return networks.map((network) => {
    return {
      network: network,
      accounts: addressBookEntries
        .filter((x) => x.chainId === network.chainId)
        .filter((x) =>
          x.nameTag.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((x) => ({ id: x.address }))
    }
  })
}
