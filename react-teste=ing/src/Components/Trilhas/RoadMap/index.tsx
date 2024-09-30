import React from "react";
import { Container } from './style';

interface Props {
  children: React.ReactNode;
}

const RoadMap: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default RoadMap;
