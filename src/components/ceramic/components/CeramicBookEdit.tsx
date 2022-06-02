import { useCallback, useEffect, useState } from "react";
import { AddCircle, Delete, Save } from "@mui/icons-material";
import styles from "../../../styles/ceramic.module.css";
import { ICeramicBook, IContacts } from "../types";

export default function CeramicBookEdit({
  contact,
  index,
  ceramicBook,
  setCeramicBook,
  getButton,
}: {
  contact: IContacts;
  index: number;
  ceramicBook: ICeramicBook;
  setCeramicBook: any;
  getButton: any;
}) {
  const [editableName, setEditableName] = useState<string>();
  const [editableAvatar, setEditableAvatar] = useState<string>();
  const [editableWallets, setEditableWallets] = useState<any[]>();
  const [editableTag, setEditableTags] = useState<string>();

  useEffect(() => {
    if (contact !== null) {
      setEditableName(contact.name);
      setEditableAvatar(contact.avatar);
      setEditableWallets([...contact.wallets]);
      setEditableTags(contact.tags?.length >= 1 ? contact.tags.join(", ") : "");
    }
  }, [contact]);

  const addWallet = useCallback(() => {
    if (editableWallets) {
      const data = editableWallets;
      data.push({ walletAddress: "", network: "" });
      setEditableWallets([...data]);
    }
  }, [editableWallets, setEditableWallets]);

  const updateWallet = useCallback(
    ({ index, id, value }: { index: number; id: string; value: any }) => {
      if (editableWallets) {
        if (id === "wallet") {
          const data = editableWallets;
          data[index].walletAddress = value;
          setEditableWallets([...data]);
        } else if (id === "network") {
          const data = editableWallets;
          data[index].network = value;
          setEditableWallets([...data]);
        }
      }
    },
    [editableWallets, setEditableWallets]
  );

  const deleteWallet = useCallback(
    (index: number) => {
      if (editableWallets) {
        const data = editableWallets;
        data.splice(index, 1);
        setEditableWallets([...data]);
      }
    },
    [editableWallets, setEditableWallets]
  );

  // Saves the contact
  const saveContact = useCallback(() => {
    const data = { ...ceramicBook };

    const contacts = [...data.contacts];
    const contact = {
      name: editableName,
      wallets: editableWallets,
      avatar: editableAvatar,
      tags:
        editableTag && editableTag.length >= 1
          ? editableTag?.split(", ")
          : [""],
      data: {},
    };

    (contacts as any).splice(index, 1, contact);

    data.contacts = contacts;
    setCeramicBook(data);
  }, [
    ceramicBook,
    setCeramicBook,
    editableName,
    editableWallets,
    editableAvatar,
    editableTag,
  ]);

  // Deletes the contact
  const deleteContact = useCallback(() => {
    const data = { ...ceramicBook };

    const contacts = [...data.contacts];
    contacts.splice(index, 1);

    data.contacts = contacts;
    setCeramicBook(data);
  }, [ceramicBook, setCeramicBook]);

  return (
    <li className={styles.ceramicTileEditable}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginBottom: "2rem" }}></div>
        {getButton()}
      </div>

      <div className={styles.ceramicTileTextField}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={editableName}
          onChange={(e) => setEditableName(e.target.value)}
        />
      </div>

      <div className={styles.ceramicTileTextField}>
        <label htmlFor="avatar">Image Url</label>
        <input
          type="text"
          id="avatar"
          value={editableAvatar}
          onChange={(e) => setEditableAvatar(e.target.value)}
        />
      </div>

      <div className={styles.ceramicTileAddressField}>
        <label htmlFor="wallet">Wallets</label>
        <div className={styles.ceramicTilesAddressFeild_wrapper}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 .5rem",
            }}
          >
            <p
              style={{
                width: "29ch",
              }}
            >
              Address
            </p>
            <p>Network</p>
          </div>
          {editableWallets?.map(({ walletAddress, network }, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: ".5rem",
                  borderTop: "2px solid #A8A8A8",
                }}
                key={index + "editable"}
              >
                <input
                  style={{ width: "27ch" }}
                  value={walletAddress}
                  type="text"
                  id="wallet"
                  onChange={(e) =>
                    updateWallet({
                      index,
                      id: "wallet",
                      value: e.target.value,
                    })
                  }
                />
                <input
                  style={{ width: "12ch" }}
                  value={network}
                  type="text"
                  id="network"
                  onChange={(e) =>
                    updateWallet({
                      index,
                      id: "network",
                      value: e.target.value,
                    })
                  }
                />
                <Delete onClick={() => deleteWallet(index)} />
              </div>
            );
          })}
          <div style={{ margin: ".5rem" }}>
            <AddCircle onClick={() => addWallet()} />
          </div>
        </div>
      </div>

      <div className={styles.ceramicTileTextField}>
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          id="tags"
          value={editableTag}
          onChange={(e) => setEditableTags(e.target.value)}
        />
      </div>

      <div onClick={() => saveContact()} className={styles.ceramicTileSave}>
        Save Edit
      </div>
      <div onClick={() => deleteContact()} className={styles.ceramicTileDelete}>
        Hold to Delete Address
      </div>
    </li>
  );
}
