import { FC } from "react";
import { Network } from "../redux/networks";
import { rpcApi } from "../redux/store";
import { FlowingBalanceProps } from "./FlowingBalance";
import FlowingBalanceWithToken from "./FlowingBalanceWithToken";
import { TokenChipProps } from "./TokenChip";

export const AccountTokenBalance: FC<{
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

  const balance = realtimeBalanceQuery?.data?.balance || placeholder?.balance;
  const balanceTimestamp =
    realtimeBalanceQuery?.data?.balanceTimestamp ||
    placeholder?.balanceTimestamp;
  const flowRate =
    realtimeBalanceQuery?.data?.flowRate || placeholder?.flowRate;

  if (balance && balanceTimestamp && flowRate) {
    return (
      <FlowingBalanceWithToken
        balance={balance}
        balanceTimestamp={balanceTimestamp}
        flowRate={flowRate}
        TokenChipProps={TokenChipProps}
      />
    );
  } else {
    return null;
  }
};

export default AccountTokenBalance;
