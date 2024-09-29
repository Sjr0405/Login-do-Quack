import styled from "styled-components";


export const Container = styled.div`
  grid-area: MH; /* Definindo área para o header */

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};

  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;