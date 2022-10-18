import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu, Stack } from "@mui/material";
import sortBy from "lodash/fp/sortBy";
import { memo, useRef, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Network, networks } from "../../redux/networks";
import { sfSubgraph } from "../../redux/store";
import NetworkSelectItem from "./NetworkSelectItem";

const networksOrdered = sortBy(
  [(x) => x.isTestnet, (x) => x.slugName],
  networks
);

interface AccountNetworkSelectProps {
  activeNetwork: Network;
  address: string;
}

export default memo<AccountNetworkSelectProps>(function AccountNetworkSelect({
  activeNetwork,
  address,
}) {
  const displayedTestnetChainIds = useAppSelector(
    (state) => state.appPreferences.displayedTestNets
  );

  const ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const mappedNetworkAccounts = networksOrdered

    .map((n) => ({
      network: n,
      account: sfSubgraph.useAccountQuery({
        chainId: n.chainId,
        id: address,
      }),
    }))
    .filter(
      ({ account, network }) =>
        (account.isLoading || !!account.data) &&
        (!network.isTestnet || displayedTestnetChainIds[network.chainId])
    );

  return (
    <>
      <Stack
        onClick={openMenu}
        direction="row"
        columnGap={1}
        alignItems="center"
        ref={ref}
        sx={{ display: "inline-flex", cursor: "pointer" }}
      >
        <span>{activeNetwork.displayName}</span>
        <ExpandMoreIcon />
      </Stack>
      <Menu open={menuOpen} anchorEl={ref.current} onClose={closeMenu}>
        {mappedNetworkAccounts.map(({ network, account }) => (
          <NetworkSelectItem
            key={network.chainId}
            network={network}
            address={address}
            active={network.chainId === activeNetwork.chainId}
            loading={account.isLoading}
            onClick={closeMenu}
          />
        ))}
      </Menu>
    </>
  );
});
