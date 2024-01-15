import { Tooltip } from '@mui/material'
import Decimal from 'decimal.js'
import { FC } from 'react'

import { usePoolPercentage } from '../../hooks/usePoolPercentage'

export const PoolPercentage: FC<{
  totalUnits: Decimal | string
  individualUnits: Decimal | string
}> = ({ totalUnits, individualUnits }) => {
  const { percentageDecimal, percentageString } = usePoolPercentage(
    totalUnits,
    individualUnits
  )

  return (
    <Tooltip
      title={`${individualUnits} units out of ${totalUnits}`}
      className="tooltip-underline"
    >
      <span className="tooltip-underline">{percentageString}</span>
    </Tooltip>
  )
}
