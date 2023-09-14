import React, { FC, ReactNode, useState } from "react";
import { Network } from "../redux/networks";
import DetailsDialog from "./DetailsDialog";
import { PoolPageContent } from "../pages/[_network]/pools/[_id]";

export const PoolPublicationDetailsDialog: FC<{
  network: Network;
  id: string;
  children: (onClick: () => void) => ReactNode;
}> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {children(handleClickOpen)}
      <DetailsDialog open={open} handleClose={handleClose}>
        <PoolPageContent {...props} />
      </DetailsDialog>
    </>
  );
};
