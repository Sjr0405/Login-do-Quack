import { Container } from '@mui/material';
import { Section, H1, P, ImageRight, Button } from './FaqStyles';
import fulbodyLogo from '../../../Assets/Fulbody-logo.svg';

const Faq = () => {
  return (
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
        <img src={fulbodyLogo} alt="Patinho" />
      </ImageRight>
    </Section>
  );
}

export default Faq;