import { IndexUpdatedEvent } from "@superfluid-finance/sdk-core";
import { FC, ReactNode, useState } from "react";
import { DistributionsPageContent } from "../pages/[_network]/distributions/[_id]";
import { Network } from "../redux/networks";
import DetailsDialog from "./DetailsDialog";

export const DistributionDetailsDialog: FC<{
  distribution: IndexUpdatedEvent | undefined;
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
        <DistributionsPageContent {...props} />
      </DetailsDialog>
    </>
  );
};
