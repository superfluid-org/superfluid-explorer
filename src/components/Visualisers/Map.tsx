import { useCallback, FC, ReactElement, useEffect, useState } from 'react';
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
import { Network } from "../../redux/networks";
import NextLink from 'next/link';
import { sfSubgraph } from "../../redux/store";
import { ethers } from 'ethers'

export enum StreamStatus {
  Active,
  Inactive,
}

interface edge {
  id: string,
  source: string,
  target: string,
  label?: string,
  animated?: boolean
}

interface node {
  id: string,
  position: {x: number, y: number},
  data: {label: ReactElement},
  flowRate?: string,
}

const Map: FC<{
  network: Network;
  accountAddress: string;
}> = ({network, accountAddress}): ReactElement => {

  const initialNodes: node[] = [
    {
      id: accountAddress,
      position: { x: 500, y: 300 },
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

  const initialEdges: edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  // New stuff with kaspar

  const outgoingStreams = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    filter: {
      sender: accountAddress
    },
    pagination: {
      take: Infinity
    }
  });

  const incomingStreams = sfSubgraph.useStreamsQuery({
    chainId: network.chainId,
    filter: {
      receiver: accountAddress
    },
    pagination: {
      take: Infinity
    }
  });

  const OutgoingStreams = outgoingStreams.data?.data.filter((row) => row.currentFlowRate !== '0') || [];
  const IncomingStreams = incomingStreams.data?.data.filter((row) => row.currentFlowRate !== '0') || [];

  console.log('new query with sf', OutgoingStreams, 'new incoming streams', IncomingStreams);

  useEffect(() => {
    if (!IncomingStreams) {
      return;
    }

    let incomingNodeList: node[] = [initialNodes[0]];
    let outgoingNodeList: node[] = [initialNodes[0]];
    let edgeList: edge[] = [];
    let outgoingEdgeList: edge[] = [];

    IncomingStreams.map((row, i: number) => {
      if (row.currentFlowRate === '0') {
        return
      }
      let ethersFlowRate = ethers.utils.formatEther(row.currentFlowRate);
      //Convert to humanized monthly amount
      let humanizedFlowRate = +ethersFlowRate * 3600 * 24 * 30;
      //Create a node object with relevant data
      let node = {
        id: `${row.sender}-${i}`,
        position: {x: i*300, y: 100},
        data: {
          label:
            <NextLink
              href={`/${network.slugName}/accounts/${row.sender}`}
              passHref
            >
              {/* TODO add blockies */}
              {ellipsisAddress(row.sender)}
            </NextLink>
        },
        flowRate: `${humanizedFlowRate.toFixed(2)}/Mo  ${row.tokenSymbol}`,
      }
      incomingNodeList.push(node);
    })

    incomingNodeList.map((node: node, i: number) => {
      if (i === incomingNodeList.length) {
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

    OutgoingStreams.map((row, i: number) => {
      if (row.currentFlowRate === '0') {
        return
      }
      let ethersFlowRate = ethers.utils.formatEther(row.currentFlowRate);
      //Convert to humanized monthly amount
      let humanizedFlowRate = +ethersFlowRate * 3600 * 24 * 30;
      //Create a node object with relevant data
      let node = {
        id: `${row.receiver}-${i}`,
        position: {x: i*200, y: 600},
        data: {
          label:
            <NextLink
              href={`/${network.slugName}/accounts/${row.receiver}`}
              passHref
            >
              {/* TODO add blockies */}
              {ellipsisAddress(row.receiver)}
            </NextLink>
        },
        flowRate: `${humanizedFlowRate.toFixed(2)}/Mo  ${row.tokenSymbol}`,
      }
      outgoingNodeList.push(node);
    })

    outgoingNodeList.map((node: node, i: number) => {
      if (i === outgoingNodeList.length) {
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

    setNodes([...incomingNodeList, ...outgoingNodeList]);
    setEdges(edgeList);
  }, [IncomingStreams, OutgoingStreams])

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
