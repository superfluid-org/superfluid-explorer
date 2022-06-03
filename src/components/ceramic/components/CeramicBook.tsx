import styles from "../../../styles/ceramic.module.css";
import { ICeramicBook } from "../types";
import CeramicBookTile from "./CeramicBookTile";
import CeramicBookTileSearch from "./CeramicBookTileSearch";

export default function CeramicBook({
  editing,
  setEditing,
  ceramicBook,
  setCeramicBook,
  externalCeramicBook,
  fromSearch,
}: {
  editing?: boolean;
  setEditing?: any;
  ceramicBook: ICeramicBook;
  setCeramicBook: any;
  externalCeramicBook?: ICeramicBook;
  fromSearch?: boolean;
}) {
  if (fromSearch) {
    return (
      <div className={styles.ceramicBook}>
        <ul>
          {externalCeramicBook?.contacts.map((contact, index) => {
            return (
              <CeramicBookTileSearch
                key={index}
                contact={contact}
                ceramicBook={ceramicBook}
                setCeramicBook={setCeramicBook}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.ceramicBook}>
      <h3>Ceramic Address Book</h3>
      <ul>
        {ceramicBook?.contacts.map((contact, index) => {
          return (
            <CeramicBookTile
              key={index}
              editing={editing}
              setEditing={setEditing}
              contact={contact}
              index={index}
              ceramicBook={ceramicBook}
              setCeramicBook={setCeramicBook}
            />
          );
        })}
      </ul>
    </div>
  );
}
