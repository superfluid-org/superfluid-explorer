import { Button } from "@mui/material";
import React, { FC, ReactElement, useState } from "react";
import { IndexPageContent } from "../pages/[_network]/indexes/[_id]";
import { Network } from "../redux/networks";
import DetailsDialog from "./DetailsDialog";

export const IndexPublicationDetailsDialog: FC<{
  network: Network;
  indexId: string;
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
        <IndexPageContent {...props} />
      </DetailsDialog>
    </>
  );
};
