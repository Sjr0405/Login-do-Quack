import styled from "styled-components";
/** 
layout
MH = Main Header
MC = Main Content
MF = Main Footer
RT = Roadmap
*/

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: 70px auto 70px; 
  grid-template-areas:
    "MH"  /* Main Header */
    "MC"  /* Main Content */
    "RT"  /* Roadmap */
    "MF"; /* Main Footer */
  
  height: 100vh; /* O layout ocupa toda a altura da tela */
`;

export const Container = styled.div`
  grid-area: RT; /* Definindo área para o Roadmap */
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  overflow-y: auto; /* Permite rolagem se o conteúdo for longo */
  height: calc(100vh - 140px); /* Ajusta a altura do contêiner */
`;