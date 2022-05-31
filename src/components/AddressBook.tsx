import {
  Box,
  Button,
  Card,
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
  Typography
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useViewerConnection, useViewerRecord } from '@self.id/framework'
import { useAppSelector } from "../redux/hooks";
import {
  addressBookSelectors,
  createEntryId,
  getEntryId,
} from "../redux/slices/addressBook.slice";
import { Network } from "../redux/networks";
import { ethers } from "ethers";
import useAddressBook from "../hooks/useAddressBook";


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
  const existingEntry = useAppSelector((state) =>
    addressBookSelectors.selectById(state, createEntryId(network, address))
  );

  const getInitialNameTag = () => existingEntry?.nameTag ?? "";
  const [nameTag, setNameTag] = useState<string>(getInitialNameTag());

  const [connection, connect, disconnect] = useViewerConnection()
  const { addAddressBookEntry, removeAddressBookEntry } = useAddressBook();
  const record = useViewerRecord('myAddressBook');

  // Fixes: https://github.com/superfluid-finance/superfluid-console/issues/21
  useEffect(() => {
    setNameTag(getInitialNameTag());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network, address, open]);

  const handleRemove = () => {
    if (existingEntry) {
      removeAddressBookEntry(existingEntry, getEntryId(existingEntry))
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
      addAddressBookEntry( entry )
    }
    handleClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
      <Box sx={{ pb: 1 }}>
        {connection.status !== 'connected' ? 
        (
        <Typography sx={{ p: 1, textAlign: 'center' }} variant="subtitle2" component="h3">
              Please Connect(top right) DID to Access Your Ceramic Address Book.
        </Typography>)

        :(<div>
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
            <Button data-cy={"address-cancel"} onClick={handleClose}>Cancel</Button>
          )}
          <Button data-cy={"address-save"} onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
        </div>)
      } 
      </Box>
    </Dialog>
  );
};
