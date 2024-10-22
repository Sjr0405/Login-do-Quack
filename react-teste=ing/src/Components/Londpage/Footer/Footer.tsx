import { Link } from 'react-router-dom';
import { Section, Logo, SocialIcons, NavMenu } from './FooterStyles';

const Footer = () => {
  return (
    <Section>
      <Logo>
        <Link to={"/"}>
          <img src="/src/assets/Logo.svg" alt="Logo" />
        </Link>
        <span>Quack()</span>
      </Logo>
      <NavMenu>
        <Link to={"/Navigation"}>Início</Link>
        <Link to={"/Home"}>Product</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Faq"}>Contact</Link>
      </NavMenu>
      <SocialIcons>
        <Link to="https://github.com/Sjr0405/Login-do-Quack" target="_blank">
          <img src="/src/Icons/twitter.svg" alt="Twitter" />
        </Link>
        <Link to="https://facebook.com" target="_blank">
          <img src="/src/Icons/facebook.svg" alt="Facebook" />
        </Link>
        <Link to="https://linkedin.com" target="_blank">
          <img src="/src/Icons/linkedin.svg" alt="Linkedin" />
        </Link>
      </SocialIcons>
    </Section>
  );
};

export default Footer;