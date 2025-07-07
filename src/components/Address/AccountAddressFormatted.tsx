import { ethers } from 'ethers'
import { FC } from 'react'

import { useAddressDisplay } from '../../hooks/useAddressDisplay'
import { useAppSelector } from '../../redux/hooks'
import { Network } from '../../redux/networks'
import {
  addressBookSelectors,
  createEntryId
} from '../../redux/slices/addressBook.slice'
import ellipsisAddress from '../../utils/ellipsisAddress'

export const AccountAddressFormatted: FC<{
  network: Network
  address: string
  ellipsis?: number
  format?: 'nameOnly' | 'addressPlusName' | 'namePlusAddress'
}> = ({ network, address, ellipsis, format = 'nameOnly' }) => {
  const addressBookEntry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  )
  const addressDisplay = useAddressDisplay(address)
  
  const parsedAddress = ellipsis
    ? ellipsisAddress(ethers.utils.getAddress(address), ellipsis)
    : ethers.utils.getAddress(address)

  // Priority: Address Book > Whois recommended name >  shortened address
  const displayName = addressBookEntry?.nameTag || addressDisplay.recommendedName || null

  if (format === 'addressPlusName') {
    return (
      <>
        {parsedAddress}
        {!!displayName && ` (${displayName})`}
      </>
    )
  }

  if (format === 'namePlusAddress') {
    if (!displayName) {
      return <>{parsedAddress}</>
    } else {
      return (
        <>
          {displayName} ({parsedAddress})
        </>
      )
    }
  }

  // "nameOnly" is default
  return <>{displayName || parsedAddress}</>
}
