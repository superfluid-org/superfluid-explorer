import { FC, useEffect } from "react";
import {
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

const DetailsDialog: FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ open, handleClose, children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      handleClose();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      // fullScreen
      // anchor="right"
      open={open}
      onClose={handleClose}
      // TransitionComponent={Transition}
      PaperProps={{
        sx: {
          bgcolor: "background.default",
        },
      }}
      fullScreen={fullScreen}
      scroll="body"
      maxWidth="lg"
      fullWidth={true}
    >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
