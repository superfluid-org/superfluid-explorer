import ReactFlow, {
  OnConnect,
  Position,
  addEdge,
  useEdgesState,
  useNodesState
} from 'reactflow'
import { useCallback, useEffect, useState } from 'react'
import './Home.css'

const StreamsData = [
  {
    from: '0x4687763307fAff28bF8E4Bf41663f8A4259a8776',
    to: '0xc5028cd20676de2C051520D9F261Ee6196233e0d'
  },
  {
    from: '0x4687763307fAff28bF8E4Bf41663f8A4259a8776',
    to: '0xc5028cd20676de2C051520D9F261Ee6196233e0d'
  },
  {
    from: '0x4687763307fAff28bF8E4Bf41663f8A4259a8776',
    to: '0xc5028cd20676de2C051520D9F261Ee6196233e0d'
  },
  {
    from: '0x4687763307fAff28bF8E4Bf41663f8A4259a8776',
    to: '0xc5028cd20676de2C051520D9F261Ee6196233e0d'
  },
  {
    from: '0x4687763307fAff28bF8E4Bf41663f8A4259a8776',
    to: '0xc5028cd20676de2C051520D9F261Ee6196233e0d'
  }
]

const Home = () => {
  // need to create two nodes for each stream, one for the source and one for the target
  const initialNodes = StreamsData.map((stream, index) => [
    {
      id: `a-${index}`,
      type: 'input',
      position: { x: -200, y: 0 },
      // for the label i need to shorten the address, maybe just show the first 6 and the last 4 characters and add ... in the middle
      data: { label: stream.from.slice(0, 6) + '...' + stream.from.slice(-4) },
      sourcePosition: Position.Right,
      targetPosition: Position.Left
    },
    {
      id: `b-${index}`,
      position: { x: 150, y: 0 },
      data: { label: stream.to.slice(0, 6) + '...' + stream.to.slice(-4) },
      sourcePosition: Position.Right,
      targetPosition: Position.Left
    }
  ]).flat()

  const initialEdges = StreamsData.map((stream, index) => [
    {
      id: `${index}-a->b`,
      source: `a-${index}`,
      target: `b-${index}`,
      animated: true,
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight'
    }
  ]).flat()

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  )

  return (
    <div className="container">
      <div className="recent-streams">
        {StreamsData.map((stream, index) => (
          <ReactFlow
            key={index}
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView={true}
            minZoom={1.5}
            maxZoom={1.5}
            edgesUpdatable={false}
            nodesDraggable={false}
            nodesConnectable={false}
            panOnDrag={false}
            zoomOnScroll={false}
            nodesFocusable={false}
          ></ReactFlow>
        ))}
      </div>
    </div>
  )
}

export default Home
