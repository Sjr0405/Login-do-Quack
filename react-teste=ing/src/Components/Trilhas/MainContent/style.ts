import styled from "styled-components";


export const Container = styled.div`
 grid-area: MC; /* Definindo área para o conteúdo principal */
 background-color: ${(props) => props.theme.colors.tertiary};
 color: ${(props) => props.theme.colors.white};

 padding: 20px;
  overflow-y: auto; /* Permite rolagem se o conteúdo for longo */
`;