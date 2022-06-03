import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { DataModel } from "@glazed/datamodel";
import { DIDDataStore } from "@glazed/did-datastore";
import { Search as SearchIcon, CheckOutlined } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "../../../styles/ceramic.module.css";
import SearchResults from "../components/SearchResults";
import { aliases, API_URL } from "../constants";
import { ICeramicBook, IQuickInfo } from "../types";

export default function Search({ ceramic }: { ceramic: CeramicClient }) {
  const [did, setDid] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [externalCeramicBook, setExternalCeramicBook] =
    useState<ICeramicBook>();
  const [check, setCheck] = useState(false);

  const [dataStore, setDataStore] = useState<DIDDataStore>();
  const [ceramicBook, _setCeramicBook] = useState<ICeramicBook>();

  // Retrieves users Ceramic Address Book Stream.
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

  // Retrieves address book of input did
  useEffect(() => {
    (async () => {
      console.log(ceramic.did);
      setCheck(false);
      if (did?.length > 68) {
        const doc = await TileDocument.deterministic(ceramic, {
          // Did of the tile controller.
          controllers: [did],

          // Deployed model aliases definition for "myAddressBook".
          family:
            "kjzl6cwe1jw149hy5kge1gqmp669kvn2c0xmnrr109wajqrwteg9mdmlalzaku4",
        });

        if (doc.content) {
          setLoading(false);
          setCheck(true);
          setExternalCeramicBook(doc.content as ICeramicBook);
          console.log(doc.content);
          setTimeout(() => {
            setShowResult(true);
          }, 1500);
        } else {
          setLoading(false);
          alert("No address book found");
        }
      }
    })();
  }, [did]);

  useEffect(() => {
    if (did !== "") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [did]);

  if (externalCeramicBook) {
    return (
      <div className={styles.container}>
        <SearchResults
          did={did}
          ceramicBook={ceramicBook!}
          externalCeramicBook={externalCeramicBook}
          setCeramicBook={setCeramicBook}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.searchGroup}>
          <div className={styles.searchBar}>
            <SearchIcon />
            <input
              placeholder="Search any ceramic did address..."
              type="text"
              value={did}
              onChange={(e) => setDid(e.target.value)}
              style={{ background: "white", margin: "0 1rem", flex: 1 }}
            />
            {loading && <CircularProgress size={24} thickness={5} />}
            {check && <CheckOutlined color="success" />}
          </div>
          <h2>Read an Address Book Connected to a DID</h2>
        </div>
      </div>
    </div>
  );
}
