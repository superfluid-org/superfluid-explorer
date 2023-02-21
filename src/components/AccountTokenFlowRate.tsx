import { FC } from "react";
import { Network } from "../redux/networks";
import { rpcApi } from "../redux/store";
import { FlowingBalanceProps } from "./FlowingBalance";
import FlowRate from "./FlowRate";
import { TokenChipProps } from "./TokenChip";

export const AccountTokenFlowRate: FC<{
  network: Network;
  tokenAddress: string;
  accountAddress: string;
  /**
   * The temporary balance used (e.g. from Subgraph) before doing the RPC call for the most accurate balance.
   */
  placeholder: FlowingBalanceProps;
  /**
   * If TokenChipProps is not provided, token chip will not be shown.
   */
  TokenChipProps: TokenChipProps | undefined | null;
}> = ({
  network,
  tokenAddress,
  accountAddress,
  placeholder,
  TokenChipProps,
}) => {
  const realtimeBalanceQuery = rpcApi.useRealtimeBalanceQuery({
    chainId: network.chainId,
    tokenAddress: tokenAddress,
    accountAddress: accountAddress,
  });

  const flowRate =
    realtimeBalanceQuery?.data?.flowRate || placeholder?.flowRate;

  if (flowRate) {
    return (
     <FlowRate flowRate={flowRate}></FlowRate>
    );
  } else {
    return null;
  }
};

export default AccountTokenFlowRate;
