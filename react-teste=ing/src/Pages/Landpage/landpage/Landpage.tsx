import styled from "styled-components";
import "../HomeStyle.css";

const Section = styled.section`
  height: 80vh;
  width: 100%;
  position: relative;
  background-color: #F7F5F9; /* Cor corrigida */
  /* Removido o z-index: -3 */
`;

const Container = styled.div`
  width: 75%;
  height: 80vh;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  /* Removido o z-index: -3 */
`;

const Titulo = styled.h1`
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

const Subtitulo = styled.h3`
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
const CadButton = styled.button`
  color: #fff;
  background-color: #337447;
  font-size: 14px;
  top: 25%;
  left: 8%;
  padding: 22px;
  margin-left: 20px;
  border-radius: 8px;
  border: none;
  font family: 'Montserrat Alternates', sans-serif;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  z-index: 2; /* Mantém o botão acima dos SVGs */

  &:hover {
    background-color: #255233;
    color: white;
  }
`;

// Grupo de SVGs com posicionamento específico
const Vector = styled.div`
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

const Home = () => {
  return (
    <Section id="landpage">
      <Vector>
        {/* Posicionando os SVGs em lugares estratégicos */}
        <img className="svg1" src="/src/svgs/Landpage-svgs/5.svg" alt="svg" />
      </Vector>
      <Container>
        <Titulo>
          Aprenda Programação de Forma
          <br />
          Estruturada com Quack()
        </Titulo>
        <Subtitulo>
          Aprender programação pode ser um desafio, com tantas
          <br />
          informações dispersas e falta de orientação clara.
          <br />
          <br />
          A missão do Quack() é simplificar esse processo. Oferecemos
          <br />
          trilhas de aprendizado detalhadas que guiam você passo a
          <br />
          passo, desde os conceitos básicos até as habilidades mais
          <br />
          avançadas, garantindo que você tenha um caminho claro e
          <br />
          estruturado para se tornar um programador eficiente.
        </Subtitulo>
        <CadButton onClick={() => (window.location.href = "/Cadastro")}>
          Criar uma conta gratuitamente
        </CadButton>
      </Container>
    </Section>
  );
};

export default Home;
