import { ensApi } from "../redux/slices/ensResolver.slice";
import { useMemo } from "react";
import { ethers } from "ethers";

interface AddressDisplayResult {
  addressChecksummed: string | null | undefined;
  ensName: string | null | undefined;
  avatar: string | null | undefined;
  isFetching: boolean;
}

export const useAddressDisplay = (
  addressOrName: string
): AddressDisplayResult => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(addressOrName.toLowerCase()),
    [addressOrName]
  );

  if (isSearchTermAddress) {
    return useAddress(addressOrName);
  } else {
    return useName(addressOrName);
  }
};

export const useName = (name: string): AddressDisplayResult => {
  const ensAddressQuery = ensApi.useResolveNameQuery(name);
  return {
    addressChecksummed: ensAddressQuery.currentData?.address,
    ensName: !!ensAddressQuery.currentData?.address ? name : null,
    avatar: undefined,
    isFetching: ensAddressQuery.isFetching,
  };
};

export const useAddress = (address: string): AddressDisplayResult => {
  const ensLookupQuery = ensApi.useLookupAddressQuery(address);
  return {
    addressChecksummed: ethers.utils.getAddress(address.toLowerCase()),
    ensName: ensLookupQuery.data?.name,
    avatar: undefined,
    isFetching: ensLookupQuery.isFetching,
  };
};
