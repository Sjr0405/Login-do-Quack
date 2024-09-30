import React from 'react';
import './Logo.css';
import LogoSvg from 'C:/Users/Nadson/Desktop/Login-do-Quack/react-teste=ing/src/Assets/Logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={LogoSvg} alt="Logo" className="logo-image" />
      <span className="logo-text">quack ( )</span>
    </div>
  );
};

export default Logo;