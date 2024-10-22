import styled from 'styled-components';

// Ajustando a seção para cobrir a largura da tela
export const Section = styled.section`
  grid-template-columns: repeat(12, 1fr); // Define a grid com 12 colunas
  background-color: ${(props) => props.theme.body};
  padding: 10px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

// Estilizando a baãrra de navegaço
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  height: 80px;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;