import { useCallback, FC, ReactElement } from 'react';
import ellipsisAddress from '../../utils/ellipsisAddress';
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
import NextLink from 'next/link';
import { sfSubgraph } from "../../redux/store";
import { ethers } from 'ethers'

type RequiredStreamQuery = Required<Omit<StreamsQuery, "block">>;

//Incoming streams

export const incomingStreamOrderingDefault: Ordering<Stream_OrderBy> = {
  orderBy: "updatedAtTimestamp",
  orderDirection: "desc",
};

export const incomingStreamPagingDefault = createSkipPaging({
  take: 10,
});

//Outgoing streams

export const outgoingStreamOrderingDefault: Ordering<Stream_OrderBy> = {
  orderBy: "updatedAtTimestamp",
  orderDirection: "desc",
};

export const outgoingStreamPagingDefault = createSkipPaging({
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
    {
      id: accountAddress,
      position: { x: 500, y: 200 },
      data: {
        label:
          <NextLink
            href={`/${network.slugName}/accounts/${accountAddress}`}
            passHref
          >
            {ellipsisAddress(accountAddress)}
          </NextLink>
      }
    },
  ];

  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const defaultFilter = {
    receiver: accountAddress,
  };

  //Incoming streams

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

  const IncomingStreams = streamsQueryResult.data?.data || [];

  useEffect(() => {
    if (!IncomingStreams) {
      return;
    }
    let incomingNodeList: any = [initialNodes[0]];
    let edgeList: any = [];

    IncomingStreams.map((row, i) => {
      if (row.currentFlowRate === '0') {
        return
      }
      let ethersFlowRate = ethers.utils.formatEther(row.currentFlowRate);
      let humanizedFlowRate = +ethersFlowRate * 3600 * 24 * 30
      let node = {
        id: `${row.sender}-${i}`,
        position: {x: i*300, y: 100},
        data: {
          label:
            <NextLink
              href={`/${network.slugName}/accounts/${row.sender}`}
              passHref
            >
              {ellipsisAddress(row.sender)}
            </NextLink>
        },
        flowRate: `${humanizedFlowRate.toFixed(2)}/Mo  ${row.tokenSymbol}`,
      }
      incomingNodeList.push(node);
    })
    console.log('nodeList', incomingNodeList);
    incomingNodeList.map((node: any, i: any) => {
      if(i === incomingNodeList.length){
        return;
      }
      let edge = {
        id: `e${node.id}-${accountAddress}`,
        label: node.flowRate,
        source: node.id,
        target: accountAddress,
        animated: true
      }
      edgeList.push(edge);
    })

    console.log('nodeList', incomingNodeList, 'edgeList', edgeList);
    setNodes([...incomingNodeList]);
    setEdges(edgeList);
    console.log(nodes, edges, 'eee')
  }, [IncomingStreams])

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
