import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const WaveWrapper = styled.div<{ rotate?: number }>`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  line-height: 0;
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : 'none')};
  background: transparent; /* Fundo transparente */
`;

const WaveSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  animation: ${waveAnimation} 10s linear infinite;
`;

interface WaveProps {
  color: string;
  rotate?: number;
}

const Wave: React.FC<WaveProps> = ({ color, rotate }) => (
  <WaveWrapper rotate={rotate}>
    <WaveSvg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1500,50 L1500,00 L0,0 Z" fill={color} />
      <path d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1500,50 L1500,00 L0,0 Z" fill={color} transform="translate(1500, 0)" />
    </WaveSvg>
  </WaveWrapper>
);

export default Wave;