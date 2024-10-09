import React from "react";
import { LinkItem, OrangeCheckbox, LinkType, LinkText } from './NodeModalStyle';
import styled from 'styled-components';

interface NodeModalContentProps {
  isChecked: boolean[];
  handleCheckboxChange: (index: number) => void;
  modalData: any;
}

const Description = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  text-align: left; /* Justifica o texto à esquerda */
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
  text-align: center;
  position: relative;

  &::before {
    content: 'Recursos';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 10px;
    color: #333;
    font-weight: bold;
  }
`;

const ContentContainer = styled.div`
  max-height: 300px; /* Ajuste a altura conforme necessário */
  overflow-y: auto;
  padding-right: 16px; /* Para evitar que o conteúdo fique escondido atrás da barra de rolagem */
`;

const NodeModalContent: React.FC<NodeModalContentProps> = ({ isChecked, handleCheckboxChange, modalData }) => {
  if (!modalData) {
    return <div>Carregando...</div>;
  }

  return (
    <ContentContainer>
      <Description>{modalData.description}</Description>
      <Separator />
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
    </ContentContainer>
  );
};

export default NodeModalContent;