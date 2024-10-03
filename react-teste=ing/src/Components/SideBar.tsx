import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarItemBase = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  img {
    margin-right: 5px;
    padding: 5px;
  }
`;

const SelectedSidebarItem = styled(SidebarItemBase)`
  background-color: rgba(251, 123, 5, 0.05);
  color: #FB7901;
  border: 1px solid #FB7901;
`;

const SidebarItem = styled(SidebarItemBase)`
  color: #000;

  &:hover {
    color: #FB7901;
    border: 1px solid #FB7901;
    background-color: rgba(251, 123, 5, 0.05);
  }
`;

const SairSidebarItem = styled(SidebarItemBase)`
  color: #ff4a4a;

  &:hover {
    border: 1px solid #ff4a4a;
    background-color: rgba(255, 62, 65, 0.05);
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
    cursor: pointer;
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


const SideBar = ( { changeSection }: { changeSection: (section: string) => void } ) => {
  const navigate = useNavigate();

  return (


<Sidebar>
    <Logo onClick={() => changeSection('Aprender')}>
        <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
        <span>Quack()</span>
    </Logo>
        <SelectedSidebarItem onClick={() => changeSection('Aprender')}>
        <img src="/src/svgs/Home-svgs/Books.svg" alt="Aprender" />
        Aprender
        </SelectedSidebarItem>
        <SidebarItem onClick={() => navigate('/Login')}>
        <img src="/src/svgs/Home-svgs/Ranking.svg" alt="Ranking" />
        Rankings
        </SidebarItem>
        <SidebarItem onClick={() => navigate('/Login')}>
        <img src="/src/svgs/Home-svgs/User.svg" alt="Perfil" />
        Perfil
        </SidebarItem>
        <SidebarItem onClick={() => navigate('/Login')}>
        <img src="/src/svgs/Home-svgs/Alvo.svg" alt="Missões" />
        Missões
        </SidebarItem>
        <SidebarItem onClick={() => navigate('/Login')}>
        <img src="/src/svgs/Home-svgs/Loja.svg" alt="Loja" />
        Loja
        </SidebarItem>
        <SidebarItem onClick={() => navigate('/Login')}>
        <img src="/src/svgs/Home-svgs/Configuracao.svg" alt="Opções" />
        Opções
        </SidebarItem>
        <SairSidebarItem onClick={() => navigate('/Login')}>
        <img src="/src/svgs/Home-svgs/Logout.svg" alt="Sair" />
        Sair
        </SairSidebarItem>
    </Sidebar>
    );
    };

export default SideBar;