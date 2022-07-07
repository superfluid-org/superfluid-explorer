import {useMemo} from "react";
import {ethers} from "ethers";
import {networks} from "../redux/networks";
import {useAppSelector} from "../redux/hooks";
import {addressBookSelectors} from "../redux/slices/addressBook.slice";

export const useSearchAddressBook = (searchTerm: string) => {
  const isSearchTermAddress = useMemo(
    () => ethers.utils.isAddress(searchTerm),
    [searchTerm]
  );

  return networks.map((network) => {
    const addressBookEntries = useAppSelector((state) =>
        searchTerm !== "" && !isSearchTermAddress
        ? addressBookSelectors
          .selectAll(state)
          .filter((x) => x.chainId === network.chainId)
        : []
    );

    return {
      network: network,
      accounts: addressBookEntries
        .filter((x) => x.nameTag.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((x) => ({id: x.address})),
    };
  });
};
