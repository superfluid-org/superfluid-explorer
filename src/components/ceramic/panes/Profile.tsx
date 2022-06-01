import { CeramicClient } from "@ceramicnetwork/http-client";
import React from "react";
import styles from "../../../styles/ceramic.module.css";

export default function Profile({ ceramic }: { ceramic: CeramicClient }) {
  return <div className={styles.container}>Profile</div>;
}
