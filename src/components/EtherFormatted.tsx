import Decimal from "decimal.js";
import { BigNumberish, ethers } from "ethers";
import { FC } from "react";
import { useAppSelector } from "../redux/hooks";

const EtherFormatted: FC<{ wei: BigNumberish }> = ({ wei }) => {
  const etherDecimalPlaces = useAppSelector(
    (state) => state.appPreferences.etherDecimalPlaces
  );

  const ether = ethers.utils.formatEther(wei);
  const isRounded = ether.split(".")[1].length > etherDecimalPlaces;

  return <>{isRounded && "~"}{new Decimal(ether).toDP(etherDecimalPlaces).toFixed()}</>;
};

export default EtherFormatted;