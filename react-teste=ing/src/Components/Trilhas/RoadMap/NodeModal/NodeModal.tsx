import React, { useEffect, useState } from "react";
import { ModalOverlay, ModalContent } from './NodeModalStyle';
import NodeModalHeader from './NodeModalHeader';
import NodeModalContent from './NodeModalContent';
import NodeModalFooter from './NodeModalFooter';

interface NodeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedNode: string | null;
  modalData: any;
  onNodeCompletion: (nodeLabel: string) => void;
  onNodePending: (nodeLabel: string) => void;
}

const NodeModal: React.FC<NodeModalProps> = ({ isOpen, onRequestClose, selectedNode, modalData, onNodeCompletion, onNodePending }) => {
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const [status, setStatus] = useState('pendente');

  useEffect(() => {
    if (isOpen && modalData && modalData.links) {
      console.log("Modal aberto com dados:", modalData);
      const savedChecked = localStorage.getItem(`checked_${selectedNode}`);
      const savedStatus = localStorage.getItem(`status_${selectedNode}`);
      if (savedChecked) {
        setIsChecked(JSON.parse(savedChecked));
      } else {
        setIsChecked(new Array(modalData.links.length).fill(false));
      }
      if (savedStatus) {
        setStatus(savedStatus);
      } else {
        setStatus('pendente');
      }
    }
  }, [isOpen, modalData, selectedNode]);

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
    localStorage.setItem(`checked_${selectedNode}`, JSON.stringify(newChecked));

    if (newChecked.every((checked) => checked)) {
      setStatus('concluído');
      localStorage.setItem(`status_${selectedNode}`, 'concluído');
      onNodeCompletion(selectedNode!);
    } else {
      setStatus('pendente');
      localStorage.setItem(`status_${selectedNode}`, 'pendente');
      onNodePending(selectedNode!);
    }
  };

  const handleStatusChange = (newStatus: string) => {
    if (isChecked.every((checked) => checked)) {
      setStatus(newStatus);
      localStorage.setItem(`status_${selectedNode}`, newStatus);
      onNodeCompletion(selectedNode!);
      onRequestClose();
    }
  };

  const progress = (isChecked.filter(Boolean).length / isChecked.length) * 100;

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <NodeModalHeader selectedNode={selectedNode} status={status} progress={progress} onRequestClose={onRequestClose} />
        <NodeModalContent isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} modalData={modalData} />
        <NodeModalFooter isChecked={isChecked} handleStatusChange={handleStatusChange} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default NodeModal;