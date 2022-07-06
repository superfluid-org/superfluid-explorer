import {useMemo} from "react";
import {ethers} from "ethers";
import {networks} from "../redux/networks";
import {useAppSelector} from "../redux/hooks";
import {addressBookSelectors} from "../redux/slices/addressBook.slice";
import {ensApi} from "../redux/slices/ensResolver.slice";

export const useSearchAddressBook = (searchTerm: string) => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  );

  let ensQuery: any = '';

  if(isSearchTermAddress) {
    ensQuery = ensApi.useResolveNameQuery(
      searchTerm
    )
  }
  else{
    ensQuery = ensApi.useLookupAddressQuery(
      searchTerm
    )
  }

  const ensSearchTerm = ensQuery !== null ? ensQuery.data?.address : searchTerm.toLocaleLowerCase()

  return networks.map((network) => {
    const addressBookEntries = useAppSelector((state) =>
        searchTerm !== "" && !isSearchTermAddress && !ensQuery.data
        ? addressBookSelectors
          .selectAll(state)
          .filter((x) => x.chainId === network.chainId)
        : []
    );

    return {
      network: network,
      accounts: addressBookEntries
      .filter((x) => x.nameTag.toLowerCase().includes(ensSearchTerm? ensSearchTerm : searchTerm.toLocaleLowerCase()))
        .map((x) => ({id: x.address})),
    };
  });
};
