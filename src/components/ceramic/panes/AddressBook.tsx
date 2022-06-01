import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { DataModel } from "@glazed/datamodel";
import { DIDDataStore } from "@glazed/did-datastore";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useAppSelector } from "../../../redux/hooks";
import { networksByChainId } from "../../../redux/networks";
import { addressBookSelectors } from "../../../redux/slices/addressBook.slice";
import styles from "../../../styles/ceramic.module.css";
import CeramicBook from "../components/CeramicBook";
import LocalBook from "../components/LocalBook";
import QuickInfo from "../components/QuickInfo";
import { ICeramicBook, IQuickInfo } from "../types";

const aliases = {
  definitions: {
    myAddressBook:
      "kjzl6cwe1jw149hy5kge1gqmp669kvn2c0xmnrr109wajqrwteg9mdmlalzaku4",
    DIDToAddressBook:
      "kjzl6cwe1jw147ff7ga8wa97ytivguq3cb2umpwkvdbuyydx7drpnaitmtvhx8r",
  },
  schemas: {
    AddressBook:
      "ceramic://k3y52l7qbv1frxycyoblevfvx12ws5t0iuqmrwiadl36p20ectvw9yuhs4g9uruv4",
    DIDToAddressBook:
      "ceramic://k3y52l7qbv1fry9pcj5rymkn9686buqtmaley7qujeyd4atyy2huvrzumsc9jc2kg",
  },
  tiles: {},
};

export default function AddressBook({
  ceramic,
  setLoading,
}: {
  ceramic: CeramicClient;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [dataStore, setDataStore] = useState<DIDDataStore>();
  const [editing, setEditing] = useState(false);
  const [ceramicBook, _setCeramicBook] = useState<ICeramicBook>();
  const [unlinkedWallets, setUnlinkedWallets] = useState<any>();
  const [quickInfo, setQuickInfo] = useState<IQuickInfo>();

  const addressBookEntries = useAppSelector((state: any) =>
    addressBookSelectors.selectAll(state)
  );

  useEffect(() => {
    // Connect to a Ceramic node

    // The `id` argument can be a stream ID (to load the latest version)
    // or a commit ID (to load a specific version)
    (async () => {
      const c = await TileDocument.load(
        ceramic,
        "kjzl6cwe1jw149hy5kge1gqmp669kvn2c0xmnrr109wajqrwteg9mdmlalzaku4"
      );
      console.log(c.content);
    })();
  });

  // Retrieves Ceramic Address Book Stream.
  useEffect(() => {
    if (ceramic) {
      setLoading(true);
      (async () => {
        const model = new DataModel({ ceramic, aliases });

        const dataStore = new DIDDataStore({ ceramic, model });

        setDataStore(dataStore);

        let data = await dataStore.get("myAddressBook");

        if (data) {
          _setCeramicBook(data);
        }

        setLoading(false);
      })();
    }
  }, [ceramic, setLoading, _setCeramicBook, setDataStore]);

  // Saves Changes to the Ceramic Address Book Stream
  const setCeramicBook = useCallback(
    async (data: ICeramicBook) => {
      if (dataStore) {
        console.log(data);
        setLoading(true);
        try {
          const c = await dataStore.set("myAddressBook", data);
          alert(c);
          _setCeramicBook(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          alert("couldn't save that something went wrong");
          console.log(error);
        }
      }
    },
    [dataStore, setLoading]
  );

  // Retrieves Local Storage Addresses not in Ceramic Address Book.
  useEffect(() => {
    if (ceramicBook !== undefined) {
      const ceramicWallets = getCeramicWallets();
      const localWallets = getLocalStorageWallets();

      // Local Storage Addresses not in Ceramic Address Book.
      const unlinkedWallets: {
        walletAddress: string;
        network: string;
        name: string;
      }[] = [];

      localWallets.forEach((localWallet) => {
        const inCeramic: boolean[] = [];

        ceramicWallets.forEach((ceramicWallet) => {
          if (
            ceramicWallet.walletAddress === localWallet.walletAddress &&
            ceramicWallet.network === localWallet.network
          ) {
            inCeramic.push(true);
          } else {
            inCeramic.push(false);
          }
        });

        if (!inCeramic.includes(true)) {
          unlinkedWallets.push(localWallet);
        }
      });

      setUnlinkedWallets(unlinkedWallets);
    }
  }, [ceramicBook]);

  // Sets a Quick Info on the Address Books state.
  useEffect(() => {
    if (ceramicBook !== undefined && unlinkedWallets !== undefined) {
      const ceramicWallets = getCeramicWallets();

      const data = {
        ceramicWalletsCnt: ceramicWallets.length,
        unlinkedWalletsCnt: unlinkedWallets.length,
      };

      setQuickInfo(data);
    }
  }, [ceramicBook, unlinkedWallets]);

  // Retrieves an array of all wallets in a Ceramic Address Book
  const getCeramicWallets = useCallback(() => {
    const ceramicWallets: any[] = [];

    ceramicBook?.contacts.forEach((contact) =>
      contact.wallets.forEach((wallet) => ceramicWallets.push(wallet))
    );

    return ceramicWallets;
  }, [ceramicBook]);

  // Retrieves the wallets stored in Local Storage

  const getLocalStorageWallets = useCallback(() => {
    const localWallets = addressBookEntries?.map((entry) => {
      const network = networksByChainId.get(entry.chainId)?.slugName!;
      const walletAddress = entry.address;
      const name = entry.nameTag;

      return { walletAddress, network, name };
    });

    return localWallets;
  }, []);

  return (
    <div className={styles.container}>
      <QuickInfo quickInfo={quickInfo!} />

      <CeramicBook
        editing={editing}
        setEditing={setEditing}
        ceramicBook={ceramicBook!}
        setCeramicBook={setCeramicBook}
      />

      <LocalBook
        editing={editing}
        setEditing={setEditing}
        unlinkedWallets={unlinkedWallets}
        ceramicBook={ceramicBook!}
        setCeramicBook={setCeramicBook}
      />
    </div>
  );
}
