import React from "react";
import styles from "../../../styles/ceramic.module.css";

export default function InitConnect({
  init,
  setLoading,
}: {
  init: Function;
  setLoading: Function;
}) {
  return (
    <div className={styles.initConnect}>
      <img src="/ceramic.svg" style={{ height: 350 }} alt="ceramic dashboard logo" />
      <div className={styles.initConnectButtonGroup}>
        <h3
          onClick={() => {
            init();
            setLoading(true);
          }}
        >
          Connect Wallet
        </h3>
        <h4>Connect to access your ceramic address book</h4>
      </div>
    </div>
  );
}
