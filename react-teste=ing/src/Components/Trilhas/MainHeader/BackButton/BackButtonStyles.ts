import styled from "styled-components";

export const BackButtonStyled = styled.button`
  background-color: #007BFF; /* Azul */
  color: #FFFFFF; /* Corrigido para branco */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px; /* Tamanho da fonte */
  font-weight: bold; /* Fonte em negrito */
  font-family: 'Montserrat Alternates', sans-serif; /* Fonte Montserrat Alternates */
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease; /* Adiciona uma transição suave */

  &:hover {
    background-color: #0056b3; /* Cor mais escura no hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ArrowIcon = styled.div`
  margin-right: 12px;
  color: #FFFFFF; /* Deixa a seta branca */
  width: 24px; /* Ajuste o tamanho conforme necessário */
  height: 24px; /* Ajuste o tamanho conforme necessário */
`;