import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const createSfTheme = (mode: "light" | "dark" = "light") =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#00991F",
      },
      secondary: {
        main: "#4816E2",
      },
      error: {
        main: red.A400,
      },
      background:
        mode === "light"
          ? {
              default: "#F9F9F9",
            }
          : {},
    },
    components: {
      MuiButtonBase: {
        // The properties to apply
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application!
        },
      },
    },
    shape: {
      borderRadius: 7
    }
  });
