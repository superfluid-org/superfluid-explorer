import { AddCircle } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import styles from "../../../styles/ceramic.module.css";
import { ICeramicBook } from "../types";

export default function LocalBookTile({
  editing,
  setEditing,
  ceramicBook,
  setCeramicBook,
  unlinkedWallet,
}: {
  editing: boolean;
  setEditing: Function;
  ceramicBook: ICeramicBook;
  setCeramicBook: Function;
  unlinkedWallet: any;
}) {
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [network, setNetwork] = useState<string>();

  // Loads data from the unlinked wallet object into state.
  useEffect(() => {
    if (unlinkedWallet !== null) {
      setName(unlinkedWallet.name);
      setAddress(unlinkedWallet.walletAddress);
      setNetwork(unlinkedWallet.network);
    }
  }, [unlinkedWallet]);

  const saveToCeramicBook = useCallback(() => {
    if (ceramicBook && name && address && network) {
      setEditing(true);
      const data = { ...ceramicBook };
      (data as any).contacts.push({
        name,
        wallets: [{ walletAddress: address, network }],
        avatar: "",
      });
      setEditing(false);
      setCeramicBook(data);
    }
  }, [ceramicBook, name, address, network]);

  return (
    <li className={styles.localBookTile}>
      <div>
        <p style={{ margin: 0, fontSize: "1.5rem", marginBottom: ".5rem" }}>
          {name}
        </p>
        <p style={{ margin: 0 }}>{address}</p>
      </div>

      <AddCircle onClick={() => saveToCeramicBook()} />
    </li>
  );
}
