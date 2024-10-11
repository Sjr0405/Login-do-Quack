import { useEffect ,useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Input } from "@mui/material";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  width: 100%;
  height: auto;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 80%;
  margin: 20px 0;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 5px solid #ff6f00;
`;

const EditIcon = styled.div`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

// Informações do perfil
const ProfileInfo = styled.div`
  text-align: left;
  margin-left: 20px;

  h2 {
    font-size: 28px;
    margin: 0;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #666;
  }

  span {
    color: #4f4cfc;
    font-size: 18px;
    font-weight: bold;
  }

  .ranking {
    color: #ff6f00;
    font-size: 20px;
    font-weight: bold;
  }
`;

const BadgeTitle = styled.h3`
  color: #ff6f00;
  font-size: 24px;
  margin-bottom: 10px;
`;

const BadgeCollection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BadgeItem = styled.div`
  text-align: center;

  img {
    width: 80px;
    height: 80px;
  }

  p {
    font-size: 14px;
    margin-top: 10px;
    color: #333;
  }
`;

// Estatísticas
const StatsSection = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const StatsTitle = styled.h3`
  color: #ff6f00;
  font-size: 24px;
  margin-bottom: 10px;
`;

const StatsGrid = styled.div`
  align-items: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StatLabel = styled.p`
  font-size: 16px;
  color: #333;
`;

const StatValue = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #ff6f00;
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
    background-color:#ff6f00;
    border-radius: 5px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;

  h1 {
    font-size: 36px;
    font-family: 'Lilita One', sans-serif;
    font-weight: 500;
    position: absolute;
    left: 25%;
    top: 3%;
  }
`;

const StoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 2%;
  padding: 10px 20px;
  gap: 10px;
  background-color: #FF3E41;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Lilita One', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #e62e33;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;

  Input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 18px;
  }

  img {
    cursor: pointer;
  }
`;

interface Modulo {
  nome: string;
  XpAtual: number;
  XpTotal: number;
  rota: string;
  icon: string;
}

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {

  const navigate = useNavigate();
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [exactMatches, setExactMatches] = useState<Modulo[]>([]);
  const [similarMatches, setSimilarMatches] = useState<Modulo[]>([]);

  // Simulação da busca de dados do banco de dados
  useEffect(() => {
    // Aqui você integraria a chamada para o banco de dados real
    const fetchModulos = async () => {
      // Exemplo: chamada à API ou banco de dados
      const dadosDoBanco = [
        { nome: 'Thigas', XpAtual: 1000, XpTotal: 1500, rota: 'Logica_Programacao', icon: '/src/svgs/Home-svgs/Programacao.svg' },
      ];

      setModulos(dadosDoBanco);
    };

    fetchModulos();
  }, []);

  useEffect(() => {
    const exact = modulos.filter(modulo => modulo.nome.toLowerCase() === searchTerm.toLowerCase());
    const similar = modulos.filter(modulo => 
      modulo.nome.toLowerCase().includes(searchTerm.toLowerCase()) && 
      modulo.nome.toLowerCase() !== searchTerm.toLowerCase()
    );

    setExactMatches(exact);
    setSimilarMatches(similar);
  }, [searchTerm, modulos]);

  const calcularProgressoXp = (XpAtual: number, XpTotal: number) => {
    if (XpTotal === 0) return '0%';
    const progresso = (XpAtual / XpTotal) * 100;
    return `${progresso}%`;
  };

  return (
    <ProfileContainer>

      <Header>

      <h1>Seu Perfil</h1>

      <SearchBar>
            <Input
              type="search"
              placeholder="Pesquisar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>

      <StoreButton onClick={() => changeSection('Loja')}> <img src="/src/svgs/Home-svgs/Perfil/Loja.svg" alt="Icône de loja" />Acesse nossa loja!</StoreButton>
      </Header>
      
      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto do perfil" />
        </ProfileImageContainer>
        <ProfileInfo>
          <h2>Thiago de Andrade</h2>
          <p>
            Título: <span>Quacktólico()</span>
          </p>
          <p>thigassocial@quack.com</p>
          <p>
            Aluno desde Janeiro de <span>2023</span>
          </p>
          <p>
            Ranking: <span className="ranking">#30</span>
          </p>
        </ProfileInfo>
        <EditIcon onClick={() => navigate('/EditarPerfil')}>
            <img src="/src/svgs/Home-svgs/Perfil/Pencil.svg" alt="Icône de editar" />
          </EditIcon>
      </ProfileSection>


    <MainContent>

    {similarMatches.map((modulo, index) => (
    <BadgeCollection>
      <BadgeTitle>Coleção de emblemas:</BadgeTitle>
        <BadgeGrid>
          <BadgeItem>
            <img src="/path/to/badge1.svg" alt="Emblema 1" />
            <p>Introdução à Programação</p>
          </BadgeItem>
          <BadgeItem>
            <img src="/path/to/badge2.svg" alt="Emblema 2" />
            <p>Fundamentos de Algoritmos</p>
          </BadgeItem>
          <BadgeItem>
            <img src="/path/to/badge3.svg" alt="Emblema 3" />
            <p>Programação Estruturada</p>
          </BadgeItem>
          <BadgeItem>
            <img src="/path/to/badge4.svg" alt="Emblema 4" />
            <p>Desenvolvimento Web</p>
          </BadgeItem>
          {/* Outros emblemas */}
        </BadgeGrid>
      </BadgeCollection>
    ))}

    {similarMatches.map((modulo, index) => (
      <StatsSection>  
      <StatsTitle>Estatísticas:</StatsTitle>
        <StatsGrid>
          <StatItem>
            <StatLabel key={index}>Dias de investida</StatLabel>
            <StatValue>24</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Nível</StatLabel>
            <ProgressBar>
              <div style={{ width: calcularProgressoXp(modulo.XpAtual, modulo.XpTotal), fontFamily: 'Lilia', color: 'white' }}> ({calcularProgressoXp(modulo.XpAtual, modulo.XpTotal)}) </div>
            </ProgressBar>
          </StatItem>
          <StatItem>
            <StatLabel>Desafios concluídos</StatLabel>
            <StatValue>24</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Lições completadas</StatLabel>
            <StatValue>42</StatValue>
          </StatItem>
        </StatsGrid>
      </StatsSection>
    ))}

      </MainContent>
    </ProfileContainer>
  );
};

export default Perfil;
