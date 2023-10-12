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
  let stringAmount = new Decimal(ether).toDP(etherDecimalPlaces).toFixed();

  if(stringAmount.includes('.')) {
    const seperateStringByDecimal = stringAmount.split(".");
    const formattedAmount = seperateStringByDecimal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    stringAmount = formattedAmount + "." + seperateStringByDecimal[1];
  }
  return <>{isRounded && "~"}{stringAmount}</>;
};

export default EtherFormatted;