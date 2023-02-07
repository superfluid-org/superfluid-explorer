import { Box } from "@mui/material";
import Decimal from "decimal.js";
import { BigNumber, BigNumberish, utils } from "ethers";
import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import Amount from "./Amount";

const ANIMATION_MINIMUM_STEP_TIME = 75;

export interface FlowingBalanceProps {
  balance: string;
  /**
   * Timestamp in Subgraph's UTC.
   */
  balanceTimestamp: number;
  flowRate: string;
}

const FlowingBalance: FC<FlowingBalanceProps> = ({
  balance,
  balanceTimestamp,
  flowRate,
}): ReactElement => {
  const [weiValue, setWeiValue] = useState<BigNumberish>(balance);
  useEffect(() => setWeiValue(balance), [balance]);
  const flowRateBigNumber = useMemo(() => BigNumber.from(flowRate), [flowRate]);
  const etherSignificantFlowingDecimal = useMemo<number | undefined>(() => {
    if (flowRateBigNumber.isZero()) {
      return undefined;
    }

    const ticksPerSecond = 1000 / ANIMATION_MINIMUM_STEP_TIME;
    const flowRatePerTick = new Decimal(flowRate)
      .div(ticksPerSecond)
      .toFixed(0);

    const afterEtherDecimal = utils.formatEther(flowRatePerTick).split(".")[1];
    const numberAfterDecimalWithoutLeadingZeroes = Number(afterEtherDecimal);
    const lengthToFirstSignificatDecimal = afterEtherDecimal
      .toString()
      .replace(numberAfterDecimalWithoutLeadingZeroes.toString(), "").length;

    if (lengthToFirstSignificatDecimal === 17) return 18; // Don't go over 18.

    // This will usually have the last 3 numbers flowing smoothly.
    return lengthToFirstSignificatDecimal + 2;
  }, [flowRate]);

  const balanceTimestampMs = useMemo(
    () => BigNumber.from(balanceTimestamp).mul(1000),
    [balanceTimestamp]
  );

  useEffect(() => {
    const flowRateBigNumber = BigNumber.from(flowRate);
    if (flowRateBigNumber.isZero()) {
      return; // No need to show animation when flow rate is zero.
    }

    const balanceBigNumber = BigNumber.from(balance);

    let stopAnimation = false;
    let lastAnimationTimestamp: DOMHighResTimeStamp = 0;

    const animationStep = (currentAnimationTimestamp: DOMHighResTimeStamp) => {
      if (stopAnimation) {
        return;
      }

      if (
        currentAnimationTimestamp - lastAnimationTimestamp >
        ANIMATION_MINIMUM_STEP_TIME
      ) {
        const currentTimestampBigNumber = BigNumber.from(
          new Date().valueOf() // Milliseconds elapsed since UTC epoch, disregards timezone.
        );

        setWeiValue(
          balanceBigNumber.add(
            currentTimestampBigNumber
              .sub(balanceTimestampMs)
              .mul(flowRateBigNumber)
              .div(1000)
          )
        );

        lastAnimationTimestamp = currentAnimationTimestamp;
      }

      window.requestAnimationFrame(animationStep);
    };

    window.requestAnimationFrame(animationStep);

    return () => {
      stopAnimation = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance, balanceTimestamp, flowRate]);

  return (
    <Box
      data-cy={"total-streamed"}
      component="span"
      sx={{
        textOverflow: "ellipsis",
      }}
    >
      <Amount wei={weiValue} decimalPlaces={etherSignificantFlowingDecimal} />
    </Box>
  );
};

export default FlowingBalance;
