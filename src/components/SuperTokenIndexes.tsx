import { FC, ReactElement } from "react";
import { Network } from "../redux/networks";
import AppLink from "./AppLink";
import HelpAlert from "./HelpAlert";
import SuperTokenIndexesTable from "./Tables/SuperToken/SuperTokenIndexesTable";

interface Props {
  network: Network;
  tokenAddress: string;
}

const SuperTokenIndexes: FC<Props> = ({
  network,
  tokenAddress,
}): ReactElement => {
  return (
    <>
      <HelpAlert sx={{ mb: 3 }}>
        A pool of subscribers, each of which who holds a given number of units
        in the index. An index is created by a publisher who may update the
        index or distribute funds to the index using the Instant Distribution
        Agreement (IDA).{" "}
        <AppLink
          href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>

      <SuperTokenIndexesTable network={network} tokenAddress={tokenAddress} />
    </>
  );
};

export default SuperTokenIndexes;
