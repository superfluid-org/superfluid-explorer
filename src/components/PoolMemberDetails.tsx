import React, { FC, ReactNode, useState } from "react";
import { Network } from "../redux/networks";
import DetailsDialog from "./DetailsDialog";
import { PoolMemberPageContent } from "../pages/[_network]/pool-subscriptions/[_id]";

export const PoolMemberDetailsDialog: FC<{
  poolMemberId: string;
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
        <PoolMemberPageContent {...props} />
      </DetailsDialog>
    </>
  );
};
