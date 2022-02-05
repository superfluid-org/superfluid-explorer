import {FC, useState} from "react";
import {
  Box,
  Button} from "@mui/material";
import DetailsDialog from "./DetailsDialog";
import {Network} from "../redux/networks";
import { IndexPageContent } from "../pages/[_network]/indexes/[_id]";

export const IndexPublicationDetailsDialog: FC<{  network: Network;
  indexId: string}> = (props) => {
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
        <IndexPageContent {...props} />
      </DetailsDialog>
    </Box>
  );
}