import styled from 'styled-components';

// Container principal da seção
export const Section = styled.section`
  grid-template-columns: repeat(12, 1fr); // Define a grid com 12 colunas
  height: 100vh;
  background: linear-gradient(to bottom, #1d1a37 20%, #ff7300 20%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: relative;
  z-index: 0;
`;

// Titulo da seção
export const H1 = styled.h1`
  margin-top: 30%;
  color: #fff;
  font-size: 48px;
  line-height: 1.2;
  font-weight: bold;
  text-align: left;
  z-index: 1;
`;

// Conteúdo da seção esquerda (texto e botão)
export const P = styled.p`
  margin: 20px 0;
  font-size: 18px;
  color: #000;
  text-align: left;
  z-index: 1;
`;

// Seção da imagem à direita (patinho)
export const ImageRight = styled.div`
  img {
    bottom: -2%;
    right: 5%;
    position: absolute;
    max-width: auto;
    height: auto;
    z-index: 3;
  }
`;

// Estilizando o botão de "Entrar"
export const Button = styled.button`
  color: #fff;
  background-color: #6c5ce7;
  font-size: 18px;
  right: 2%;
  border-radius: 8px;
  border: none;
  padding: 22px 40px;
  margin-left: 20px;
  position: relative;
  transition: background-color 0.3s ease;
  z-index: 2; /* Mantém o botão acima dos SVGs */

  &:hover {
    background-color: #4834d4;
    color: white;
  }
`;