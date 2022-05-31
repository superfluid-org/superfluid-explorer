import { useViewerRecord, useViewerConnection } from "@self.id/framework";
import { useAppSelector } from "../redux/hooks";
import type {
  ModelTypes,
  AddressBook as CeramicAddressBook,
} from "crypto-address-book";
import {
  addressBookSelectors,
  getEntryId,
} from "../redux/slices/addressBook.slice";
import type { AddressBookEntry } from "../redux/slices/addressBook.slice";

const useCeramicAddressBookTrigger = () => {
  let localAddressBook = useAppSelector((state) =>
    addressBookSelectors.selectAll(state)
  );

  const [connection] = useViewerConnection();

  const { isLoading, isMutable, set } = useViewerRecord<
    ModelTypes,
    "myAddressBook"
  >("myAddressBook");

  const triggerSet = async (store: AddressBookEntry[]) => {
    if (connection.status === "connected" && !isLoading && isMutable) {
      // convert format of Redux store data to Ceramic accepted format
      const contacts = convertToCeramic(store);

      set(contacts).catch((error) => {
        console.log(error);
      });
    }
  };

  const triggerRemoved = (entry: AddressBookEntry) => {
    triggerSet(
      localAddressBook.filter(
        (contact) => getEntryId(contact) !== getEntryId(entry)
      )
    );
  };

  const triggerUpserted = (entry: AddressBookEntry) => {
    const foundIndex = localAddressBook.findIndex(
      (contact) => getEntryId(contact) === getEntryId(entry)
    );
    if (foundIndex === -1) {
      // Insert
      localAddressBook.push(entry);
    } else {
      // Update
      localAddressBook[foundIndex] = entry;
    }

    triggerSet(localAddressBook);
  };

  return {
    triggerRemoved,
    triggerUpserted,
    triggerSet,
  };
};

function convertToCeramic(addressBook: AddressBookEntry[]) {
  const convertedAddressBook: CeramicAddressBook = {
    total_cnt: 0,
    contacts: [],
  };

  addressBook.map((entry) => {
    const foundContact = convertedAddressBook.contacts.find(
      (contact) => contact.name === entry.nameTag
    );

    const wallet = {
      walletAddress: entry.address,
      network: String(entry.chainId),
    };

    if (foundContact) {
      foundContact.wallets.push(wallet);
    } else {
      convertedAddressBook.contacts.push({
        name: entry.nameTag,
        wallets: [wallet],
      });
    }
  });

  convertedAddressBook.total_cnt = convertedAddressBook.contacts.length;
  return convertedAddressBook;
}

export default useCeramicAddressBookTrigger;
