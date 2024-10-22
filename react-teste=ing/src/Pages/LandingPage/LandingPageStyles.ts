import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden; /* Evita a barra de rolagem horizontal */
  font-family: 'Arial', sans-serif; /* Define uma fonte padrão */
`;

export const Section = styled.section`
  width: 100%;
  overflow-x: hidden; /* Evita a barra de rolagem horizontal */
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  cursor: pointer;
`;