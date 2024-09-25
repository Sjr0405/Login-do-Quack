import styled from 'styled-components';

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
  background-color: #fceba6;
  padding: 10px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #ff9800;
  font-weight: bold;
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

const ModuloCard = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;

  h3 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  span {
    font-size: 14px;
    color: #888;
  }

  button {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

interface ProgressBarProps {
  progress: string;
  color: string;
}

const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 10px;
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
  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <SidebarItem>
          <img src="logo.svg" alt="Quack logo" />
          Quack
        </SidebarItem>
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
          <InvestidaBox>Investida de 3 dias!</InvestidaBox>

          <SearchBar>
            <input type="text" placeholder="Pesquisar por nome..." />
            <img src="icon-microphone.svg" alt="Mic icon" />
          </SearchBar>
        </Header>

        {/* Módulos */}
        <h2>Módulos</h2>
        <ModuloCard bgColor="#ffeb99">
          <div>
            <h3>Lógica de Pr00gramação</h3>
            <span>Módulo Completo!</span>
            <ProgressBar progress="100%" color="#FFD700">
              <div></div>
            </ProgressBar>
          </div>
          <button>→</button>
        </ModuloCard>

        <ModuloCard bgColor="#d9b3ff">
          <div>
            <h3>Frontend</h3>
            <span>Módulo Completo!</span>
            <ProgressBar progress="100%" color="#8000FF">
              <div></div>
            </ProgressBar>
          </div>
          <button>→</button>
        </ModuloCard>

        <ModuloCard bgColor="#cce0ff">
          <div>
            <h3>DevOps</h3>
            <span>3/18 Aulas Completas</span>
            <ProgressBar progress="20%" color="#1E90FF">
              <div></div>
            </ProgressBar>
          </div>
          <button>→</button>
        </ModuloCard>

        <ModuloCard bgColor="#ccffcc">
          <div>
            <h3>Backend</h3>
            <span>0/18 Aulas Completas</span>
            <ProgressBar progress="0%" color="#32CD32">
              <div></div>
            </ProgressBar>
          </div>
          <button>→</button>
        </ModuloCard>

        {/* Emblemas */}
        <EmblemasBox>
          <h3>Emblemas em destaque</h3>
          <EmblemaItem>
            <img src="icon-fullstack.svg" alt="Fullstack Junior" />
            <span>Fullstack Junior</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-algoritmos.svg" alt="Algoritmos" />
            <span>Algoritmos</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-devops.svg" alt="DevOps" />
            <span>DevOps</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-frontend.svg" alt="Frontend" />
            <span>Frontend</span>
          </EmblemaItem>
          <EmblemaItem>
            <img src="icon-backend.svg" alt="Backend" />
            <span>Backend</span>
          </EmblemaItem>
        </EmblemasBox>
      </MainContent>
    </Container>
  );
};

export default Home;
