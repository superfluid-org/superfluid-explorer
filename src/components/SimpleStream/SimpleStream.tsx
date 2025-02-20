import { FC, ReactElement, useCallback } from 'react'
import ReactFlow, {
  Background,
  Controls,
  OnConnect,
  Position,
  addEdge,
  useEdgesState,
  useNodesState
} from 'reactflow'

interface StreamProps {
  id: string
  sender: string
  receiver: string
  token: string
  flowRate: string
}

const SimpleStream: FC<StreamProps> = ({
  id,
  sender,
  receiver,
  token,
  flowRate
}): ReactElement => {
  const initialNodes = [
    {
      id: `${sender}`,
      type: 'input',
      position: { x: -200, y: 0 },
      data: { label: sender.slice(0, 6) + '...' + sender.slice(-4) },
      sourcePosition: Position.Right,
      targetPosition: Position.Left
    },
    {
      id: `${receiver}`,
      position: { x: 150, y: 0 },
      data: { label: receiver.slice(0, 6) + '...' + receiver.slice(-4) },
      sourcePosition: Position.Right,
      targetPosition: Position.Left
    }
  ]

  const initialEdges = [
    {
      id: `${id}-a->b`,
      source: `${sender}`,
      target: `${receiver}`,
      animated: true,
      sourceHandle: 'left',
      targetHandle: 'right',
      type: 'straight'
    }
  ]

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  )

  console.log('nodes', nodes)
  console.log('edges', edges)
  console.log('sender', sender)
  console.log('receiver', receiver)

  return (
    <ReactFlow
      style={{
        width: '100%',
        minHeight: '300px',
        backgroundColor: '#303030'
      }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView={true}
    >
      <Controls />
      <Background />
    </ReactFlow>
  )
}

export default SimpleStream
