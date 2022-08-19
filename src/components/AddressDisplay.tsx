import { memo } from "react";
import { useAddressDisplay } from "../hooks/useAddressDisplay";
import { shortenHex } from "../utils/shortenHex";

export interface AddressDisplayProps {
  address: string;
  length?: "short" | "medium" | "long";
}

export default memo(function AddressDisplay({
  address,
  length = "short",
}: AddressDisplayProps) {
  const addressDisplay = useAddressDisplay(address);
  if (addressDisplay.ensName) {
    return <>{addressDisplay.ensName}</>;
  } else {
    return (
      <>
        {length === "long"
          ? addressDisplay.addressChecksummed
          : shortenHex(
              addressDisplay.addressChecksummed!, // Bang because address should always be present here.
              length === "medium" ? 8 : 4
            )}
      </>
    );
  }
});
