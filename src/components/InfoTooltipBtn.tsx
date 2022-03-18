import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { SxProps, Tooltip, TooltipProps } from "@mui/material";
import { FC } from "react";
import AccountAddress from "./AccountAddress";
import SkeletonAddress from "./skeletons/SkeletonAddress";

interface InfoTooltipBtnProps {
  title: NonNullable<React.ReactNode>;
  size?: number | string;
  iconSx?: SxProps;
  dataCy?: string
}

const InfoTooltipBtn: FC<InfoTooltipBtnProps> = ({
  title,
  size,
  iconSx = {},
  dataCy,
}) => (
  <Tooltip data-cy={dataCy} title={title}>
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
