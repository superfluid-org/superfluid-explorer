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


  const ensQuery = ensApi.useResolveNameQuery(
    searchTerm
  )

  const ensSearchTerm = ensQuery !== null ? ensQuery.address : searchTerm.toLocaleLowerCase()

  return networks.map((network) => {
    const addressBookEntries = useAppSelector((state) =>
      searchTerm !== "" && !isSearchTermAddress && !ensQuery
        ? addressBookSelectors
          .selectAll(state)
          .filter((x) => x.chainId === network.chainId)
        : []
    );

    return {
      network: network,
      accounts: addressBookEntries
        .filter((x) => x.nameTag.toLowerCase().includes(ensSearchTerm))
        .map((x) => ({id: x.address})),
    };
  });
};
