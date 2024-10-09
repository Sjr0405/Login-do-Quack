import React, { useEffect, useState, useCallback } from "react";
import { Container, GlobalStyle } from './RoadMapStyles';
import ReactFlow, { Background, Edge, Node, ReactFlowProvider, NodeMouseHandler } from 'react-flow-renderer';
import NodeModal from './NodeModal/NodeModal';

const Roadmap: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);
  const [completedNodes, setCompletedNodes] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch('/data/roadmapData.json')
      .then(response => response.json())
      .then(data => {
        console.log("JSON data loaded:", data);
        setNodes(data.nodes.map((node: Node) => ({
          ...node,
          data: {
            ...node.data,
            label: node.data.label,
          },
          position: { x: node.position.x, y: node.position.y }, // Garantir que a posição seja definida
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

  const openModal: NodeMouseHandler = useCallback((_: React.MouseEvent, node: Node) => {
    console.log("Node clicked:", node);
    setSelectedNode(node.data.label);
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedNode(null);
  };

  const handleNodeCompletion = (nodeLabel: string) => {
    setCompletedNodes(prevState => ({
      ...prevState,
      [nodeLabel]: true,
    }));
  };

  const handleNodePending = (nodeLabel: string) => {
    setCompletedNodes(prevState => ({
      ...prevState,
      [nodeLabel]: false,
    }));
  };

  return (
    <Container>
      <GlobalStyle />
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes.map((node, index) => ({
            ...node,
            style: {
              backgroundColor: completedNodes[node.data.label] ? '#A3E4A7' : (index === 0 ? '#FC7A02' : '#F6C761'),
              color: completedNodes[node.data.label] ? 'black' : (index === 0 ? '#FFFFFF' : 'black'),
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              border: 'none',
              borderRadius: '10px',
              fontFamily: 'Montserrat Alternates, sans-serif',
              fontWeight: 'bold',
            },
          }))}
          edges={edges}
          onNodeClick={openModal}
          style={{ height: '100%', width: '100%', backgroundColor: '#fff' }} // Garantir altura e largura de 100%
          fitView
          panOnScroll={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          nodesDraggable={false} // Desativar arrastar nodes
          nodesConnectable={false} // Desativar conectar nodes
          elementsSelectable={false} // Desativar seleção de elementos
        >
          <Background color="#fff" />
        </ReactFlow>
      </ReactFlowProvider>
      {modalIsOpen && selectedNode && modalData && (
        <NodeModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          selectedNode={selectedNode}
          modalData={modalData[selectedNode]}
          onNodeCompletion={handleNodeCompletion} // Passar a prop para notificar a conclusão do node
          onNodePending={handleNodePending} // Passar a prop para notificar que o node está pendente
        />
      )}
    </Container>
  );
};

export default Roadmap;