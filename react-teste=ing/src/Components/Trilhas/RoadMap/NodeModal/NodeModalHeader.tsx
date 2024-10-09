import React from 'react';
import styled from 'styled-components';
import CloseIconButton from './CloseIconButton';
import { LinearProgress } from '@mui/material';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  width: 100%; /* Garante que o cabeçalho ocupe toda a largura do modal */
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura */
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const StatusLabel = styled.span<{ status: string }>`
  margin-left: 10px;
  font-size: 1rem;
  color: ${({ status }) => (status === 'concluído' ? '#4caf50' : '#ff9800')};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

interface NodeModalHeaderProps {
  selectedNode: string | null;
  status: string;
  progress: number;
  onRequestClose: () => void;
}

const NodeModalHeader: React.FC<NodeModalHeaderProps> = ({ selectedNode, status, progress, onRequestClose }) => (
  <HeaderContainer>
    <TitleContainer>
      <Title>
        {selectedNode}
        <StatusLabel status={status}>{status}</StatusLabel>
      </Title>
      <HeaderRight>
        <CloseIconButton onClick={onRequestClose} />
      </HeaderRight>
    </TitleContainer>
    <LinearProgress variant="determinate" value={progress} style={{ width: '100%', marginTop: '10px' }} />
  </HeaderContainer>
);

export default NodeModalHeader;