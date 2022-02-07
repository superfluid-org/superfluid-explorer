import { FC, useState } from "react";
import { ethers } from "ethers";
import AppLink from "./AppLink";
import { sfSubgraph } from "../redux/store";
import { Network } from "../redux/networks";
import { useAppSelector } from "../redux/hooks";
import {
  addressBookSelectors,
  createEntryId,
} from "../redux/slices/addressBook.slice";

const AccountAddress: FC<{
  network: Network;
  address: string;
}> = ({ network, address, children }) => {
  const prefetchAccountQuery = sfSubgraph.usePrefetch("account", {
    ifOlderThan: 45,
  });

  const [prefetchTimeoutId, setPrefetchTimeoutId] = useState<any | undefined>();

  return (
    <AppLink
      className="address"
      href={`/${network.slugName}/accounts/${address}`}
      onMouseEnter={() => {
        // It's fine to have duplicate setTimeout's as duplicate _queries_ will not get fired.
        setPrefetchTimeoutId(
          setTimeout(
            () =>
              prefetchAccountQuery({
                chainId: network.chainId,
                id: address,
              }),
            100
          )
        );
      }}
      onMouseLeave={() => {
        // The point is that if mouse leaves so quickly that timeout didn't fire then no point to prefetch (user probably just moving mouse over.)
        if (prefetchTimeoutId) {
          clearTimeout(prefetchTimeoutId);
        }
      }}
    >
      <AccountAddressFormatted network={network} address={address} />
    </AppLink>
  );
};

export const AccountAddressFormatted: FC<{
  network: Network;
  address: string;
}> = ({ network, address }) => {
  const addressBookEntry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  );

  return (
    <>
      {addressBookEntry?.nameTag
        ? `${addressBookEntry.nameTag} (${ethers.utils.getAddress(address)})`
        : ethers.utils.getAddress(address)}
    </>
  );
};

export default AccountAddress;
