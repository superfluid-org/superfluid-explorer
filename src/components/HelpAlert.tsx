import { FC, PropsWithChildren } from "react";
import { Paper, Stack, SxProps, Typography } from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

interface HelpAlertProps {
  sx?: SxProps;
  dataCy?: string;
}

const HelpAlert: FC<PropsWithChildren<HelpAlertProps>> = ({ sx,dataCy = {}, children }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: "transparent",
        p: 1.5,
        ...sx,
      }}
    >
      <Stack direction="row" columnGap={2} color="text.secondary">
        <HelpOutlineOutlinedIcon sx={{ fontSize: 22 }} />
        <Typography data-cy={dataCy} variant="body2" sx={{ pt: "1px" }}>
          {children}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default HelpAlert;
