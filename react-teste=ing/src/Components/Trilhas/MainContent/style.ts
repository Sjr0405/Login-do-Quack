// style.ts
import styled from "styled-components";

export const Container = styled.div`
  grid-area: MC; /* Definindo área para o conteúdo principal */
  color: ${(props) => props.theme.colors.white }; /* Cor do texto */
  width: 100%;
  max-width: 1000px; /* Define uma largura máxima para evitar que o conteúdo ocupe toda a tela */
  margin: 0 auto; /* Centraliza o container horizontalmente */
  padding: 40px 20px; /* Mais espaçamento para melhorar o layout */

  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px; /* Espaçamento entre os componentes */

`;
