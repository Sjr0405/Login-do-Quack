import styled from 'styled-components';
import backgroundImg from '../../../svgs/Landpage-svgs/6.svg';

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #F7F5F9;
  z-index: 2;
  padding: 20px 0; /* Adiciona um pouco de espaço vertical */
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 40px;
  z-index: 2;
`;

export const Titulo = styled.h1`
  grid-column: 1 / -1;
  color: #333;
  font-size: 42px;
  text-align: center;
  font-weight: bold;
  margin-top: 0%;
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
  gap: 10px;
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
  }

  h3{
    text-align: center;

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