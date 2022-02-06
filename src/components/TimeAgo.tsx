import { DateTimePicker } from "@mui/lab";
import { Tooltip, Typography } from "@mui/material";
import { TypographyProps } from "@mui/system";
import { FC, useMemo } from "react";
import { timeAgo } from "../utils/dateTime";

const TimeAgo: FC<{
  subgraphTime: number;
  typographyProps?: TypographyProps;
}> = ({ subgraphTime, typographyProps }) => {
  const date = useMemo(() => new Date(subgraphTime * 1000), [subgraphTime]);
  return (
    <Tooltip title={date.toLocaleString()}>
      <Typography {...(typographyProps ?? {})}>{timeAgo(date.getTime())}</Typography>
    </Tooltip>
  );
};

export default TimeAgo;