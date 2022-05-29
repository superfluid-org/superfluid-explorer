import { FC, useCallback, useEffect, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import {
  EthereumAuthProvider,
  useViewerConnection,
  useViewerRecord,
} from "@self.id/framework";
import {
  AddressBookEntry,
  addressBookSelectors,
  addressBookSlice,
} from "../redux/slices/addressBook.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


type Contact = {
  name: string;
  wallets: Wallet[];
};
type Wallet = {
  network: string;
  walletAddress: string;
};

// Connect to Ceramic with injected wallet
async function connectWallet(connect: Function) {
  try {
    const accounts = await (global as any).ethereum.request({
      method: "eth_requestAccounts",
    });
    // @ts-ignore
    return connect(new EthereumAuthProvider(window.ethereum, accounts[0]));
  } catch (error) {
    console.log("Error connecting wallet", error);
  }
}

// Sync state with Ceramic. 
// Another approach would be to listen to changes in addressBookEntries but 
// wasn't able to make work in a good way.

export function useAdressBookSync() {
  // @ts-ignore
  const record = useViewerRecord("myAddressBook");
  const addressBookEntries = useAppSelector((state) =>
    addressBookSelectors.selectAll(state)
  );

  const update = useCallback(
    (contacts: Contact[]) => {
      if (record.set) {
        record
          .set({ total_cnt: contacts.length, contacts })
          .then(() => console.log("Synced with Ceramic"));
      } else {
        console.log("Unable to sync to Ceramic - check if signed in");
      }
    },
    [record]
  );

  const add = useCallback(
    async (entry: AddressBookEntry) => {
      // Add entry and convert into AddressBookSchema for Ceramic
      update(toCeramicSchema(addressBookEntries.concat(entry)));
    },
    [addressBookEntries, update]
  );
  const remove = useCallback(
    async (entry: AddressBookEntry) => {
      // Remove entry and convert into AddressBookSchema for Ceramic
      update(
        toCeramicSchema(
          addressBookEntries.filter(
            (e) => e.chainId !== entry.chainId && e.address !== entry.address
          )
        )
      );
    },
    [addressBookEntries, update]
  );
  return { add, remove };
}

export function useLoadAddressBook() {
  const [isSynced, setSynced] = useState(false);
  const [connection] = useViewerConnection();
  const dispatch = useAppDispatch();

  const addressBookEntries = useAppSelector((state) =>
    addressBookSelectors.selectAll(state)
  );

  // Fetch address book entries from Ceramic
  // @ts-ignore
  const record = useViewerRecord("myAddressBook");

  useEffect(() => {
    if (
      !isSynced &&
      !record.isLoading &&
      record.content &&
      connection.status === "connected"
    ) {
      // Adapt data to the format expected by the redux slice
      const contacts = fromCeramicSchema(record.content.contacts);
      console.log("Ceramic data found", contacts);
      if (contacts.length) {
        // Add to redux store
        dispatch(addressBookSlice.actions.entryUpsertMany(contacts));
      }
      setSynced(true);
    }
  }, [record, dispatch, connection, isSynced, addressBookEntries]);
}

const ConnectCeramicButton: FC<{}> = () => {
  useLoadAddressBook();
  const [autoConnect] = useState(() =>
    global.localStorage?.getItem("autoConnect")
  );
  const [connection, connect, disconnect] = useViewerConnection();
  const profile = useViewerRecord("basicProfile");

  // Automatically connect if user has been connected before
  useEffect(() => {
    if (autoConnect && connection.status === "idle") {
      connectWallet(connect);
    }
  }, [autoConnect, connect, connection]);

  const handleConnect = useCallback(async () => {
    const { id } = await connectWallet(connect);
    global.localStorage?.setItem("autoConnect", id);
  }, [connect]);

  const handleDisconnect = useCallback(async () => {
    disconnect();
    global.localStorage?.removeItem("autoConnect");
  }, [disconnect]);

  return (
    <Box p={2}>
      <Typography mb={2}>
        Connect Ceramic to store address book on your connected wallet.
      </Typography>
      <Box display="flex" justifyContent="center">
        {connection.status === "connecting" ? (
          <CircularProgress size={36} />
        ) : null}
        {connection.status === "connected" ? (
          <Button variant="outlined" onClick={handleDisconnect}>
            Disconnect{" "}
            {profile?.content?.name || truncate(connection.selfID.id)}
          </Button>
        ) : null}
        {connection.status === "idle" ? (
          <Button variant="outlined" onClick={handleConnect}>
            Connect
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};

function toCeramicSchema(entries: AddressBookEntry[]) {
  return Object.values(
    entries.reduce((contacts: any, x) => {
      const name = x.nameTag;
      const network = x.chainId.toString();
      const walletAddress = x.address;

      // Each stored name can have multiple wallets - one for each network + address
      const id = `${network}_${walletAddress}`;

      contacts[name] = contacts[name] || {};
      contacts[name].name = name;
      contacts[name].wallets = contacts[name].wallets || {};
      contacts[name].wallets[id] = { network, walletAddress };

      return contacts;
    }, {}) as { name: string; wallets: [] }[]
  ).map(({ name, wallets }) => ({ name, wallets: Object.values(wallets) }));
}

function fromCeramicSchema(contacts: Contact[]) {
  const contactsMap: { [key: string]: any } = {};
  contacts.forEach((contact: Contact) => {
    contact.wallets.forEach((wallet) => {
      const network = wallet.network;
      const address = wallet.walletAddress;
      const id = `${network}_${address}`;

      contactsMap[id] = {
        chainId: Number(network),
        address,
        nameTag: contact.name,
      };
    });
  });

  return Object.values(contactsMap);
}

// Copied from: https://stackoverflow.com/questions/4700226/i-want-to-truncate-a-text-or-line-with-ellipsis-using-javascript
export const truncate = (str = "", max = 13, sep = "...") => {
  const len = str.length;
  if (len > max) {
    const seplen = sep.length;

    if (seplen > max) {
      return str.substr(len - max);
    }

    const n = -0.5 * (max - len - seplen);
    const center = len / 2;
    const front = str.substr(0, center - n);
    const back = str.substr(len - center + n); // without second arg, will automatically go to end of line.

    return front + sep + back;
  }

  return str;
};

export default ConnectCeramicButton;
