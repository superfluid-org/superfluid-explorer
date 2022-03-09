import CheckIcon from "@mui/icons-material/Check";
import { CircularProgress, ListItemText, MenuItem } from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";
import { Network } from "../../redux/networks";

interface NetworkSelectItemProps {
  network: Network;
  address: string;
  active?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const NetworkSelectItem: FC<NetworkSelectItemProps> = ({
  network,
  address,
  active,
  loading,
  onClick,
}) => (
  <NextLink href={`/${network.slugName}/accounts/${address}`} passHref>
    <MenuItem
      disabled={loading || active}
      sx={{ minWidth: 160 }}
      onClick={onClick}
    >
      <ListItemText>{network.displayName}</ListItemText>
      {active && <CheckIcon sx={{ fontSize: 16 }} />}
      {!active && loading && <CircularProgress size={18} sx={{ ml: 2 }} />}
    </MenuItem>
  </NextLink>
);

export default NetworkSelectItem;
