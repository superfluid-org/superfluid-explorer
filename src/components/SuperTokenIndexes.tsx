import { sfSubgraph } from "../redux/store";
import {
  createSkipPaging,
  Ordering,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import { FC, ReactElement, useState } from "react";
import { Index_OrderBy } from "@superfluid-finance/sdk-core";
import PublishedIndexDataGrid from "./PublishedIndexDataGrid";
import { Network } from "../redux/networks";
import AppLink from "./AppLink";
import HelpAlert from "./HelpAlert";

interface Props {
  network: Network;
  tokenAddress: string;
}

const SuperTokenIndexes: FC<Props> = ({
  network,
  tokenAddress,
}): ReactElement => {
  const [publishedIndexPaging, setPublishedIndexPaging] = useState<SkipPaging>(
    createSkipPaging({
      take: 10,
    })
  );
  const [publishedIndexOrdering, setPublishedIndexOrdering] = useState<
    Ordering<Index_OrderBy> | undefined
  >({
    orderBy: "createdAtTimestamp",
    orderDirection: "desc",
  });
  const publishedIndexQuery = sfSubgraph.useIndexesQuery({
    chainId: network.chainId,
    pagination: publishedIndexPaging,
    filter: {
      token: tokenAddress,
    },
    order: publishedIndexOrdering,
  });

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

      <PublishedIndexDataGrid
        network={network}
        queryResult={publishedIndexQuery}
        setPaging={setPublishedIndexPaging}
        ordering={publishedIndexOrdering}
        setOrdering={setPublishedIndexOrdering}
      />
    </>
  );
};

export default SuperTokenIndexes;
