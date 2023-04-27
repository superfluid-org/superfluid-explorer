import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { networksByChainId } from "../redux/networks";
import {
  changeEtherDecimalPlaces,
  changeStreamGranularity,
  changeThemePreference,
  toggleDisplayedTestnets,
} from "../redux/slices/appPreferences.slice";
import InfoTooltipBtn from "./InfoTooltipBtn";
import NetworkDisplay from "./NetworkDisplay";

const Heading = styled(Typography)(({ theme }) => ({
  margin: "20px 0 10px",
  color: theme.palette.grey[600],
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(11),
  textTransform: "uppercase",
  letterSpacing: ".08rem",
}));

const IconToggleButton = styled(ToggleButton)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  "& > *": {
    marginRight: "8px",
  },
});

// Inspired by solution in MUI documentaiton: https://github.com/mui/material-ui/blob/5b0d0c343c9b195e7328cc20461c9adc1f5ac02d/docs/src/modules/components/AppSettingsDrawer.js
const SettingsDrawer: FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const currentThemePreference = useAppSelector(
    (state) => state.appPreferences.themePreference
  );
  const currentStreamGranularity = useAppSelector(
    (state) => state.appPreferences.streamGranularity
  );
  const currentEtherDecimalPlaces = useAppSelector(
    (state) => state.appPreferences.etherDecimalPlaces
  );

  const currentDisplayedTestNets = useAppSelector(
    (state) =>
      sortBy(
        Object.entries(state.appPreferences.displayedTestNets),
        ([chainId]) => networksByChainId.get(Number(chainId))?.displayName
      ),
    isEqual
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="body1" fontWeight="500">
          Settings
        </Typography>
        <IconButton
          color="inherit"
          onClick={onClose}
          edge="end"
          data-cy="settings-close"
        >
          <CloseIcon color="primary" fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ pl: 2, pr: 2 }}>
        <Heading gutterBottom>Color Scheme</Heading>
        <ToggleButtonGroup
          exclusive
          value={currentThemePreference}
          color="primary"
          onChange={(
            _event,
            newThemePreference: "light" | "system" | "dark"
          ) => {
            if (!newThemePreference) {
              return;
            }
            dispatch(changeThemePreference(newThemePreference));
          }}
          aria-labelledby="settings-mode"
          fullWidth
        >
          <IconToggleButton value="light">
            <LightModeIcon fontSize="small" />
            Light
          </IconToggleButton>
          <IconToggleButton value="system">
            <SettingsBrightnessIcon fontSize="small" />
            System
          </IconToggleButton>
          <IconToggleButton value="dark">
            <DarkModeOutlinedIcon fontSize="small" />
            Dark
          </IconToggleButton>
        </ToggleButtonGroup>

        <Heading gutterBottom>
          Stream Granularity
          <InfoTooltipBtn
            dataCy={"stream-granularity-tooltip"}
            title="Representation of calculated stream flow in selected time span."
          />
        </Heading>
        <ToggleButtonGroup
          data-cy={"stream-granularity-button-group"}
          exclusive
          value={currentStreamGranularity}
          color="primary"
          onChange={(
            _event,
            newStreamGranularity:
              | "second"
              | "minute"
              | "hour"
              | "day"
              | "week"
              | "month"
          ) => {
            if (!newStreamGranularity) {
              return;
            }
            dispatch(changeStreamGranularity(newStreamGranularity));
          }}
          fullWidth
        >
          <IconToggleButton value="second">Second</IconToggleButton>
          <IconToggleButton value="minute">Minute</IconToggleButton>
          <IconToggleButton value="hour">Hour</IconToggleButton>
          <IconToggleButton value="day">Day</IconToggleButton>
          <IconToggleButton value="week">Week</IconToggleButton>
          <IconToggleButton value="month">30 Day</IconToggleButton>
        </ToggleButtonGroup>

        <Heading gutterBottom>Ether Decimal Places</Heading>
        <ToggleButtonGroup
          data-cy={"ether-decimal-button-group"}
          exclusive
          value={currentEtherDecimalPlaces.toString()}
          color="primary"
          onChange={(_event, newEtherDecimalPlaces: "18" | "9" | "5" | "0") => {
            if (!newEtherDecimalPlaces) {
              return;
            }
            dispatch(
              changeEtherDecimalPlaces(
                Number(newEtherDecimalPlaces) as 18 | 9 | 5 | 0
              )
            );
          }}
          fullWidth
        >
          <IconToggleButton value="18">18</IconToggleButton>
          <IconToggleButton value="9">9</IconToggleButton>
          <IconToggleButton value="5">5</IconToggleButton>
          <IconToggleButton value="0">Smart</IconToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ pl: 2, pr: 2 }}>
        <Heading gutterBottom display="flex" alignItems="flex-end">
          Display Testnets
        </Heading>
        <FormGroup>
          {currentDisplayedTestNets.map(([chainId, isDisplayed]) => {
            const numericChainId = Number(chainId);
            const network = networksByChainId.get(numericChainId)!;
            return (
              <FormControlLabel
                data-cy={`testnet-switch-${network.slugName}`}
                data-cy-state={isDisplayed ? "on" : "off"}
                key={chainId}
                control={<Switch checked={isDisplayed} />}
                onChange={() =>
                  dispatch(toggleDisplayedTestnets(numericChainId))
                }
                label={<NetworkDisplay network={network} />}
              />
            );
          })}
        </FormGroup>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
