import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Ajustando a seção para cobrir a largura da tela
const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.body};
  padding: 10px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

// Estilizando a barra de navegação
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  height: 80px;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

// Logo do lado esquerdo
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  z-index: 2;

  img {
    height: 60px;
    margin-right: 15px;
  }

  span {
    font-size: 28px;
    font-weight: bold;
    color: #FF914D;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 10px;

    img {
      height: 50px;
    }

    span {
      font-size: 24px;
    }
  }
`;

// Estilizando o menu da navbar (ul)
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

// Estilizando os itens da navbar
const NavItem = styled.li`
  color: #fff;
  margin: 0 1.5rem;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;
  text-transform: uppercase;

  &:after {
    text-decoration: none;
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 14px;
  }
`;

// Estilizando o botão de "Entrar"
const Button = styled.button`
  color: #fff;
  background-color: #FF914D;
  font-size: 14px;
  padding: 12px 30px;
  margin-left: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  z-index: 2;

  &:hover {
    background-color: #e57e35;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
    margin-left: 0;
  }
`;

// Grupo de SVGs com posicionamento específico
const Vector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1; /* SVGs ficam abaixo da navbar */

  img {
    position: absolute;
    object-fit: cover;
  }

  /* Posicionando os SVGs individualmente */
  .svg1 {
    top: 0%;
    left: 17%;
  }

  .svg2 {
    top: 0%;
    left: 24.2%;
  }

  .svg3 {
    top: 0%;
    left: 41.6%;
  }

  .svg4 {
    top: 0%;
    left: 24.1%;
  }
`;

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo>
          <Link to="/Navigation">
            <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
          </Link>
          <Link to="/Navigation">
            <span>Quack()</span>
          </Link>
        </Logo>
        <Menu>
          <NavItem>
            <Link to="/Home">O que é Quack()</Link>
          </NavItem>
          <NavItem>
            <Link to="/Roadmap">Trilhas</Link>
          </NavItem>
          <NavItem>
            <Link to="/About">Sobre</Link>
          </NavItem>
          <NavItem>
            <Link to="/Faq">Contato</Link>
          </NavItem>
          <NavItem>
            <Link to="/Cadastro">Criar Conta</Link>
          </NavItem>
          <Link to="/Login">
            <Button>Entrar</Button>
          </Link>
        </Menu>
      </NavBar>
      <Vector>
        <img className="svg1" src="/src/svgs/4.svg" alt="SVG 1" />
        <img className="svg2" src="/src/svgs/2.svg" alt="SVG 2" />
        <img className="svg4" src="/src/svgs/1.svg" alt="SVG 4" />
        <img className="svg3" src="/src/svgs/3.svg" alt="SVG 3" />
        
      </Vector>
    </Section>
  );
};

export default Navigation;
