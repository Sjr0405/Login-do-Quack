import React from "react";
import { Container } from './style';


import Logo from './Logo';
import BackButton from './BackButton/intex';



const MainHeader: React.FC = () => {
  return (
    <Container>
      <Logo />
      <BackButton />
    </Container> 
  );
}

export default MainHeader;''