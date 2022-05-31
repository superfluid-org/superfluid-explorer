import {
  useViewerID,
  useViewerRecord,
  useViewerConnection,
  EthereumAuthProvider,
} from "@self.id/framework";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import type {
  ModelTypes,
  AddressBook as CeramicAddressBook,
} from "crypto-address-book";
import {
  AddressBookEntry,
  addressBookSelectors,
  addressBookSlice,
} from "../redux/slices/addressBook.slice";
import { useEffect, useState, useCallback } from "react";

const useConnect = () => {
  const connect = useViewerConnection()[1];
  return useCallback(async () => {
    // @ts-ignore
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // @ts-ignore
    return await connect(new EthereumAuthProvider(window.ethereum, accounts[0]));
  }, [connect]);
};

const useCeramicAddressBook = () => {
  const connect = useConnect();
  const [initialRender, setInitialRender] = useState(true);
  const dispatch = useAppDispatch();
  const [connection] = useViewerConnection();
  const viewerID = useViewerID();
  const localAddressBook = useAppSelector((state) =>
    addressBookSelectors.selectAll(state)
  );
  const { content, isLoading, isMutable } = useViewerRecord<
    ModelTypes,
    "myAddressBook"
  >("myAddressBook");

  // rerender if the user disconnect and re-connect again
  useEffect(() => {
    if (connection.status === "idle") {
      setInitialRender(true);
    }
  }, [connection.status]);

  // auto connect if the viewerID is not null
  // the viewerID is stored in local storage if the user is connected
  useEffect(() => {
    if (connection.status === "idle" && viewerID) {
      connect();
    }
  }, [connection.status, viewerID]);

  // run only on initial render.
  useEffect(() => {
    if (
      connection.status === "connected" &&
      !isLoading &&
      content &&
      initialRender
    ) {
      // convert the format of Ceramic data to Redux store accepted format
      const convertedCeramicAddressBook = convertFromCeramic(content);

      if (convertedCeramicAddressBook.length) {
        dispatch(
          addressBookSlice.actions.entryUpsertedMany(
            convertedCeramicAddressBook
          )
        );
      }

      setInitialRender(false);
    }
  }, [connection.status, isLoading, content, localAddressBook]);
};

function convertFromCeramic(ceramicAddressBook: CeramicAddressBook) {
  const convertedAddressBook: AddressBookEntry[] =
    ceramicAddressBook.contacts.flatMap((contact) => {
      return contact.wallets.map((wallet) => {
        return {
          address: wallet.walletAddress,
          chainId: Number(wallet.network),
          nameTag: contact.name,
        };
      });
    });

  return convertedAddressBook;
}

export default useCeramicAddressBook;
