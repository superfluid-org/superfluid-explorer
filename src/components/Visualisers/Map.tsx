import { useCallback, FC, ReactElement, useEffect, useMemo, memo } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { Network } from "../../redux/networks";
import { sfSubgraph } from "../../redux/store";
import { ethers } from "ethers";
import UserBlock from "./UserBlock";

export enum StreamStatus {
  Active,
  Inactive,
}

interface Edge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}

interface Node {
  id: string;
  position: { x: number; y: number };
  data: { label: ReactElement };
  flowRate?: string;
}

interface Stream {
  createdAtBlockNumber: number;
  createdAtTimestamp: number;
  currentFlowRate: string;
  deposit: string;
  id: string;
  receiver: string;
  sender: string;
  streamedUntilUpdatedAt: string;
  token: string;
  tokenSymbol: string;
  updatedAtBlockNumber: number;
  updatedAtTimestamp: number;
}

const Map: FC<{
  network: Network;
  accountAddress: string;
}> = ({ network, accountAddress }): ReactElement => {
  const initialNodes: Node[] = [
    {
      id: accountAddress,
      position: { x: 500, y: 300 },
      data: {
        label: (
          <UserBlock
            network={network!}
            address={accountAddress}
            color={"#00991F"}
          />
        ),
      },
    },
  ];

  const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const { outgoingStreams, ...outgoingStreamsQuery } =
    sfSubgraph.useStreamsQuery(
      {
        chainId: network.chainId,
        filter: {
          sender: accountAddress,
          currentFlowRate_not: "0",
        },
        pagination: {
          take: Infinity,
        },
      },
      {
        selectFromResult: (queryResult) => ({
          ...queryResult,
          outgoingStreams: queryResult.data?.items ?? [],
        }),
      }
    );

  const { incomingStreams, ...incomingStreamsQuery } =
    sfSubgraph.useStreamsQuery(
      {
        chainId: network.chainId,
        filter: {
          receiver: accountAddress,
          currentFlowRate_not: "0",
        },
        pagination: {
          take: Infinity,
        },
      },
      {
        selectFromResult: (queryResult) => ({
          ...queryResult,
          incomingStreams: queryResult.data?.items ?? [],
        }),
      }
    );

  //Set up edges and nodes with streams
  useEffect(() => {
    let incomingNodeList: Node[] = [initialNodes[0]];
    let outgoingNodeList: Node[] = [initialNodes[0]];
    let edgeList: Edge[] = [];
    let outgoingEdgeList: Edge[] = [];

    incomingStreams.forEach((stream: Stream, i: number) => {
      let ethersFlowRate = ethers.utils.formatEther(stream.currentFlowRate);
      //Convert to humanized monthly amount
      let humanizedFlowRate = +ethersFlowRate * 3600 * 24 * 30;
      //Create a node object with relevant data
      let node = {
        id: `${stream.sender}-${i}`,
        position: { x: i * 300, y: 100 },
        data: {
          label: <UserBlock network={network} address={stream.sender} />,
        },
        flowRate: `${humanizedFlowRate.toFixed(2)}/Mo  ${stream.tokenSymbol}`,
        sourcePosition: "bottom",
      };
      incomingNodeList.push(node);
    });

    //Make these come out from TOP of Node
    incomingNodeList.forEach((node: Node, i: number) => {
      if (i === incomingNodeList.length) {
        return;
      }
      let edge = {
        id: `e${node.id}-${accountAddress}`,
        label: node.flowRate,
        source: node.id,
        target: accountAddress,
        animated: true,
      };
      edgeList.push(edge);
    });

    outgoingStreams.forEach((stream: Stream, i: number) => {
      let ethersFlowRate = ethers.utils.formatEther(stream.currentFlowRate);
      //Convert to humanized monthly amount
      let humanizedFlowRate = +ethersFlowRate * 3600 * 24 * 30;
      //Create a node object with relevant data
      let node = {
        id: `${stream.receiver}-${i}`,
        position: { x: i * 150, y: 500 },
        data: {
          label: <UserBlock network={network} address={stream.receiver} />,
        },
        flowRate: `${humanizedFlowRate.toFixed(2)}/Mo  ${stream.tokenSymbol}`,
        sourcePosition: "top",
      };
      outgoingNodeList.push(node);
    });

    outgoingNodeList.forEach((node: Node, i: number) => {
      if (i === outgoingNodeList.length) {
        return;
      }
      let edge = {
        id: `e${node.id}-${accountAddress}`,
        label: node.flowRate,
        source: accountAddress,
        target: node.id,
        animated: true,
      };
      outgoingEdgeList.push(edge);
    });

    setNodes([...incomingNodeList, ...outgoingNodeList]);
    setEdges([...edgeList, ...outgoingEdgeList]);
  }, [incomingStreams, outgoingStreams]);

  return (
    <ReactFlow
      style={{
        width: "100%",
        minHeight: "500px",
        backgroundColor: "#303030",
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
};

export default memo(Map);
