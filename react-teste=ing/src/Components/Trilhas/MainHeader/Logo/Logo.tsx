import React from 'react';
import LogoSvg from 'C:/Users/Nadson/Desktop/Login-do-Quack/react-teste=ing/src/Assets/Logo.svg';
import { LogoContainer, LogoImage, LogoText } from './LogoStyles';

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoImage src={LogoSvg} alt="Logo" />
      <LogoText>quack ( )</LogoText>
    </LogoContainer>
  );
};

export default Logo;