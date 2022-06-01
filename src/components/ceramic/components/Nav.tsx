import React, { useState } from "react";
import styles from "../../../styles/ceramic.module.css";
import { Help, Search, AccountCircle, Book } from "@mui/icons-material";

export default function Nav({
  activeSelection,
  setActiveSelection,
}: {
  activeSelection: any;
  setActiveSelection: any;
}) {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li
          className={
            activeSelection === "AddressBook"
              ? styles.navSelected
              : styles.navUnselected
          }
          onClick={() => setActiveSelection("AddressBook")}
        >
          <Book />
        </li>
        <li
          className={
            activeSelection === "Search"
              ? styles.navSelected
              : styles.navUnselected
          }
          onClick={() => setActiveSelection("Search")}
        >
          <Search />
        </li>
        <li
          className={
            activeSelection === "Profile"
              ? styles.navSelected
              : styles.navUnselected
          }
          onClick={() => setActiveSelection("Profile")}
        >
          <AccountCircle />
        </li>
        <li style={{ flex: 1 }}></li>
        <li
          className={
            activeSelection === "Help"
              ? styles.navSelected
              : styles.navUnselected
          }
          onClick={() => setActiveSelection("Help")}
        >
          <Help />
        </li>
      </ul>
    </div>
  );
}
