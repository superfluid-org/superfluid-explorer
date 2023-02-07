import Decimal from "decimal.js";
import { BigNumberish, utils } from "ethers";
import { memo, ReactNode } from "react";
import { getDecimalPlacesToRoundTo } from "../utils/decimalUtils";

interface AmountProps {
  wei: BigNumberish;
  /**
   * Defaults to 18 which is what super tokens always have.
   * IMPORTANT: Make sure to pass in this value when you need to display balance of an underlying token and the wei amount was denominated in underlying token's decimals.
   * a.k.a "token decimals", "unit"
   */
  decimals?: number;
  /**
   * a.k.a "fixed" _visible_ decimal places
   */
  decimalPlaces?: number;
  disableRounding?: boolean;
  roundingIndicator?: "..." | "~";
  children?: ReactNode;
}

// NOTE: Previously known as "EtherFormatted" & "Ether"
export default memo<AmountProps>(function Amount({
  wei,
  decimals = 18,
  disableRounding,
  roundingIndicator,
  children,
  ...props
}) {
  const decimal = new Decimal(utils.formatUnits(wei, decimals));
  const decimalPlacesToRoundTo =
    props.decimalPlaces ?? getDecimalPlacesToRoundTo(decimal);
  const decimalPlacesToDisplay = props.decimalPlaces ?? undefined; // "undefined" means that trailing zeroes will be removed by `toFixed`
  const decimalRounded = disableRounding
    ? decimal
    : decimal.toDP(decimalPlacesToRoundTo);
  const isRounded = !decimal.equals(decimalRounded);

  return (
    <>
      {isRounded && roundingIndicator === "~" && "~"}
      {decimalRounded.toFixed(decimalPlacesToDisplay)}
      {isRounded && roundingIndicator === "..." && "..."}
      {children}
    </>
  );
});
