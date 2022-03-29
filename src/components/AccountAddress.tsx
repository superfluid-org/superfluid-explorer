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
import ellipsisAddress from "../utils/ellipsisAddress";

const AccountAddress: FC<{
  network: Network;
  address: string;
  ellipsis?: number;
  dataCy?: string;
}> = ({ network, address, ellipsis , dataCy}) => {
  const prefetchAccountQuery = sfSubgraph.usePrefetch("account", {
    ifOlderThan: 45,
  });

  const [prefetchTimeoutId, setPrefetchTimeoutId] = useState<any | undefined>();

  return (
    <AppLink
      data-cy={dataCy}
      className="address"
      href={`/${network.slugName}/accounts/${address}`}
      sx={{ fontFamily: "Roboto Mono" }}
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
      <AccountAddressFormatted
        network={network}
        address={address}
        ellipsis={ellipsis}
      />
    </AppLink>
  );
};

export const AccountAddressFormatted: FC<{
  network: Network;
  address: string;
  ellipsis?: number;
}> = ({ network, address, ellipsis }) => {
  const addressBookEntry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  );

  const parsedAddress = ellipsis
    ? ellipsisAddress(ethers.utils.getAddress(address), ellipsis)
    : ethers.utils.getAddress(address);

  return <>{addressBookEntry?.nameTag || parsedAddress}</>;
};

export default AccountAddress;
