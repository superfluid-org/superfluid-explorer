import React, { FC, ReactNode, useState } from "react";
import { StreamPageContent } from "../pages/[_network]/streams/[_id]";
import { Network } from "../redux/networks";
import DetailsDialog from "./DetailsDialog";

export const StreamDetailsDialog: FC<{
  streamId: string;
  network: Network;
  children: (onClick: () => void) => ReactNode;
}> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {children(handleClickOpen)}
      <DetailsDialog open={open} handleClose={handleClose}>
        <StreamPageContent {...props} />
      </DetailsDialog>
    </>
  );
};
