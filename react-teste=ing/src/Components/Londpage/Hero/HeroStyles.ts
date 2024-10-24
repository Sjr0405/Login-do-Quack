import styled from 'styled-components';

export const Section = styled.section`
  min-height: 80vh;
  width: 100%;
  position: relative;
  
  
  overflow-x: hidden; /* Evita a barra de rolagem horizontal */
  padding: 20px 0; /* Adiciona um pouco de espaço vertical */
  z-index: 1; /* Define um z-index menor que o Navigation */
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 40%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 42px;
  font-weight: 500;
  position: relative;
  font-family: 'lilita one', sans-serif;
  z-index: 2;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Subtitulo = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
  font-family: 'montserrat', sans-serif;
  position: relative;
  z-index: 2;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const CadButton = styled.button`
  color: #fff;
  background-color: #337447;
  font-size: 14px;
  padding: 12px 35px;
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  z-index: 2;
  align-self: flex-start;
  @media (max-width: 991px) {
    align-self: center;
  }

  &:hover {
    background-color: #255233;
    color: white;
  }
`;

export const Img = styled.img`
  aspect-ratio: 0.84;
  object-fit: contain;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px;
  }
`