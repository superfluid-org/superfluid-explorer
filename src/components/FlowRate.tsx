import Tooltip from "@mui/material/Tooltip";
import {BigNumber, ethers} from "ethers";
import {FC} from "react";
import {Box} from "@mui/material";

const FlowRate: FC<{
  flowRate: string
}> = ({ flowRate }) => {
  if (flowRate === "0") {
    return <Box component="span">0</Box>;
  }

  const flowRateBigNumber = BigNumber.from(flowRate);
  const flowRatePerDay = flowRateBigNumber.mul(60 * 60 * 24).toString();

  return (<Tooltip title={`${flowRate} wei/s` } placement="right" arrow><Box component="span">{ethers.utils.formatEther(flowRatePerDay)}/day</Box></Tooltip>);
}

export default FlowRate;
