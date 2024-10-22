import { Container } from '@mui/material';
import styled from 'styled-components';

// Container principal da seção
const Section = styled.section`
  grid-template-columns: repeat(12, 1fr); // Define a grid com 12 colunas
  height: 100vh;
  background: linear-gradient(to bottom, #1d1a37 20%, #ff7300 20%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: relative;
  z-index: 0;
`;

// Titulo da seção
const H1 = styled.h1`
    margin-top: 30%;
    color: #fff;
    font-size: 48px;
    line-height: 1.2;
    font-weight: bold;
    text-align: left;
    z-index: 1;
`;

// Conteúdo da seção esquerda (texto e botão)
const P = styled.p`
    margin: 20px 0;
    font-size: 18px;
    color: #000;
    text-align: left;
    z-index: 1;
`;

// Seção da imagem à direita (patinho)
const ImageRight = styled.div`
  img {
    bottom: -2%;
    right: 5%;
    position: absolute;
    max-width: auto;
    height: auto;
    z-index: 3;
  }
`;

// Estilizando o botão de "Entrar"
const Button = styled.button`
  color: #fff;
  background-color: #6c5ce7;
  font-size: 18px;
  right: 2%;
  border-radius: 8px;
  border: none;
  padding: 22px 40px;
  margin-left: 20px;
  position: relative;
  transition: background-color 0.3s ease;
  z-index: 2; /* Mantém o botão acima dos SVGs */

  &:hover {
    background-color: #4834d4;
    color: white;
  }
`;

const Faq = () => {
  return (
    <>
      <Section id="faq">
        <Container>
          <H1>
            Junte-se à Revolução do<br/> Aprendizado em Programação!
          </H1>
          <P>
            O Quack() oferece mais de 150 trilhas de aprendizado bem<br/> estruturadas, projetadas para guiá-lo da melhor forma possível<br/> em sua jornada de programação.
          </P>
          <Button onClick={() => (window.location.href = "/Cadastro")}>Cadastre-se</Button>
        </Container>
        <ImageRight>
          <img src="\src\Assets\Fulbody-logo.svg" alt="Patinho" />
        </ImageRight>
      </Section>
    </>
  );
}

export default Faq;
