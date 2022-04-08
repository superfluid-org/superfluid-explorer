import { Chip } from "@mui/material";
import { FC } from "react";
import { Network } from "../redux/networks";
import { sfSubgraph } from "../redux/store";
import AppLink from "./AppLink";

export interface TokenChipProps {
  network: Network;
  tokenAddress: string;
}

const TokenChip: FC<TokenChipProps> = ({ network, tokenAddress }) => {
  const tokenQuery = sfSubgraph.useTokenQuery({
    chainId: network.chainId,
    id: tokenAddress,
  });

  if (!tokenQuery.data) return null;

  return (
    <AppLink
      data-cy={"token-link"}
      className="address"
      href={`/${network.slugName}/supertokens/${tokenAddress}`}
      sx={{ textDecoration: "none", flexShrink: 0 }}
    >
      <Chip
        clickable
        size="small"
        label={tokenQuery.data.symbol}
        sx={{ cursor: "pointer", lineHeight: "24px" }}
      />
    </AppLink>
  );
};

export default TokenChip;
