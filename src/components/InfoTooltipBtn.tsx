import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { SxProps, Tooltip, TooltipProps } from "@mui/material";
import { FC } from "react";

interface InfoTooltipBtnProps {
  title: NonNullable<React.ReactNode>;
  size?: number | string;
  iconSx?: SxProps;
}

const InfoTooltipBtn: FC<InfoTooltipBtnProps> = ({
  title,
  size,
  iconSx = {},
}) => (
  <Tooltip title={title}>
    <HelpOutlineOutlinedIcon
      sx={{
        fontSize: size || 16,
        ml: 1,
        mb: 0.25,
        verticalAlign: "middle",
        ...iconSx,
      }}
    />
  </Tooltip>
);

export default InfoTooltipBtn;
