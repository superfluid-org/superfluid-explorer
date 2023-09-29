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

const MAX_DATE_NUMBER = BigNumber.from(8640000000000000);

const DepletionDate: React.FC<DepletionDateProps> = ({ balance, balanceTimestamp, flowRate, tooltipProps }) => {
    const flowRateNum = parseFloat(flowRate);

    if (flowRateNum < 0) {
        const balanceBigNumber = BigNumber.from(balance);
        const depletionTime = balanceBigNumber.div(BigNumber.from(Math.abs(flowRateNum)));

        const depletionTimestamp = BigNumber.from(balanceTimestamp).mul(1000).add(depletionTime).mul(1000);

        const depletionDate = new Date(depletionTimestamp.gt(MAX_DATE_NUMBER) ? depletionTimestamp.toNumber() : MAX_DATE_NUMBER.toNumber());
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
