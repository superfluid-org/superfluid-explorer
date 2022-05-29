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
import { FC, useEffect, useState } from "react";
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

import ConnectCeramicButton, { useAdressBookSync } from "./ConnectCeramicButton";

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
      <Tooltip
        title={entry ? "Edit address book entry" : "Add to address book"}
      >
        <IconButton onClick={() => setIsDialogOpen(!isDialogOpen)}>
          {entry ? (
            <StarIcon {...iconProps} />
          ) : (
            <StarBorderIcon {...iconProps} />
          )}
        </IconButton>
      </Tooltip>
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
  const dispatch = useAppDispatch();
  const existingEntry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  );
  const addressBook = useAdressBookSync();

  const getInitialNameTag = () => existingEntry?.nameTag ?? "";
  const [nameTag, setNameTag] = useState<string>(getInitialNameTag());

  // Fixes: https://github.com/superfluid-finance/superfluid-console/issues/21
  useEffect(() => {
    setNameTag(getInitialNameTag());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network, address, open]);

  const handleRemove = () => {
    if (existingEntry) {
      const entry = getEntryId(existingEntry);
      dispatch(
        addressBookSlice.actions.entryRemoved(entry)
      );
      addressBook.remove(entry);
    }
    handleClose();
  };

  const handleSave = async () => {
    const nameTagTrimmed = nameTag.trim();
    // Only save non-empty names
    if (nameTagTrimmed) {
      const entry = {
        chainId: network.chainId,
        address: ethers.utils.getAddress(address),
        nameTag: nameTagTrimmed,
      }
      dispatch(
        addressBookSlice.actions.entryUpserted(entry)
      );
      addressBook.add(entry);
    }
    handleClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
      <Box sx={{ pb: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <DialogTitle>
            {existingEntry ? "Edit entry" : "Add entry"}
          </DialogTitle>
        </Box>
        <Divider />
        <ConnectCeramicButton />
        <DialogContent>
          <DialogContentText></DialogContentText>
          {/* Wrap in a form to enable save with enter instead of clicking button */}
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
            <Button data-cy={"address-cancel"} onClick={handleClose}>Cancel</Button>
          )}
          <Button data-cy={"address-save"} onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
