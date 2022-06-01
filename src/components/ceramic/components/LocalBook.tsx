import React from "react";
import LocalBookTile from "./LocalBookTile";
import styles from "../../../styles/ceramic.module.css";
import { ICeramicBook } from "../types";

export default function LocalBook({
  editing,
  setEditing,
  ceramicBook,
  setCeramicBook,
  unlinkedWallets,
}: {
  editing: boolean;
  setEditing: Function;
  ceramicBook: ICeramicBook;
  setCeramicBook: Function;
  unlinkedWallets: any[];
}) {
  return (
    <div className={styles.localBook}>
      <h3>Local Address Book</h3>
      <ul>
        {unlinkedWallets &&
          unlinkedWallets.map((unlinkedWallet: any) => (
            <LocalBookTile
              editing={editing}
              setEditing={setEditing}
              ceramicBook={ceramicBook}
              setCeramicBook={setCeramicBook}
              unlinkedWallet={unlinkedWallet}
            />
          ))}
      </ul>
    </div>
  );
}
