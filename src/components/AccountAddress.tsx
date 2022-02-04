import {FC} from "react";
import {ethers} from "ethers";
import AppLink from "./AppLink";
import {sfSubgraph} from "../redux/store";
import {Network} from "../redux/networks";
import {useAppSelector} from "../redux/hooks";
import {addressBookSelectors, createEntryId} from "../redux/slices/addressBook.slice";

const AccountAddress: FC<{
  network: Network,
  address: string
}> = ({network, address, children}) => {
  const prefetchAccountQuery = sfSubgraph.usePrefetch('account', {
    ifOlderThan: 45
  })

  return (
    <AppLink className="address"
             href={`/${network.slugName}/accounts/${address}`}
             onMouseEnter={() => prefetchAccountQuery({
               chainId: network.chainId,
               id: address
             })}
             >
      <AccountAddressFormatted network={network} address={address}/>
    </AppLink>);
}

export const AccountAddressFormatted: FC<{
  network: Network
  address: string
}> = ({network, address}) => {
  const addressBookEntry = useAppSelector(state => addressBookSelectors.selectById(state, createEntryId(network, address)));

  return <>{addressBookEntry?.nameTag ? `${addressBookEntry.nameTag} (${ethers.utils.getAddress(address)})` : ethers.utils.getAddress(address)}</>
}

export default AccountAddress;
