import React, { FC, ReactNode, useState } from "react";
import { IndexSubscriptionPageContent } from "../pages/[_network]/index-subscriptions/[_id]";
import { Network } from "../redux/networks";
import DetailsDialog from "./DetailsDialog";

export const IndexSubscriptionDetailsDialog: FC<{
  indexSubscriptionId: string;
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
        <IndexSubscriptionPageContent {...props} />
      </DetailsDialog>
    </>
  );
};
