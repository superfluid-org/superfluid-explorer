import {
    Box,
    Tooltip,
    TooltipProps,
} from "@mui/material";
import React from 'react';
import { BigNumber } from "ethers";

interface LiquidationDateProps {
  balance: string;
  balanceTimestamp: number;
  flowRate: string;
  tooltipProps?: TooltipProps;
}

const TimeUntilLiquidiation: React.FC<LiquidationDateProps> = ({ balance, balanceTimestamp, flowRate, tooltipProps }) => {
  const flowRateNum = parseFloat(flowRate);
  const liquidationTime = BigNumber.from(balance).div(BigNumber.from(Math.abs(flowRateNum).toString()));
  const liquidationDate = new Date(balanceTimestamp * 1000 + liquidationTime.toNumber() * 1000);
  const liquidationDateString = `${liquidationDate.toLocaleDateString()} ${liquidationDate.toLocaleTimeString()}`;
  const unixTimestamp = Math.floor(liquidationDate.getTime() / 1000);

  return (
    <>
      <Box display="inline">
        <Tooltip
          title={
            <React.Fragment>
              <span>Unix Timestamp: {unixTimestamp}</span>
            </React.Fragment>
          }
          {...tooltipProps}
          placement="right" arrow>
          <span>Ends on: {liquidationDateString}</span>
        </Tooltip>
      </Box>
    </>
  );
};

export default React.memo(TimeUntilLiquidiation);
