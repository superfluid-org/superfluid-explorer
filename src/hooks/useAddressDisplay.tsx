import { ethers } from 'ethers'
import { useMemo, useRef } from 'react'

import { ensApi } from '../redux/slices/ensResolver.slice'
import { names } from '../names';

interface AddressDisplayResult {
  addressChecksummed: string | null | undefined
  ensName: string | null | undefined
  avatar: string | null | undefined
  isFetching: boolean
}

interface afEntry {
  handle: string
  avatar: string
  aaAddress: string
  channelAddress: string
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

  const afUser = useAfUser({name});
  const afChannel = useAfChannel({name});

  const address = afUser?.aaAddress || afChannel?.aaAddress || ensAddressQuery.currentData?.address;
  const avatar = afUser?.avatar || afChannel?.avatar || undefined;

  return {
    addressChecksummed: address,
    ensName: name,
    avatar,
    isFetching: ensAddressQuery.isFetching
  }
}

export const useAddress = (
  address: string,
  skip: boolean
): AddressDisplayResult => {

  const afUser = useAfUser({address});
  const afChannel = useAfChannel({address});

  const ensLookupQuery = ensApi.useLookupAddressQuery(address, {
    skip
  })
  const name = afUser?.handle || afChannel?.handle || ensLookupQuery.data?.name || null;
  const avatar = afUser?.avatar || afChannel?.avatar || null;

  return {
    addressChecksummed: !skip
      ? ethers.utils.getAddress(address.toLowerCase())
      : undefined,
    ensName: name,
    avatar,
    isFetching: ensLookupQuery.isFetching
  }
}


export const useAfUser = ({address, name}: {address?: string, name?: string}) => {
  const cache = useRef<{ [key: string]: afEntry }>({});

  const getUserInfo = (address: string, name: string) => {
    const key = address || name;
    if (cache.current[key as keyof typeof cache.current]) {
      return cache.current[key as keyof typeof cache.current];
    }

    let matchingEntry;
    if (address) {
      matchingEntry = names.find(entry => entry.aaAddress?.toLowerCase() === address.toLowerCase());
    } else if (name) {
      matchingEntry = names.find(entry => entry.handle === name);
    }

    if (matchingEntry) {
      const result: afEntry = {
        handle: `${matchingEntry.handle} (AF user)`,
        avatar: matchingEntry.avatar || '',
        aaAddress: matchingEntry.aaAddress,
        channelAddress: matchingEntry.channelAddress
      };
      cache.current[key] = result;
      return result;
    }

    return null;
  };

  return getUserInfo(address || '', name || '');
}

export const useAfChannel = ({address, name}: {address?: string, name?: string}) => {
  const cache = useRef<{ [key: string]: afEntry }>({});

  const getChannelInfo = (address: string, name: string) => {
    const key = address || name;
    if (cache.current[key as keyof typeof cache.current]) {
      return cache.current[key as keyof typeof cache.current];
    }

    let matchingEntry;
    if (address) {
      matchingEntry = names.find(entry => entry.channelAddress?.toLowerCase() === address.toLowerCase());
    } else if (name) {
      matchingEntry = names.find(entry => entry.handle === name);
    }

    if (matchingEntry) {
      const result: afEntry = {
        handle: `${matchingEntry.handle} (AF channel)`,
        avatar: matchingEntry.avatar || '',
        channelAddress: matchingEntry.channelAddress,
        aaAddress: matchingEntry.aaAddress
      };
      cache.current[key] = result;
      return result;
    }

    return null;
  };

  return getChannelInfo(address || '', name || '');
}

