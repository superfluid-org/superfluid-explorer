import { Stack } from "@mui/material";
import { FC } from "react";
import FlowingBalance, { FlowingBalanceProps } from "./FlowingBalance";
import TokenChip, { TokenChipProps } from "./TokenChip";

/**
 * If TokenChipProps is not provided, token chip will not be shown.
 */
const FlowingBalanceWithToken: FC<
  FlowingBalanceProps & { TokenChipProps: TokenChipProps | undefined | null }
> = ({ TokenChipProps, ...flowingBalanceProps }) => (
  <Stack direction="row" alignItems="center" gap={1}>
    {TokenChipProps && <TokenChip {...TokenChipProps} />}
    <FlowingBalance {...flowingBalanceProps} />
  </Stack>
);

export default FlowingBalanceWithToken;
