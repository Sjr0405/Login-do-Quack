import { Section, Container, Titulo, Subtitulo, CadButton, Vector } from './LandpageStyles';
import svg5 from '../../svgs/Landpage-svgs/5.svg';

const Landpage = () => {
  return (
    <Section id="landpage">
      <Vector>
        <img className="svg1" src={svg5} alt="svg" />
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

export default Landpage;