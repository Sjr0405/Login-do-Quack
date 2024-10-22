import { Section, Logo } from './FooterStyles';
import logo from '../../../Assets/Logo.svg';

const Footer = () => {
  return (
    <Section>
      <Logo>
        <img src={logo} alt="Logo" />
        <span>Quack()</span>
      </Logo>
      {/* Adicione outros elementos do rodapé aqui */}
    </Section>
  );
};

export default Footer;