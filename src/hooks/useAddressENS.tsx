import { ensApi } from "../redux/slices/ensResolver.slice";
import {useMemo} from "react";
import {ethers} from "ethers";

interface AddressNameResult {
  addressChecksummed: string;
  name: string;
}

export const useAddressName = (address: string): AddressNameResult => {

  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(address),
    [address]
  );

  if(isSearchTermAddress){
    const ensLookupQuery = ensApi.useLookupAddressQuery(address);
    return {
      addressChecksummed: address,
      name: ensLookupQuery.data?.name ?? "",
    };
  }
  else{
    const ensAddressQuery = ensApi.useResolveNameQuery(address);
    return {
      addressChecksummed: ensAddressQuery.data?.address ?? "",
      name: address,
    };

  }
};


