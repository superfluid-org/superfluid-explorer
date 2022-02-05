import { FC, useState } from "react";
import {
  Box,
  Button
} from "@mui/material";
import DetailsDialog from "./DetailsDialog";
import { Network } from "../redux/networks";
import { IndexSubscriptionPageContent } from "../pages/[_network]/index-subscriptions/[_id]";

export const IndexSubscriptionDetailsDialog: FC<{ indexSubscriptionId: string, network: Network }> = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Details
      </Button>
      <DetailsDialog open={open} handleClose={handleClose}>
        <IndexSubscriptionPageContent {...props} />
      </DetailsDialog>
    </Box>
  );
}