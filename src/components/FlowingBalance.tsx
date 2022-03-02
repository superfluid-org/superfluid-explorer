import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import { BigNumberish, ethers } from "ethers";
import { Box } from "@mui/material";
import EtherFormatted from "./EtherFormatted";
import _ from "lodash";

const ANIMATION_MINIMUM_STEP_TIME = 80;

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

  const balanceTimestampAsLocalBigNumber = useMemo(
    () =>
      ethers.BigNumber.from(balanceTimestamp)
        .mul(1000)
        .add(getTimezoneOffsetMemoized()),
    [balanceTimestamp]
  ); // Easier to convert balance timestamp to local time once than constantly convert local time to UTC time.

  useEffect(() => {
    const flowRateBigNumber = ethers.BigNumber.from(flowRate);
    if (flowRateBigNumber.isZero()) {
      return; // No need to show animation when flow rate is zero.
    }

    const balanceBigNumber = ethers.BigNumber.from(balance);

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
        const currentTimestampBigNumber = ethers.BigNumber.from(
          new Date().getTime()
        );

        setWeiValue(
          balanceBigNumber.add(
            currentTimestampBigNumber
              .sub(balanceTimestampAsLocalBigNumber)
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
  }, [balance, balanceTimestamp, flowRate]);

  return (
    <Box
      component="span"
      sx={{
        textOverflow: "ellipsis",
      }}
    >
      <EtherFormatted wei={weiValue} />
    </Box>
  );
};

export default FlowingBalance;

const getTimezoneOffsetMemoized = _.memoize(
  () => new Date().getTimezoneOffset() * 60 * 1000
);
