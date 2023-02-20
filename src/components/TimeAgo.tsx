import React from "react";
import { DateTimePicker } from "@mui/lab";
import {
  Tooltip,
  TooltipProps,
  Typography,
  TypographyTypeMap,
} from "@mui/material";
import { TypographyProps } from "@mui/system";
import { FC, useMemo } from "react";
import { timeAgo } from "../utils/dateTime";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const TimeAgo: FC<{
  subgraphTime: number;
  tooltipProps?: TooltipProps;
  typographyProps?: TypographyProps;
}> = ({ subgraphTime, tooltipProps, typographyProps }) => {
  const date = useMemo(() => new Date(subgraphTime * 1000), [subgraphTime]);
  return (
    <>
    <Tooltip title={
      <React.Fragment>
        <span>{date.toLocaleString()}</span>
        <br/>
        <span>Timestamp: {Math.floor(date.getTime() / 1000)}</span>
      </React.Fragment>} {...tooltipProps}>
      <Typography component="span" {...typographyProps}>
        {timeAgo(date.getTime())}
      </Typography>
    </Tooltip>
    </>
  );
};

export default TimeAgo;
