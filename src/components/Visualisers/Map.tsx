import { useCallback, FC, ReactElement, useEffect, useMemo, memo } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
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
  sourcePosition?: Position;
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

  const {
    outgoingStreams,
    outgoingNodeList,
    outgoingEdgeList,
    ...outgoingStreamsQuery
  } = sfSubgraph.useStreamsQuery(
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
      selectFromResult: (queryResult) => {
        const outgoingStreams = queryResult.data?.items ?? [];

        const outgoingNodeList = [
          initialNodes[0],
          ...outgoingStreams.map((stream, i: number) => {
            let ethersFlowRate = ethers.utils.formatEther(
              stream.currentFlowRate
            );
            //Convert to humanized monthly amount
            let humanizedFlowRate = +ethersFlowRate * 3600 * 24 * 30;
            //Create a node object with relevant data
            let node: Node = {
              id: `${stream.receiver}-${i}`,
              position: { x: i * 150, y: 500 },
              data: {
                label: (
                  <UserBlock network={network} address={stream.receiver} />
                ),
              },
              flowRate: `${humanizedFlowRate.toFixed(2)}/Mo  ${
                stream.tokenSymbol
              }`,
              sourcePosition: Position.Top,
            };
            return node;
          }),
        ];

        const outgoingEdgeList: Edge[] = outgoingNodeList.map((node) => ({
          id: `e${node.id}-${accountAddress}`,
          label: node.flowRate,
          source: accountAddress,
          target: node.id,
          animated: true,
        }));

        return {
          ...queryResult,
          outgoingStreams,
          outgoingNodeList,
          outgoingEdgeList,
        };
      },
    }
  );

  const {
    incomingStreams,
    incomingNodeList,
    incomingEdgeList,
    ...incomingStreamsQuery
  } = sfSubgraph.useStreamsQuery(
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
      selectFromResult: (queryResult) => {
        const incomingStreams = queryResult.data?.items ?? [];

        const incomingNodeList = [
          initialNodes[0],
          ...incomingStreams.map((stream, i: number) => {
            const ethersFlowRate = ethers.utils.formatEther(
              stream.currentFlowRate
            );
            //Convert to humanized monthly amount
            const humanizedFlowRate = +ethersFlowRate * 3600 * 24 * 30;
            //Create a node object with relevant data
            const node: Node = {
              id: `${stream.sender}-${i}`,
              position: { x: i * 300, y: 100 },
              data: {
                label: <UserBlock network={network} address={stream.sender} />,
              },
              flowRate: `${humanizedFlowRate.toFixed(2)}/Mo  ${
                stream.tokenSymbol
              }`,
              sourcePosition: Position.Bottom,
            };
            return node;
          }),
        ];

        const incomingEdgeList: Edge[] = incomingNodeList.map((node) => ({
          id: `e${node.id}-${accountAddress}`,
          label: node.flowRate,
          source: node.id,
          target: accountAddress,
          animated: true,
        }));

        return {
          ...queryResult,
          incomingStreams,
          incomingNodeList,
          incomingEdgeList,
        };
      },
    }
  );

  useEffect(() => {
    if (outgoingStreamsQuery.isSuccess && incomingStreamsQuery.isSuccess) {
      let edges = [...incomingEdgeList, ...outgoingEdgeList];

      // Disable animation if too many edges.
      if (edges.length > 50) {
        edges = edges.map((x) => ({ ...x, animated: false }));
      }

      setNodes([...incomingNodeList, ...outgoingNodeList]);
      setEdges(edges);
    }
  }, [
    outgoingNodeList,
    incomingNodeList,
    outgoingEdgeList,
    incomingEdgeList,
    outgoingStreamsQuery.isSuccess,
    incomingStreamsQuery.isSuccess,
  ]);

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