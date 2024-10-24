import styled from 'styled-components';
import backgroundImg from '../../../svgs/Landpage-svgs/6.svg';
import { Section as LandingSection } from '../../../Pages/LandingPage/LandingPageStyles';

export const Section = styled(LandingSection)`
  min-height: 100vh;
  position: relative;
  background-color: #F7F5F9;
  z-index: 2;
  padding: 40px 0; /* Adiciona mais espaço vertical */
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Arial', sans-serif; /* Fonte agradável */
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(247, 245, 249, 0.8)); /* Gradiente suave */
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 40px;
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  z-index: 2;
`;

export const Titulo = styled.h1`
  grid-column: 1 / -1;
  color: #333;
  font-size: 42px;
  text-align: center;
  font-weight: bold;
  margin-top: 0;
  padding: 20px 0;
  z-index: 2;
  @media (max-width: 991px) {
    font-size: 32px;
  }
`;

export const Card = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%; // Ajusta a imagem para se adequar ao tamanho do card
    max-width: 350px; // Define um limite para a largura da imagem
    height: auto;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    text-align: center;
    font-size: 16px;
    color: #666;
  }

  h3 {
    text-align: center;
    font-size: 24px;
    color: #333;
    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: #4834d4;
    }
  }

  @media (max-width: 768px) {
    grid-column: span 6;
  }

  @media (max-width: 576px) {
    grid-column: span 12;
  }
`;