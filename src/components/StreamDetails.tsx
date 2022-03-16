import React, {
  DetailedReactHTMLElement,
  FC,
  ReactElement,
  useState,
} from "react";
import { Box, Button } from "@mui/material";
import DetailsDialog from "./DetailsDialog";
import { Network } from "../redux/networks";
import { StreamPageContent } from "../pages/[_network]/streams/[_id]";

export const StreamDetailsDialog: FC<{
  streamId: string;
  network: Network;
  children?: ReactElement<any>;
}> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {children ? (
        React.cloneElement(children as ReactElement<any>, {
          onClick: handleClickOpen,
        })
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          Details
        </Button>
      )}
      <DetailsDialog open={open} handleClose={handleClose}>
        <StreamPageContent {...props} />
      </DetailsDialog>
    </>
  );
};
