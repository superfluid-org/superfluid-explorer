import { ensApi } from "../redux/slices/ensResolver.slice";
import {useMemo} from "react";
import {ethers} from "ethers";

interface AddressNameResult {
  addressChecksummed: string;
  name: string;
  avatar: string;
}

export const useAddressName = (address: string): AddressNameResult => {

  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(address),
    [address]
  );

  if(isSearchTermAddress){
    return useAddress(address);
  }

  else{
    return useName(address);
  }
};

export const useName = (address: string): AddressNameResult => {
  const ensAddressQuery = ensApi.useResolveNameQuery(address);
  return {
    addressChecksummed: ensAddressQuery.data?.address ?? "",
    name: address,
    avatar: '',
  };
}

export const useAddress = (address: string): AddressNameResult => {
  const ensLookupQuery = ensApi.useLookupAddressQuery(address);
  return {
    addressChecksummed: address,
    name: ensLookupQuery.data?.name ?? "",
    avatar: "",
  };
}
