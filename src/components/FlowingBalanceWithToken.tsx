import { Stack } from "@mui/material";
import { FC } from "react";
import FlowingBalance, { FlowingBalanceProps } from "./FlowingBalance";
import TokenChip, { TokenChipProps } from "./TokenChip";

const FlowingBalanceWithToken: FC<FlowingBalanceProps & TokenChipProps> = ({
  network,
  tokenAddress,
  ...flowingBalanceProps
}) => (
  <Stack direction="row" alignItems="center" gap={1}>
    <TokenChip network={network} tokenAddress={tokenAddress} />
    <FlowingBalance {...flowingBalanceProps} />
  </Stack>
);

export default FlowingBalanceWithToken;
