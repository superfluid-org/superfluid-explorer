import { AddCircle } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import styles from "../../../styles/ceramic.module.css";
import ellipsisAddress from "../../../utils/ellipsisAddress";
import { ICeramicBook, IContacts } from "../types";

export default function CeramicBookTileSearch({
  contact,
  ceramicBook,
  setCeramicBook,
}: {
  contact: IContacts;
  ceramicBook: ICeramicBook;
  setCeramicBook: Function;
}) {
  const [opened, setOpened] = useState(false);

  const [name, setName] = useState<string>();
  const [avatar, setAvatar] = useState<string>();
  const [wallets, setWallets] = useState<any[]>();
  const [tags, setTags] = useState<string[]>();

  // Loads data from the contact object into state.
  useEffect(() => {
    if (contact !== null) {
      setName(contact.name);
      setAvatar(contact.avatar);
      setWallets([...contact.wallets]);
      setTags(contact.tags);
    }
  }, [contact]);

  const saveToCeramicBook = useCallback(() => {
    if (ceramicBook && contact) {
      const data = { ...ceramicBook };
      (data as any).contacts.push(contact);
      setCeramicBook(data);
    }
    alert("added to your address book");
  }, [ceramicBook, contact]);

  const svgNoImg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="45"
      fill="none"
      viewBox="0 0 46 45"
    >
      <rect width="45" height="45" x=".5" fill="#D9D9D9" rx="7" />
      <path
        fill="#323232"
        fillRule="evenodd"
        d="M28.294 17.791A5.274 5.274 0 0 1 23 23.083a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 23 12.5a5.273 5.273 0 0 1 5.294 5.291ZM23 32.5c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425 0 2.721-3.685 3.401-8 3.401Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <li className={opened ? styles.accordionItemOpened : styles.accordionItem}>
      <div onClick={() => setOpened(!opened)}>
        <div
          style={{
            display: "flex",
            alignItems: "start",
          }}
        >
          {avatar ? (
            <img width={100} src={avatar} alt={"image of" + name} />
          ) : (
            svgNoImg
          )}
          <div>
            <h3 style={{ margin: "0", marginLeft: "0.5rem" }}>{name}</h3>
          </div>
          <div style={{ flex: 1 }}></div>
          <AddCircle
            onClick={() => {
              saveToCeramicBook();
            }}
          />
        </div>
      </div>
      <div className={styles.accordionItemInner}>
        <div className={styles.accordionItemContent}>
          <div>
            <h3>Wallets</h3>
            <div className={styles.accordionWallet}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 .5rem",
                }}
              >
                <p
                  style={{
                    width: "20ch",

                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                  }}
                >
                  Address
                </p>
                <p
                  style={{
                    width: "7ch",

                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                  }}
                >
                  Network
                </p>
              </div>
              <div>
                {wallets?.map(({ walletAddress, network }, index) => {
                  return (
                    <div
                      key={walletAddress + index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: ".5rem",
                        borderTop: "2px solid #A8A8A8",
                      }}
                    >
                      <p style={{ width: "20ch", margin: 0 }}>
                        {ellipsisAddress(walletAddress)}
                      </p>
                      <p style={{ width: "14ch", margin: 0 }}>{network}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h3>Tags</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {tags && tags.length >= 1 ? (
                tags.map((tag, index) => (
                  <div
                    key={tag + index}
                    style={{
                      background: "#D9D9D9",
                      borderRadius: "23px",
                      padding: "0.2rem 0.5rem",
                      marginRight: "0.2rem",
                    }}
                  >
                    {tag}
                  </div>
                ))
              ) : (
                <p style={{ margin: "0px", fontSize: "10px" }}>No tags</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
