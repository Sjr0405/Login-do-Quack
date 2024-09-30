import styled from "styled-components";

export const Container = styled.div`
  grid-area: MF; /* Definindo área para o footer */
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  font-size: 1.2em;
  padding: 10px;
  text-align: center; /* Centraliza o texto */
  background-color: ${(props) => props.theme.colors.primary}; /* Adiciona uma cor de fundo */
  border-top: 1px solid ${(props) => props.theme.colors.gray}; /* Adiciona uma borda superior */
`;
