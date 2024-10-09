import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  grid-area: RT;
  min-height: 100vh; /* Garantir altura mínima */
  min-width: 100vw; /* Garantir largura mínima */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative; /* Ajustado para se comportar corretamente dentro do grid */
  overflow: auto; /* Permitir rolagem se necessário */
`;

export const GlobalStyle = createGlobalStyle`
  .react-flow__attribution {
    display: none;
  }
`;

export const StyledNode = styled.div`
  background-color: yellow;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;