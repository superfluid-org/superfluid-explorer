import { Box, Tooltip, TooltipProps } from '@mui/material'
import { BigNumber, BigNumberish } from 'ethers'
import React from 'react'

interface DepletionDateProps {
  balance: BigNumberish
  balanceTimestamp: number
  flowRate: BigNumberish
  tooltipProps?: TooltipProps
}

const MAX_DATE_NUMBER = BigNumber.from(8640000000000000);

const DepletionDate: React.FC<DepletionDateProps> = ({
  balance,
  balanceTimestamp,
  flowRate,
  tooltipProps
}) => {
  const flowRateNum = parseFloat(flowRate.toString())

  if (flowRateNum < 0) {
    const balanceBigNumber = BigNumber.from(balance)
    const depletionTime = balanceBigNumber.div(BigNumber.from(Math.abs(flowRateNum).toString()))
    const depletionTimestampInMs = BigNumber.from(balanceTimestamp).mul(1000).add(depletionTime).mul(1000);
    const depletionDate = new Date(depletionTimestampInMs.lt(MAX_DATE_NUMBER) ? depletionTimestampInMs.toNumber() : MAX_DATE_NUMBER.toNumber());
    const depletionDateString = `${depletionDate.toLocaleDateString()} ${depletionDate.toLocaleTimeString()}`
    const unixTimestamp = Math.floor(depletionDate.getTime() / 1000)

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
            placement="right"
            arrow
          >
            <span>{depletionDateString}</span>
          </Tooltip>
        </Box>
      </>
    )
  }

  return null
}

export default DepletionDate
