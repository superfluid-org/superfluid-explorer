import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {  useViewerConnection } from '@self.id/framework'
import { useViewerRecord } from "@self.id/react";
import {
    AddressBookEntry,
    addressBookSelectors,
    addressBookSlice,
  } from "../redux/slices/addressBook.slice";
  
  
  type Contact = {
    name: string;
    wallets: Wallet[];
  };

  type Wallet = {
    network: string;
    walletAddress: string;
  };

  type AddressBook = {
    total_cnt: number,
    contacts: Contact[]
  }



  const useAddressBook = () => {

    const emptyAddressBook: AddressBook = {"total_cnt": 0,"contacts": []}
    const dispatch = useAppDispatch();
    const [connection] = useViewerConnection();
    const addressBook = useViewerRecord('myAddressBook');
    let localAddressBook = useAppSelector((state) =>
      addressBookSelectors.selectAll(state)
    );


    const addAddressBookEntry = (entry: Contact) => {
        let contacts: Contact[] = transformToCeramicData(localAddressBook.concat(entry));
        dispatch(addressBookSlice.actions.entryUpserted(entry))
        updateAddressBook(addressBook, contacts);
    }


    const removeAddressBookEntry = async ( entry: Contact,id) => {
        let contacts = transformToCeramicData(localAddressBook.filter(
            (c) => c.chainId !== entry.chainId && c.address !== entry.address
          ))
        await updateAddressBook(addressBook, contacts);
        dispatch(addressBookSlice.actions.entryRemoved(id));
    }


    const populateAddressBook = useCallback(async () => {
        if('content' in addressBook){
          await initializeAddressBook(addressBook);
          const contacts = transformFromCeramicData(addressBook.content.contacts)
          dispatch(addressBookSlice.actions.entryUpsertMany(contacts));
        }
      }, [addressBook])


    async function initializeAddressBook(addressBook: AddressBook){
        if(addressBook.content == null){
            await addressBook.set(emptyAddressBook)
        }
    }


    async function updateAddressBook(addressBook: AddressBook, contacts: Contact[]){
        await addressBook
        .set({ total_cnt: contacts.length, contacts })
        .then(() => console.log("Update Address Book"));

        populateAddressBook();

    }

    return {
      addAddressBookEntry,
      removeAddressBookEntry,
      populateAddressBook
    }
}


 function transformToCeramicData(entries: AddressBookEntry[]) {
    return Object.values(
      entries.reduce((contacts: any, c) => {
        const name = c.nameTag;
        const network = c.chainId.toString();
        const walletAddress = c.address;
  
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
  
  function transformFromCeramicData(contacts: Contact[]) {
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

  export default useAddressBook;