import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Container principal
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

// Seção do perfil
const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 80%;
  margin: 20px 0;
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

// Coleção de emblemas
const BadgeCollection = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const BadgeTitle = styled.h3`
  color: #ff6f00;
  font-size: 24px;
  margin-bottom: 10px;
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
  width: 40%;
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

const ProgressBar = styled.div`
  width: 100%;
  background-color: #eaeaea;
  border-radius: 10px;
  height: 15px;
  margin-left: 15px;
`;

const Progress = styled.div`
  width: 60%; /* Aqui você pode ajustar o progresso */
  background-color: #ff6f00;
  height: 100%;
  border-radius: 10px;
`;

// Botão "Acesse nossa loja!"
const StoreButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #ff6f00;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ff9a3e;
  }
`;

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {

  const navigate = useNavigate();

  return (
    <ProfileContainer>
      <StoreButton onClick={() => changeSection('Loja')}>Acesse nossa loja!</StoreButton>

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

      <BadgeTitle>Coleção de emblemas:</BadgeTitle>
      <BadgeCollection>
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

      <StatsTitle>Estatísticas:</StatsTitle>
      <StatsSection>
        <StatsGrid>
          <StatItem>
            <StatLabel>Dias de investida</StatLabel>
            <StatValue>24</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Nível</StatLabel>
            <ProgressBar>
              <Progress />
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
    </ProfileContainer>
  );
};

export default Perfil;
