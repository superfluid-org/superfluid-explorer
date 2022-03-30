import { Stack } from "@mui/material";
import { FC } from "react";
import FlowingBalance, { FlowingBalanceProps } from "./FlowingBalance";
import TokenChip, { TokenChipProps } from "./TokenChip";

interface FlowingBalanceWithTokenProps
  extends FlowingBalanceProps,
    TokenChipProps {
  trailingToken?: boolean;
}

const FlowingBalanceWithToken: FC<FlowingBalanceWithTokenProps> = ({
  network,
  tokenAddress,
  trailingToken = false,
  ...flowingBalanceProps
}) => (
  <Stack direction="row" alignItems="center" gap={1}>
    <TokenChip network={network} tokenAddress={tokenAddress} />
    <FlowingBalance {...flowingBalanceProps} />
  </Stack>
);

export default FlowingBalanceWithToken;
