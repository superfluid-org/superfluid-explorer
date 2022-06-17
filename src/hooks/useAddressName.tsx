import { ensApi } from "../redux/slices/ensApi.slice";
import {getAddress} from '@ethersproject/address';

interface AddressNameResult {
  addressChecksummed: string;
  name: string | "";
}

const useAddressName = (address: string): AddressNameResult => {
  const ensLookupQuery = ensApi.useLookupAddressQuery(address);
  return {
    addressChecksummed: getAddress(address),
    name: ensLookupQuery.data?.name ?? "",
  };
};

export default useAddressName;
