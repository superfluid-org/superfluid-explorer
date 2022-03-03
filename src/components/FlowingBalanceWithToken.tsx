import _ from "lodash";
import { FC } from "react";
import { Network } from "../redux/networks";
import { sfSubgraph } from "../redux/store";
import AppLink from "./AppLink";
import FlowingBalance, { FlowingBalanceProps } from "./FlowingBalance";

const FlowingBalanceWithToken: FC<
  FlowingBalanceProps & { network: Network; tokenAddress: string }
> = ({ network, tokenAddress, ...flowingBalanceProps }) => {
  const tokenQuery = sfSubgraph.useTokenQuery({
    chainId: network.chainId,
    id: tokenAddress,
  });
  return (
    <>
      <FlowingBalance {...flowingBalanceProps} />
      &nbsp;
      {tokenQuery.data ? (
        <AppLink
          data-cy={"token-link"}
          className="address"
          href={`/${network.slugName}/supertokens/${tokenAddress}`}
        >
          {tokenQuery.data.symbol}
        </AppLink>
      ) : null}
    </>
  );
};

export default FlowingBalanceWithToken;
