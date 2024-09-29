import React from "react";
import { Container } from './style';

interface Props {
  children: React.ReactNode;
}

const MainHeader: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default MainHeader;
