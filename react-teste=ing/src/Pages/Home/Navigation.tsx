import styled from 'styled-components'
import { Link } from 'react-router-dom'
import "./HomeStyle.css"

// Ajustando a seção para cobrir a largura da tela
const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.body};
  padding: 10px 20px;
  position: relative; /* Removi o z-index negativo */
`;

// Estilizando a barra de navegação
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent; /* Navbar transparente */
  height: 70px;
  padding: 0 20px;
  position: relative; /* Para garantir que o z-index funcione */
  z-index: 2; /* Garante que o conteúdo da navbar fique acima dos SVGs */
`;

// Logo do lado esquerdo
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 70px;
  z-index: 2; /* Garante que o logo e os links fiquem acima dos SVGs */

  img {
    height: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #FF914D; /* Cor da marca */
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
  z-index: 2; /* Garante que o menu fique acima dos SVGs */
`;

// Estilizando os itens da navbar
const NavItem = styled.li`
  color: #fff;
  margin: 0 2rem;
  cursor: pointer;
  z-index: 2; /* Garante que os links fiquem acima dos SVGs */

  &:after {
    text-decoration: none;
    content: "";
    color: ${props => props.theme.text};
    display: block; 
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Estilizando o botão de "Entrar"
const Button = styled.button`
  color: #333; /* Cor preta para o botão */
  background-color: white;
  font-size: 14px;
  padding: 12px 30px;
  margin-left: 20px;
  border-radius: 20px;
  border: 1px solid #333;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  z-index: 2; /* Garante que o botão fique acima dos SVGs */

  &:hover {
    background-color: #333;
    color: white;
  }
`;

// Grupo de SVGs com posicionamento específico
const Vector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* SVGs ficam abaixo da navbar */

  img {
    position: absolute;
    object-fit: cover;
  }

  /* Posicionando os SVGs individualmente */
  .svg1 {
    top: 0%;
    left: 18%;
  }

  .svg2 {
    top: 0%;
    left: 25%;
  }

  .svg3 {
    top: 0%;
    left: 25%;
  }

  .svg4 {
    top: 0%;
    left: 43%;
  }
`;

// Componente de navegação
const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo>
          <Link to={"/Navigation"}>
            <img  src="/src/assets/Logo.svg" alt="Logo Quack()" />
          </Link>
          <Link to={"/Navigation"}>
            <span>Quack()</span>
          </Link>
        </Logo>
        <Menu>
          {/* Links de navegação */}
          <NavItem>
            <Link to="/Home">O QUE É QUACK()</Link>
          </NavItem>
          <NavItem>
            <Link to="/Roadmap">TRILHAS</Link>
          </NavItem>
          <NavItem>
            <Link to="/About">SOBRE</Link>
          </NavItem>
          <NavItem>
            <Link to="/Faq">CONTATO</Link>
          </NavItem>
          <NavItem>
            <Link to="/Cadastro">CRIAR CONTA GRATUITA</Link>
          </NavItem>
          {/* Botão "Entrar" */}
          <Link to="/Login">
            <Button type="button">ENTRAR</Button>
          </Link>
        </Menu>
      </NavBar>
      {/* Vetores SVG */}
      <Vector>
        <img className="svg1" src="/src/svgs/4.svg" alt="SVG 1" />
        <img className="svg2" src="/src/svgs/2.svg" alt="SVG 2" />
        <img className="svg3" src="/src/svgs/1.svg" alt="SVG 3" />
        <img className="svg4" src="/src/svgs/3.svg" alt="SVG 4" />
      </Vector>
    </Section>
  );
}

export default Navigation;
