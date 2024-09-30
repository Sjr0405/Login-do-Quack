import styled from "styled-components";


export const Container = styled.div`
  grid-area: MH; /* Definindo área para o header */

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};

  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5em;

border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;


export const logo = styled.div`
  display: flex;
  align-items: center;
`;