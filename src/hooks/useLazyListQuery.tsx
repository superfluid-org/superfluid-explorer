import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import isEqual from "lodash/isEqual";

const useLazyListQuery = <T,>(query: any, defaultArgs: any) => {
  const [queryArgs, setQueryArgs] = useState(defaultArgs);

  const [queryTrigger, queryResult] = query.useLazyStreamsQuery();

  const queryTriggerDebounced = useDebounce(queryTrigger, 250);

  useEffect(() => {
    if (
      queryResult.originalArgs &&
      !isEqual(queryResult.originalArgs.filter, queryArgs.filter)
    ) {
      queryTriggerDebounced(queryArgs);
    } else {
      queryTrigger(queryArgs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryArgs]);

  return [queryResult, queryArgs, setQueryArgs];
};

export default useLazyListQuery;

// const llQuery = useLazyListQuery<Required<StreamsQuery>>({
//     chainId: network.chainId,
//     filter: defaultFilter,
//     pagination: {
//       take: 10,
//       skip: 0,
//     },
//     order: incomingStreamOrderingDefault,
//   });
