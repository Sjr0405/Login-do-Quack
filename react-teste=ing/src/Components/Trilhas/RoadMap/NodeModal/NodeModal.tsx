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
}

const NodeModal: React.FC<NodeModalProps> = ({ isOpen, onRequestClose, selectedNode, modalData }) => {
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const [status, setStatus] = useState('pendente');

  useEffect(() => {
    if (isOpen && modalData && modalData.links) {
      console.log("Modal aberto com dados:", modalData);
      setIsChecked(new Array(modalData.links.length).fill(false));
      setStatus('pendente');
    }
  }, [isOpen, modalData]);

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);

    if (newChecked.every((checked) => checked)) {
      setStatus('concluído');
    } else {
      setStatus('pendente');
    }
  };

  const handleStatusChange = (newStatus: string) => {
    if (isChecked.every((checked) => checked)) {
      setStatus(newStatus);
      onRequestClose();
    }
  };

  const progress = (isChecked.filter(Boolean).length / isChecked.length) * 100;

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <NodeModalHeader selectedNode={selectedNode} status={status} progress={progress} onRequestClose={onRequestClose} />
        <NodeModalContent isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} modalData={modalData} />
        <NodeModalFooter isChecked={isChecked} handleStatusChange={handleStatusChange} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default NodeModal;