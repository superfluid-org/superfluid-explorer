import styles from "../../../styles/ceramic.module.css";
import { ICeramicBook } from "../types";
import CeramicBookTile from "./CeramicBookTile";

export default function CeramicBook({
  editing,
  setEditing,
  ceramicBook,
  setCeramicBook,
}: {
  editing: boolean;
  setEditing: any;
  ceramicBook: ICeramicBook;
  setCeramicBook: any;
}) {
  return (
    <div className={styles.ceramicBook}>
      <h3>Ceramic Address Book</h3>

      <ul>
        {ceramicBook?.contacts.map((contact, index) => {
          console.log(contact);
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
