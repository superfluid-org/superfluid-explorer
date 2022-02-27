import { FC, ReactElement, useEffect, useState } from "react";
import { BigNumberish, ethers } from "ethers";
import { Box } from "@mui/material";
import EtherFormatted from "./EtherFormatted";

const ANIMATION_MINIMUM_STEP_TIME = 80;

export interface FlowingBalanceProps {
  balance: string;
  balanceTimestamp: number;
  flowRate: string;
}

const FlowingBalance: FC<FlowingBalanceProps> = ({
  balance,
  balanceTimestamp,
  flowRate,
}): ReactElement => {
  const [weiValue, setWeiValue] = useState<BigNumberish>(0);

  useEffect(() => {
    const balanceBigNumber = ethers.BigNumber.from(balance);
    const flowRateBigNumber = ethers.BigNumber.from(flowRate);
    const balanceTimestampBigNumber =
      ethers.BigNumber.from(balanceTimestamp).mul(1000);

    let stopAnimation = false;
    let lastAnimationTimestamp: DOMHighResTimeStamp = 0;

    const animationStep = (currentAnimationTimestamp: DOMHighResTimeStamp) => {
      if (
        currentAnimationTimestamp - lastAnimationTimestamp >
        ANIMATION_MINIMUM_STEP_TIME
      ) {
        if (stopAnimation) {
          return;
        }

        const currentTimestampBigNumber = ethers.BigNumber.from(
          new Date().getTime()
        );

        setWeiValue(
          balanceBigNumber.add(
            currentTimestampBigNumber
              .sub(balanceTimestampBigNumber)
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
