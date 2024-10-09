import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

interface CloseIconButtonProps {
  onClick: () => void;
}

const CloseIconButton: React.FC<CloseIconButtonProps> = ({ onClick }) => (
  <Button onClick={onClick}>
    <CloseIcon />
  </Button>
);

export default CloseIconButton;