// WelcomeText.styles.ts
import styled from "styled-components";

export const WelcomeTextContainer = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.white};
  text-align: left; /* Centraliza o texto de boas-vindas */
`;
