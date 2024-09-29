import styled from "styled-components";


export const Container = styled.div`

grid-area: MF; /* Definindo área para o footer */
background-color: ${(props) => props.theme.colors.gray};
color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding: 10px;
`;