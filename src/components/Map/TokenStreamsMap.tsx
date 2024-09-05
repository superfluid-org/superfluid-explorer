import 'reactflow/dist/style.css'
import { table } from 'console'
import { FC, memo, ReactElement, useCallback, useEffect } from 'react'
import ReactFlow, {
  Controls,
  Background,
  Position,
  useEdgesState,
  useNodesState,
  addEdge
} from 'reactflow'
import { Network } from '../../redux/networks'
import UserBlock from './UserBlock'
import { useCall } from 'wagmi'

interface Edge {
  id: string
  source: string
  target: string
  label?: string
  animated?: boolean
  sourceHandle?: string
  targetHandle?: string // Add targetHandle property
  type?: string // Add type property
}

interface Node {
  id: string
  position: { x: number; y: number }
  data: { label: ReactElement }
  flowRate?: string
  sourcePosition?: Position
  targetPosition?: Position
}

const TokenStreamsMap: FC<{
  network: Network
  tableRows: any[]
}> = ({ network, tableRows }): ReactElement => {
  // initialize initialNodes and initialEdges with empty arrays
  // use placeholder values for nodes
  // need 20 nodes and 10 edges
  let initialNodes: Node[] = []
  let initialEdges: Edge[] = []
  for (let i = 0; i < 10; i++) {
    initialNodes.push({
      id: `${2 * i}`,
      position: { x: -200, y: -i * 200 },
      data: {
        label: <UserBlock network={network} address={'0x000'} />
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left
    })
    initialNodes.push({
      id: `${2 * i + 1}`,
      position: { x: 200, y: -i * 200 },
      data: {
        label: <UserBlock network={network} address={'0x000'} />
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left
    })
    initialEdges.push({
      id: `${i}`,
      source: `${2 * i}`,
      target: `${2 * i + 1}`,
      animated: true,
      sourceHandle: 'left',
      targetHandle: 'right'
    })
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((edges) => addEdge(params, edges)),
    [setEdges]
  )

  useEffect(() => {
    // create newNodes without duplicates
    // edges can point to the same node
    const newNodes = tableRows
      .map((row, index) => [
        {
          id: `${row.sender}`,
          position: { x: -200, y: -index * 200 },
          data: {
            label: <UserBlock network={network} address={row.sender} />
          },
          sourcePosition: Position.Right,
          targetPosition: Position.Left
        },
        {
          id: `${row.receiver}`,
          position: { x: 200, y: -index * 200 },
          data: {
            label: <UserBlock network={network} address={row.receiver} />
          },
          sourcePosition: Position.Right,
          targetPosition: Position.Left
        }
      ])
      .flat()
    const newEdges = tableRows.map((row, index) => {
      return {
        id: `${row.id}`,
        source: `${row.sender}`,
        target: `${row.receiver}`,
        animated: true,
        sourceHandle: 'left',
        targetHandle: 'right'
      }
    })
    setNodes(newNodes)
    setEdges(newEdges)
  }, [tableRows])

  console.log('nodes', nodes)
  console.log('edges', edges)

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
  )
}

export default memo(TokenStreamsMap)
