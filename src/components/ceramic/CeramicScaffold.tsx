import { EthereumAuthProvider, ThreeIdConnect } from "@3id/connect";
import { getResolver } from "@ceramicnetwork/3id-did-resolver";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { DID } from "dids";
import { useCallback, useEffect, useState } from "react";

import styles from "../../styles/ceramic.module.css";
import InitConnect from "./components/InitConnect";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import { API_URL } from "./constants";
import AddressBook from "./panes/AddressBook";
import Help from "./panes/Help";
import Profile from "./panes/Profile";
import Search from "./panes/Search";

export default function CeramicScaffold({
  showCeramicModal,
  setShowCeramicModal,
}: {
  showCeramicModal: any;
  setShowCeramicModal: any;
}) {
  const [activeSelection, setActiveSelection] = useState("AddressBook");
  const [ethereum, setEthereum] = useState();
  const [ethAddress, setEthAddress] = useState();
  const [ceramic, setCeramic] = useState<CeramicClient>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (ethereum && ethAddress) {
        setLoading(true);
        (async () => {
          const threeID = new ThreeIdConnect();

          // Create an EthereumAuthProvider using the Ethereum provider and requested account
          const authProvider = new EthereumAuthProvider(ethereum, ethAddress);

          // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
          // generate the authentication secret
          await threeID.connect(authProvider);

          // Connect to a Ceramic node
          const ceramic = new CeramicClient(API_URL);

          const did = new DID({
            provider: threeID.getDidProvider(),
            resolver: {
              ...getResolver(ceramic),
            },
          });

          // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
          // authentication flow using 3ID Connect and the Ethereum provider
          did
            .authenticate()
            .then(() => {
              // The Ceramic client can create and update streams using the authenticated DID
              ceramic.did = did;

              setCeramic(ceramic);

              setLoading(false);
            })
            .catch((e) => {
              setLoading(false);
              alert("sometihng went wrong please connect again");
              console.log(e);
            });
        })();
      }
    } catch (e) {
      setLoading(false);
      alert("sometihng went wrong please connect again");
      console.log(e);
    }
  }, [ethereum, ethAddress]);

  // Initializes the app with etheruem.
  const init = useCallback(() => {
    if ((window as any).ethereum) {
      setEthereum((window as any).ethereum);
      (async () => {
        try {
          const addresses = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          setEthAddress(addresses[0]);
        } catch (e) {
          alert(e);
        }
      })();
    }
  }, [setEthAddress]);

  // Retrieves the View Pane of the Users Active Selection.
  const getActivePane = useCallback(() => {
    if (ceramic) {
      let pane: JSX.Element;

      switch (activeSelection) {
        case "AddressBook":
          pane = <AddressBook setLoading={setLoading} ceramic={ceramic} />;
          break;

        case "Search":
          pane = <Search ceramic={ceramic} />;
          break;

        case "Profile":
          pane = <Profile ceramic={ceramic} />;
          break;

        case "Help":
          pane = <Help />;
          break;

        default:
          pane = <AddressBook setLoading={setLoading} ceramic={ceramic} />;
          break;
      }

      return pane;
    }
  }, [activeSelection, ceramic, setLoading]);

  const main = useCallback(() => {
    return (
      <>
        <Nav
          activeSelection={activeSelection}
          setActiveSelection={setActiveSelection}
        />

        {getActivePane()}
      </>
    );
  }, [getActivePane, activeSelection, setActiveSelection]);

  if (!showCeramicModal) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000000ba",
        display: "grid",
        placeItems: "center",
      }}
      onClick={() => setShowCeramicModal(false)}
    >
      <div
        className={styles.scaffoldContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {loading && <Loading />}
        {ceramic ? main() : <InitConnect init={init} setLoading={setLoading} />}
      </div>
    </div>
  );
}
