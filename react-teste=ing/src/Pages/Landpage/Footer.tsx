import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Rodapé
const Section = styled.footer`
  grid-template-columns: repeat(12, 1fr); // Define a grid com 12 colunas
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;
`;

// Logo e redes sociais
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #ff7300;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #4834d4;
    }
  }
`;

const SocialIcons = styled.div`
  img {
    margin: 0 10px;
    width: 50px;
    height: 50px;
    color: #000;

    &:hover {
      color: #ff7300;
    }
  }
`;

// Menu de navegação
const NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  a {
    font-size: 16px;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #ff7300;
    }
  }
`;

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
          <Link to={"/Navigation"} >Início</Link>
          <Link to={"/Home"} >Product</Link>
          <Link to={"/About"} >About</Link>
          <Link to={"/Faq"} >Contact</Link>
        </NavMenu>
        <SocialIcons>
          <Link to="https://github.com/Sjr0405/Login-do-Quack" target="_blank">
            <img src="/src/Icons/twitter.svg" alt='Twitter'></img>
          </Link>
          <Link to="https://facebook.com" target="_blank">
          <img src="/src/Icons/facebook.svg" alt='Facebook'></img>
          </Link>
          <Link to="https://linkedin.com" target="_blank">
          <img src="/src/Icons/linkedin.svg" alt='Linkedin'></img>
          </Link>
        </SocialIcons>
      </Section>
  );
};

export default Footer;