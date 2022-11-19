import { useCallback, FC, ReactElement } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
// 👇 you need to import the reactflow styles
import 'reactflow/dist/style.css';
import {
  createSkipPaging,
  Ordering,
  Stream_OrderBy,
} from "@superfluid-finance/sdk-core";
import { StreamsQuery } from "@superfluid-finance/sdk-redux";
import isEqual from "lodash/isEqual";
import {
  useEffect,
  useState,
} from "react";
import useDebounce from '../../hooks/useDebounce';
import { Network } from "../../redux/networks";
import { sfSubgraph } from "../../redux/store";

type RequiredStreamQuery = Required<Omit<StreamsQuery, "block">>;

export const incomingStreamOrderingDefault: Ordering<Stream_OrderBy> = {
  orderBy: "updatedAtTimestamp",
  orderDirection: "desc",
};

export const incomingStreamPagingDefault = createSkipPaging({
  take: 10,
});

export enum StreamStatus {
  Active,
  Inactive,
}

const Map: FC<{
  network: Network;
  accountAddress: string;
}> = ({network, accountAddress}): ReactElement => {


const initialNodes = [
  { id: accountAddress, position: { x: 500, y: 200 }, data: { label: accountAddress } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const defaultFilter = {
    receiver: accountAddress,
  };

  const createDefaultArg = (): RequiredStreamQuery => ({
    chainId: network.chainId,
    filter: defaultFilter,
    pagination: incomingStreamPagingDefault,
    order: incomingStreamOrderingDefault,
  });

  const [streamsQueryArg, setStreamsQueryArg] = useState<RequiredStreamQuery>(createDefaultArg());

  const [streamsQueryTrigger, streamsQueryResult] =
    sfSubgraph.useLazyStreamsQuery();

  const streamsQueryTriggerDebounced = useDebounce(streamsQueryTrigger, 250);

  const onStreamQueryArgsChanged = (newArgs: RequiredStreamQuery) => {
    setStreamsQueryArg(newArgs);

    if (
      streamsQueryResult.originalArgs &&
      !isEqual(streamsQueryResult.originalArgs.filter, newArgs.filter)
    ) {
      streamsQueryTriggerDebounced(newArgs, true);
    } else {
      streamsQueryTrigger(newArgs, true);
    }
  };

  useEffect(() => {
    onStreamQueryArgsChanged(createDefaultArg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network, accountAddress]);

  const tableRows = streamsQueryResult.data?.data || [];

  console.log('look here', tableRows);

  return (
    <ReactFlow
      style={{
        width: '100%',
        minHeight: '500px',
        backgroundColor: '#303030'
      }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}

export default Map;
