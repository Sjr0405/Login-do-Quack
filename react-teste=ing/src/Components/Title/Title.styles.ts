// Title.styles.ts
import styled from "styled-components";

export const TitleContainer = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  text-align: left; /* Alinha o título à esquerda */
  margin: 0; /* Remove margens padrão */
`;
