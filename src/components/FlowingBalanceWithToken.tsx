import { Stack } from "@mui/material";
import { FC } from "react";
import { Network } from "../redux/networks";
import { rpcApi } from "../redux/store";
import FlowingBalance, { FlowingBalanceProps } from "./FlowingBalance";
import TokenChip, { TokenChipProps } from "./TokenChip";

export const AccountTokenBalance: FC<{
  network: Network;
  tokenAddress: string;
  accountAddress: string;
  placeholder?: FlowingBalanceProps;
  TokenChipProps?: TokenChipProps;
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
      <TokenBalance
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

const TokenBalance: FC<
  FlowingBalanceProps & { TokenChipProps?: TokenChipProps }
> = ({ TokenChipProps, ...flowingBalanceProps }) => (
  <Stack direction="row" alignItems="center" gap={1}>
    {TokenChipProps && <TokenChip {...TokenChipProps} />}
    <FlowingBalance {...flowingBalanceProps} />
  </Stack>
);

export default TokenBalance;
