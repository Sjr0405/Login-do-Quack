import React, { useEffect, useState, useMemo } from "react";
import { Container } from './RoadMapStyles';
import ReactFlow, { Background, Controls, Edge, Node, EdgeTypes, NodeMouseHandler } from 'react-flow-renderer';
import NodeModal from './NodeModal/NodeModal';

const Roadmap: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);

  useEffect(() => {
    fetch('/data/roadmapData.json')
      .then(response => response.json())
      .then(data => {
        console.log("JSON data loaded:", data);
        setNodes(data.nodes.map((node: Node) => ({
          ...node,
          data: {
            ...node.data,
            label: node.data.label, // Removido o fundo amarelo
          },
        })));
        setEdges(data.edges.map((edge: Edge) => ({
          ...edge,
          type: edge.type === 'alternative' ? 'alternative' : 'default',
          style: { strokeWidth: 4 }
        })));
        setModalData(data.modals);
      })
      .catch(error => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  const openModal: NodeMouseHandler = (_, node) => {
    console.log("Node clicked:", node);
    setSelectedNode(node.data.label);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedNode(null);
  };

  const edgeTypes: EdgeTypes = useMemo(() => ({
    default: ({ id, sourceX, sourceY, targetX, targetY, style }) => (
      <path
        id={id}
        d={`M${sourceX},${sourceY} C${sourceX},${(sourceY + targetY) / 2} ${targetX},${(sourceY + targetY) / 2} ${targetX},${targetY}`}
        style={{ ...style, stroke: 'blue', strokeWidth: 4 }}
      />
    ),
    alternative: ({ id, sourceX, sourceY, targetX, targetY, style }) => (
      <path
        id={id}
        d={`M${sourceX},${sourceY} C${sourceX},${(sourceY + targetY) / 2} ${targetX},${(sourceY + targetY) / 2} ${targetX},${targetY}`}
        style={{ ...style, stroke: 'grey', strokeWidth: 1 }}
      />
    ),
  }), []);

  return (
    <Container>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodeClick={openModal}
        style={{ height: '100%', width: '100%' }} 
      >
        <Background />
        <Controls />
      </ReactFlow>
      {modalIsOpen && selectedNode && modalData && (
        <NodeModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          selectedNode={selectedNode}
          modalData={modalData[selectedNode]}
        />
      )}
    </Container>
  );
};

export default Roadmap;