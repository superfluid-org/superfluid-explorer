import { ethers } from 'ethers'
import { useMemo } from 'react'

import { ensApi } from '../redux/slices/ensResolver.slice'

interface AddressDisplayResult {
  addressChecksummed: string | null | undefined
  ensName: string | null | undefined
  avatar: string | null | undefined
  isFetching: boolean
}

export const useAddressDisplay = (
  addressOrName: string
): AddressDisplayResult => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(addressOrName.toLowerCase()),
    [addressOrName]
  )

  const addressSearch = useAddress(addressOrName, !isSearchTermAddress)
  const nameSearch = useName(addressOrName, isSearchTermAddress)

  if (isSearchTermAddress) {
    return addressSearch
  } else {
    return nameSearch
  }
}

export const useName = (name: string, skip: boolean): AddressDisplayResult => {
  const ensAddressQuery = ensApi.useResolveNameQuery(name, {
    skip
  })
  return {
    addressChecksummed: ensAddressQuery.currentData?.address,
    ensName: !!ensAddressQuery.currentData?.address ? name : null,
    avatar: undefined,
    isFetching: ensAddressQuery.isFetching
  }
}

export const useAddress = (
  address: string,
  skip: boolean
): AddressDisplayResult => {
  const ensLookupQuery = ensApi.useLookupAddressQuery(address, {
    skip
  })
  return {
    addressChecksummed: !skip
      ? ethers.utils.getAddress(address.toLowerCase())
      : undefined,
    ensName: ensLookupQuery.data?.name,
    avatar: undefined,
    isFetching: ensLookupQuery.isFetching
  }
}
