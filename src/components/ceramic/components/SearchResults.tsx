import React from "react";
import ellipsisAddress from "../../../utils/ellipsisAddress";
import { ICeramicBook } from "../types";
import CeramicBook from "./CeramicBook";

export default function SearchResults({
  did,
  ceramicBook,
  setCeramicBook,
  externalCeramicBook,
}: {
  did: string;
  ceramicBook: ICeramicBook;
  setCeramicBook: Function;
  externalCeramicBook: ICeramicBook;
}) {
  return (
    <div>
      <h2>DID:{ellipsisAddress(did)}</h2>
      <CeramicBook
        ceramicBook={ceramicBook!}
        setCeramicBook={setCeramicBook}
        externalCeramicBook={externalCeramicBook}
        fromSearch={true}
      />
    </div>
  );
}
