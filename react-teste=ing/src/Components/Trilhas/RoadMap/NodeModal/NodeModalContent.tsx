import React from "react";
import { LinkItem, OrangeCheckbox, LinkType, LinkText } from './NodeModalStyle';

interface NodeModalContentProps {
  isChecked: boolean[];
  handleCheckboxChange: (index: number) => void;
  modalData: any;
}

const NodeModalContent: React.FC<NodeModalContentProps> = ({ isChecked, handleCheckboxChange, modalData }) => {
  if (!modalData) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>{modalData.description}</h2>
      {modalData.links.map((link: any, index: number) => (
        <LinkItem key={index}>
          <OrangeCheckbox
            checked={isChecked[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          <LinkType type={link.type}>{link.type}</LinkType>
          <LinkText href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </LinkText>
        </LinkItem>
      ))}
    </div>
  );
};

export default NodeModalContent;