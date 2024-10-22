import styled from 'styled-components';

// Rodapé
export const Section = styled.footer`
  grid-template-columns: repeat(12, 1fr); // Define a grid com 12 colunas
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;
`;

// Logo e redes sociais
export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #ff7300;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #4834d4;
    }
  }
`;