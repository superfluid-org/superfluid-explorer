import {
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps
} from '@mui/material'
import React, { FC, useMemo } from 'react'

import { timeAgo } from '../../utils/dateTime'

const TimeAgo: FC<{
  subgraphTime: number
  tooltipProps?: TooltipProps
  typographyProps?: TypographyProps
}> = ({ subgraphTime, tooltipProps, typographyProps }) => {
  const date = useMemo(() => new Date(subgraphTime * 1000), [subgraphTime])
  return (
    <>
      <Tooltip
        title={
          <React.Fragment>
            <span>{date.toLocaleString()}</span>
            <br />
            <span>Timestamp: {Math.floor(date.getTime() / 1000)}</span>
          </React.Fragment>
        }
        {...tooltipProps}
      >
        <Typography
          component="span"
          className="tooltip-underline"
          {...typographyProps}
        >
          {timeAgo(date.getTime())}
        </Typography>
      </Tooltip>
    </>
  )
}

export default TimeAgo
