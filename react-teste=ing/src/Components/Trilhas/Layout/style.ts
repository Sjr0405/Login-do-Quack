import styled from "styled-components";
/** 
layout
MH = Main Header
MC = Main Content
MF = Main Footer
Rt = roadmap
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