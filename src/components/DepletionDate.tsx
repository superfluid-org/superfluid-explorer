import {
    Box,
    Tooltip,
    TooltipProps,
    Typography
} from "@mui/material";
import React from 'react';
import { BigNumber } from "ethers";

interface DepletionDateProps {
  balance: string;
  balanceTimestamp: number;
  flowRate: string;
  tooltipProps?: TooltipProps;
}

const DepletionDate: React.FC<DepletionDateProps> = ({ balance, balanceTimestamp, flowRate, tooltipProps }) => {
  const flowRateNum = parseFloat(flowRate);

  if (flowRateNum < 0) {
    const balanceBigNumber = BigNumber.from(balance);
    const depletionTime = balanceBigNumber.div(BigNumber.from(Math.abs(flowRateNum).toString()));
    const depletionDate = new Date(balanceTimestamp * 1000 + depletionTime.toNumber() * 1000);
    const depletionDateString = `${depletionDate.toLocaleDateString()} ${depletionDate.toLocaleTimeString()}`;
    const unixTimestamp = Math.floor(depletionDate.getTime() / 1000);

    return (
        <>
            <Box display="inline">
                <Tooltip
                    title={
                        <React.Fragment>
                            <span>Timestamp: {unixTimestamp}</span>
                        </React.Fragment>
                    }
                    {...tooltipProps}
                    placement="right" arrow>
                    <span>{depletionDateString}</span>
                </Tooltip>
            </Box>
        </>
      );
  }

  return null;
};

export default DepletionDate;
