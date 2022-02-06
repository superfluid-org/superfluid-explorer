import { FC } from "react";
import { ethers } from "ethers";
import AppLink from "./AppLink";
import { sfSubgraph } from "../redux/store";
import { Grid, Typography } from "@mui/material";
import { Network } from "../redux/networks";
import { Token } from "@superfluid-finance/sdk-core";

const SuperTokenAddress: FC<{
  network: Network;
  address: string;
  format?: (token: Token) => string;
  formatLoading?: () => string;
}> = ({
  network,
  address,
  format = (token) => `${token.name} (${token.symbol})`,
  formatLoading = () => ethers.utils.getAddress(address),
}) => {
  const tokenQuery = sfSubgraph.useTokenQuery({
    chainId: network.chainId,
    id: address,
  });

  return (
    <AppLink
      className="address"
      href={`/${network.slugName}/supertokens/${address}`}
    >
      {tokenQuery.data ? format(tokenQuery.data) : formatLoading()}
    </AppLink>
  );
};

export const SuperTokenFormatted: FC<{
  address: string;
  name: string;
  symbol: string;
}> = ({ address, name, symbol }) => {
  return (
    <Grid>
      <Grid item xs={12}>
        {name} ({symbol})
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" component="span">
          {ethers.utils.getAddress(address)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SuperTokenAddress;
