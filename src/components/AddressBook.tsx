import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  SvgIconProps,
  TextField,
  Tooltip,
} from "@mui/material";
import { FC, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addressBookSelectors,
  addressBookSlice,
  createEntryId,
  getEntryId,
} from "../redux/slices/addressBook.slice";
import { Network } from "../redux/networks";
import { ethers } from "ethers";

export const AddressBookButton: FC<{
  network: Network;
  address: string;
  iconProps?: SvgIconProps;
}> = ({ network, address, iconProps }) => {
  const entry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsDialogOpen(!isDialogOpen)}>
        {entry ? (
          <Tooltip title="Edit address book entry">
            <StarIcon {...iconProps} />
          </Tooltip>
        ) : (
          <Tooltip title="Add to address book">
            <StarBorderIcon {...iconProps} />
          </Tooltip>
        )}
      </IconButton>
      <AddressBookDialog
        network={network}
        address={address}
        open={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export const AddressBookDialog: FC<{
  network: Network;
  address: string;
  open: boolean;
  handleClose: () => void;
}> = ({ network, address, open, handleClose }) => {
  const getInitialNameTag = () => existingEntry?.nameTag ?? "";

  const existingEntry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  );
  const [nameTag, setNameTag] = useState<string>(getInitialNameTag());

  const dispatch = useAppDispatch();

  const handleCloseWrapped = () => {
    handleClose();
    setNameTag(getInitialNameTag());
  };

  const handleRemove = () => {
    handleClose();
    setNameTag("");
    if (existingEntry) {
      dispatch(
        addressBookSlice.actions.entryRemoved(getEntryId(existingEntry))
      );
    }
  };

  const handleSave = () => {
    handleClose();
    dispatch(
      addressBookSlice.actions.entryUpserted({
        chainId: network.chainId,
        address: ethers.utils.getAddress(address),
        nameTag: nameTag,
      })
    );
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleCloseWrapped}>
      <Box sx={{ pb: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <DialogTitle>
            {existingEntry ? "Edit entry" : "Add entry"}
          </DialogTitle>
        </Box>
        <Divider />
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name Tag"
            type="text"
            fullWidth
            variant="standard"
            value={nameTag}
            onChange={(event) => setNameTag(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {existingEntry ? (
            <Button data-cy={"address-remove"} onClick={handleRemove} variant="outlined">
              Remove entry
            </Button>
          ) : (
            <Button data-cy={"address-cancel"} onClick={handleCloseWrapped}>Cancel</Button>
          )}
          <Button data-cy={"address-save"} onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
