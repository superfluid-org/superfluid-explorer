import {FC, useState} from "react";
import {
  Box,
  Button
} from "@mui/material";
import DetailsDialog from "./DetailsDialog";
import {Network} from "../redux/networks";
import { StreamPageContent } from "../pages/[_network]/streams/[_id]";

export const StreamDetailsDialog: FC<{ streamId: string, network: Network}> = (props) => {
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
        <Box>
        <StreamPageContent {...props} />
        </Box>
      </DetailsDialog>
    </Box>
  );
}
