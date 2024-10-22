import styled from 'styled-components';

export const Section = styled.section`
  height: 80vh;
  width: 100%;
  position: relative;
  background-color: #F7F5F9; /* Cor corrigida */
  /* Removido o z-index: -3 */
`;

export const Container = styled.div`
  width: 75%;
  height: 80vh;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  /* Removido o z-index: -3 */
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 42px;
  top: 18%;
  right: -10%;
  font-weight: 500;
  position: relative;
  font-family: 'lilita one', sans-serif;
  z-index: 2; /* Mantém o título acima dos SVGs */
  text-align: left;
`;

export const Subtitulo = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  top: 22%;
  right: -10%;
  font-weight: 400;
  font-family: 'montserrat', sans-serif;
  position: relative;
  z-index: 2; /* Mantém o subtítulo acima dos SVGs */
  text-align: left;
`;

// Estilizando o botão de "Entrar"
export const CadButton = styled.button`
  color: #fff;
  background-color: #337447;
  font-size: 14px;
  top: 25%;
  left: 8%;
  padding: 22px;
  margin-left: 20px;
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat Alternates', sans-serif;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  z-index: 2; /* Mantém o botão acima dos SVGs */

  &:hover {
    background-color: #255233;
    color: white;
  }
`;

// Grupo de SVGs com posicionamento específico
export const Vector = styled.div`
  /* Posicionando os SVGs individualmente */
  .svg1 {
    top: 4%;
    right: 50%;
    width: 80%;
    height: 80%;
    z-index: 1; /* SVGs ficam atrás de tudo */
    position: absolute;
  }
`;