import styled from "styled-components";


export const Container = styled.div`

grid-area: MF; /* Definindo área para o footer */

color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: left;
  align-items: left;
  font-size: 1.2em;
  padding: 20px;
`;