import { ethers } from 'ethers'
import { useMemo } from 'react'

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
  const whoisReverseQuery = whoisApi.useReverseResolveNameQuery(name, {
    skip
  })

  // Extract address from whois response (could be from ENS, Farcaster, etc.)
  const resolvedAddress = whoisReverseQuery.currentData?.ENS?.address || 
                         whoisReverseQuery.currentData?.Farcaster?.address ||
                         whoisReverseQuery.currentData?.AlfaFrens?.address ||
                         whoisReverseQuery.currentData?.TOREX?.address

  return {
    addressChecksummed: resolvedAddress ? ethers.utils.getAddress(resolvedAddress) : undefined,
    ensName: whoisReverseQuery.currentData?.ENS?.handle,
    avatar: whoisReverseQuery.currentData?.recommendedAvatar,
    whoisName: whoisReverseQuery.currentData?.recommendedName,
    whoisAvatar: whoisReverseQuery.currentData?.recommendedAvatar,
    recommendedName: whoisReverseQuery.currentData?.recommendedName,
    recommendedAvatar: whoisReverseQuery.currentData?.recommendedAvatar,
    isFetching: whoisReverseQuery.isFetching
  }
}

export const useAddress = (
  address: string,
  skip: boolean
): AddressDisplayResult => {
  const whoisQuery = whoisApi.useResolveAddressQuery(address, {
    skip
  })

  return {
    addressChecksummed: !skip
      ? ethers.utils.getAddress(address.toLowerCase())
      : undefined,
    ensName: whoisQuery.data?.ENS?.handle,
    avatar: whoisQuery.data?.recommendedAvatar,
    whoisName: whoisQuery.data?.recommendedName,
    whoisAvatar: whoisQuery.data?.recommendedAvatar,
    recommendedName: whoisQuery.data?.recommendedName,
    recommendedAvatar: whoisQuery.data?.recommendedAvatar,
    isFetching: whoisQuery.isFetching
  }
}
