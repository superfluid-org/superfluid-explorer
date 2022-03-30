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

const TimeAgo: FC<{
  subgraphTime: number;
  tooltipProps?: TooltipProps;
  typographyProps?: TypographyProps;
}> = ({ subgraphTime, tooltipProps, typographyProps }) => {
  const date = useMemo(() => new Date(subgraphTime * 1000), [subgraphTime]);
  return (
    <Tooltip title={date.toLocaleString()} {...tooltipProps}>
      <Typography component="span" {...typographyProps}>
        {timeAgo(date.getTime())}
      </Typography>
    </Tooltip>
  );
};

export default TimeAgo;
