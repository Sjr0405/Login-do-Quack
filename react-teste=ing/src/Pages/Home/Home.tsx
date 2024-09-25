import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { IconButton, Input } from "@mui/material";

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  cursor: pointer;
  color: #000;

  img {
    margin-right: 10px;
  }

  &:hover {
    color: #ff4a4a;
  }
`;

// Logo do lado esquerdo
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  img {
    height: 60px;
    margin-right: 15px;
  }

  span {
    font-size: 28px;
    font-weight: bold;
    color: #FF914D;
    transition: color 0.3s;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  
    &:hover {
      color: #4834d4;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
    }

    span {
      font-size: 24px;
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InvestidaBox = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid linear-gradient(90deg, #ff9800 0%, #fceba6 100%);
  font-family: 'Montserrat', sans-serif;
  color: #ff9800;
  font-weight: bold;

  img {
    margin-right: 15px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;
    margin-right: 10px;
  }

  img {
    cursor: pointer;
  }
`;

const Titulo = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  margin-top: 20px;
`;

const ModuloCard = styled.div<{ bgColor: string }>`
  width: 60%;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-family: 'Lilita One', sans-serif;
    text-align: left;
    font-size: 24px;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    font-family: 'Lilita One', sans-serif;
    text-align: right;
    color: #888;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #888;
  }

  button {
    background-color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-left: 20px;
  }
`;

interface ProgressBarProps {
  progress: string;
  color: string;
}

const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 15px;
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 10px;

  div {
    width: ${({ progress }) => progress || '0%'};
    height: 100%;
    background-color: ${({ color }) => color || '#000'};
    border-radius: 5px;
  }
`;

const EmblemasBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  width: 300px;
`;

const EmblemaItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
`;

// React Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <Logo>
          <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
          <span>Quack()</span>
        </Logo>
        <SidebarItem>
          <img src="icon-aprender.svg" alt="Aprender icon" />
          Aprender
        </SidebarItem>
        <SidebarItem>
          <img src="icon-ranking.svg" alt="Ranking icon" />
          Rankings
        </SidebarItem>
        <SidebarItem>
          <img src="icon-perfil.svg" alt="Perfil icon" />
          Perfil
        </SidebarItem>
        <SidebarItem>
          <img src="icon-missoes.svg" alt="Missões icon" />
          Missões
        </SidebarItem>
        <SidebarItem>
          <img src="icon-loja.svg" alt="Loja icon" />
          Loja
        </SidebarItem>
        <SidebarItem>
          <img src="icon-opcoes.svg" alt="Opções icon" />
          Opções
        </SidebarItem>
        <SidebarItem>
          <img src="icon-sair.svg" alt="Sair icon" />
          Sair
        </SidebarItem>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        {/* Header */}
        <Header>
          <InvestidaBox>
            Investida de 3 dias!
            <div>
            <img src="/src/Icons/fire.svg" alt="Estrela icon" />
            <img src="/src/Icons/fire.svg" alt="Estrela icon" />
            <img src="/src/Icons/fire.svg" alt="Estrela icon" />
            <img src="/src/Icons/no-fire.svg" alt="Void icon" />
            <img src="/src/Icons/no-fire.svg" alt="Void icon" />
            <img src="/src/Icons/no-fire.svg" alt="Void icon" />
            <img src="/src/Icons/no-fire.svg" alt="Void icon" />
            </div>
          </InvestidaBox>

          <SearchBar>
            <Input type="search" placeholder="Pesquisar por nome..." />
            <img src="icon-search.svg" alt="Search icon" />
            <img src="icon-microphone.svg" alt="Mic icon" />
          </SearchBar>
        </Header>

        {/* Módulos */}
        <Titulo>Módulos</Titulo>
        <ModuloCard bgColor="#FFEB99">
          <div>
            <p>Roadmap 1</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Lógica de Programação</h3>
            <a>Módulo Completo!</a>
            </div>
            <ProgressBar progress="100%" color="#FFD700">
              <div></div>
            </ProgressBar>
          </div>
          <IconButton onClick={() => navigate("/Logica_Roadmap")} aria-label="voltar">
            <ArrowForwardIcon />
          </IconButton>
        </ModuloCard>

        <ModuloCard bgColor="#D9B3FF">
          <div>
            <p>Roadmap 2</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Frontend</h3>
            <a>Módulo Completo!</a>
            </div>
            <ProgressBar progress="100%" color="#8000FF">
              <div></div>
            </ProgressBar>
          </div>
          <IconButton onClick={() => navigate("/Frontend_Roadmap")} aria-label="voltar">
            <ArrowForwardIcon />
          </IconButton>
        </ModuloCard>

        <ModuloCard bgColor="#CCE0FF">
          <div>
            <p>Roadmap 3</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>DevOps</h3>
            <a>3/18 Aulas Completas</a>
            </div>
            <ProgressBar progress="20%" color="#1E90FF">
              <div></div>
            </ProgressBar>
          </div>
          <IconButton onClick={() => navigate("/DevOps_Roadmap")} aria-label="voltar">
            <ArrowForwardIcon />
          </IconButton>
        </ModuloCard>

        <ModuloCard bgColor="#CCFFCC">
          <div>
            <p>Roadmap 4</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Backend</h3>
            <a>0/18 Aulas Completas</a>
            </div>
            <ProgressBar progress="0%" color="#32CD32">
              <div></div>
            </ProgressBar>
          </div>
          <IconButton onClick={() => navigate("/Backend_Roadmap")} aria-label="voltar">
            <ArrowForwardIcon />
          </IconButton>
        </ModuloCard>

        {/* Emblemas */}
        <EmblemasBox>
          <h3>Emblemas em destaque</h3>
          <EmblemaItem>
            <img src="icon-fullstack.svg" alt="Fullstack icon" />
            <span>FullStack</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-frontend.svg" alt="Frontend icon" />
            <span>Frontend</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-backend.svg" alt="Backend icon" />
            <span>Backend</span>
          </EmblemaItem>
        </EmblemasBox>
      </MainContent>
    </Container>
  );
};

export default Home;
