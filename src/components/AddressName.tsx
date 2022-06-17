import { memo } from "react";
import useAddressName from "../hooks/useAddressName";
import {shortenHex} from "../utils/shortenHex";

export interface AddressNameProps {
  address: string;
  length?: "short" | "medium" | "long";
}

export default memo(function AddressName({
  address,
  length = "short",
}: AddressNameProps) {
  const addressName = useAddressName(address);
  if (addressName.name) {
    return <>{addressName.name}</>;
  } else {
    return (
      <>
        {length === "long"
          ? addressName.addressChecksummed
          : shortenHex(
              addressName.addressChecksummed,
              length === "medium" ? 8 : 4
            )}
      </>
    );
  }
});
