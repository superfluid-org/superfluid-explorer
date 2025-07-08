import { ethers } from 'ethers'
import { useMemo } from 'react'

import { ensApi } from '../redux/slices/ensResolver.slice'
import { whoisApi } from '../redux/slices/whoisResolver.slice'

interface AddressDisplayResult {
  addressChecksummed: string | null | undefined
  ensName: string | null | undefined
  avatar: string | null | undefined
  whoisName: string | null | undefined
  whoisAvatar: string | null | undefined
  recommendedName: string | null | undefined
  recommendedAvatar: string | null | undefined
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
  
  const whoisQuery = whoisApi.useResolveAddressQuery(
    ensAddressQuery.currentData?.address || 'skip',
    {
      skip: !ensAddressQuery.currentData?.address
    }
  )

  return {
    addressChecksummed: ensAddressQuery.currentData?.address,
    ensName: !!ensAddressQuery.currentData?.address ? name : null,
    avatar: undefined,
    whoisName: whoisQuery.data?.recommendedName,
    whoisAvatar: whoisQuery.data?.recommendedAvatar,
    recommendedName: whoisQuery.data?.recommendedName || (!!ensAddressQuery.currentData?.address ? name : null),
    recommendedAvatar: whoisQuery.data?.recommendedAvatar || whoisQuery.data?.ENS?.avatarUrl,
    isFetching: ensAddressQuery.isFetching || whoisQuery.isFetching
  }
}

export const useAddress = (
  address: string,
  skip: boolean
): AddressDisplayResult => {
  const whoisQuery = whoisApi.useResolveAddressQuery(address, {
    skip
  })

  const needsEnsLookup = !skip && !whoisQuery.data?.ENS?.handle && !whoisQuery.isFetching
  const ensLookupQuery = ensApi.useLookupAddressQuery(address, {
    skip: skip || !needsEnsLookup
  })

  //Use fallback from ENS if whois is not returning the name
  const ensName = whoisQuery.data?.ENS?.handle || ensLookupQuery.data?.name

  return {
    addressChecksummed: !skip
      ? ethers.utils.getAddress(address.toLowerCase())
      : undefined,
    ensName: ensName,
    avatar: undefined,
    whoisName: whoisQuery.data?.recommendedName,
    whoisAvatar: whoisQuery.data?.recommendedAvatar,
    recommendedName: whoisQuery.data?.recommendedName || ensName,
    recommendedAvatar: whoisQuery.data?.recommendedAvatar || whoisQuery.data?.ENS?.avatarUrl,
    isFetching: whoisQuery.isFetching || ensLookupQuery.isFetching
  }
}
