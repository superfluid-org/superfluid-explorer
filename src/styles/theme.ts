import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

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
      info: {
        main: "rgba(0, 0, 0, 0.87)",
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
      MuiTable: {
        styleOverrides: {
          root: {
            borderRadius: "7px",
            border:
              mode === "light"
                ? "1px solid rgba(224, 224, 224, 1)"
                : "1px solid rgba(81, 81, 81, 1)",
            borderCollapse: "initial",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          body: {
            padding: "0 16px",
            height: "48px",
          },
        },
      },
    },
    shape: {
      borderRadius: 7,
    },
  });
