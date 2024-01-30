import { Box } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { BigNumber, BigNumberish } from 'ethers'
import { FC } from 'react'

import { useAppSelector } from '../../redux/hooks'
import { streamGranularityInSeconds } from '../../redux/slices/appPreferences.slice'
import EtherFormatted from './EtherFormatted'

const FlowRate: FC<{
  flowRate: BigNumberish
}> = ({ flowRate }) => {
  const streamGranularity = useAppSelector(
    (state) => state.appPreferences.streamGranularity
  )

  if (flowRate === '0') {
    return <Box component="span">0</Box>
  }

  const flowRateBigNumber = BigNumber.from(flowRate)
  const flowRateConverted = flowRateBigNumber
    .mul(streamGranularityInSeconds[streamGranularity])
    .toString()

  return (
    <Tooltip
      data-cy={'flowrate'}
      title={`${flowRate} wei/s`}
      placement="bottom"
      arrow
    >
      <Box component="span" className="tooltip-underline">
        <EtherFormatted wei={flowRateConverted} />/{streamGranularity}
      </Box>
    </Tooltip>
  )
}

export default FlowRate
