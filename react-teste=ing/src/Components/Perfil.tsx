import styled from 'styled-components';
import { useState } from 'react';
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;


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

const Content = styled.div`
  display: flex;
  `;

const BadgeCollectionContainer = styled.div`
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: #fff;
  width: fit-content;
  margin: 0 auto;
`;

const BadgeTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  color: #ff7f00;
  margin-bottom: 20px;
`;

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 15px;
  width: 150px;
  height: 150px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const BadgeImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const BadgeText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333;
`;

const StatsSection = styled.div`
  padding: 20px;
  border: 2px solid #000;
  border-radius: 15px;
  width: 350px;
  background-color: #fff;
  margin: 0 auto;
`;

const StatsTitle = styled.h2`
  font-size: 24px;
  color: #ff7f00;
  text-align: center;
  margin-bottom: 20px;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 15px;
  padding: 10px 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const StatIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const StatLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  color: #333;
`;

const StatValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #3b82f6;
  border-radius: 10px;
  margin-left: 10px;
  position: relative;
`;

const Progress = styled.div`
  width: 60%;
  height: 100%;
  background-color: #F6C761;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 12px;
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

const TabContainer = styled.div`
  margin-left: 36%;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const TabNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px;
`;

const TabButton = styled.div<{ active?: boolean }>`
  flex: 1;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => (active ? '#6e52fa' : '#bcbcbc')};
  border-bottom: 3px solid ${({ active }) => (active ? '#6e52fa' : '#e0e0e0')};
  padding-bottom: 5px;
  font-size: 16px;
`;

const TabContent = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

const Heading = styled.h3`
  color: #6e6e6e;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const SubText = styled.p`
  color: #bcbcbc;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

const Perfil = ({ changeSection }: { changeSection: (section: string) => void }) => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('NaAsa'); 

  return (
    <ProfileContainer>

    <Header>
      <h2>Seu Perfil</h2>
      <StoreButton onClick={() => changeSection('Loja')}>Acesse nossa loja!</StoreButton>
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

      <TabContainer>
      <TabNav>
        <TabButton active={activeTab === 'NaAsa'} onClick={() => setActiveTab('NaAsa')}>
          Na Asa
        </TabButton>
        <TabButton active={activeTab === 'NoLago'} onClick={() => setActiveTab('NoLago')}>
          No Lago
        </TabButton>
      </TabNav>

      <TabContent>
        {activeTab === 'NaAsa' && (
          <>
            <Heading>Todo grande pato começa sozinho!</Heading>
            <SubText>
              Explore o lago, siga outros patos e deixe seu voo ser acompanhado.
              Cada jornada começa com o primeiro quack!
            </SubText>
          </>
        )}
        {activeTab === 'NoLago' && (
          <>
            <Heading>Explore com os outros patos!</Heading>
            <SubText>
              No lago, você pode seguir patos, aprender novas habilidades e
              compartilhar suas jornadas com amigos.
            </SubText>
          </>
        )}
      </TabContent>
    </TabContainer>
          </ProfileSection>
          


      

        <Content>

        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5%' }}>
      <BadgeTitle>Coleção de emblemas:</BadgeTitle>
      <BadgeCollectionContainer>
      <BadgeGrid>
        <BadgeItem>
          <BadgeImage src="/path/to/badge1.svg" alt="Introdução à Programação" />
          <BadgeText>Introdução à Programação</BadgeText>
        </BadgeItem>
        <BadgeItem>
          <BadgeImage src="/path/to/badge2.svg" alt="Fundamentos de Algoritmos" />
          <BadgeText>Fundamentos de Algoritmos</BadgeText>
        </BadgeItem>
        <BadgeItem>
          <BadgeImage src="/path/to/badge3.svg" alt="Programação Estruturada" />
          <BadgeText>Programação Estruturada</BadgeText>
        </BadgeItem>
        <BadgeItem>
          <BadgeImage src="/path/to/badge4.svg" alt="Estruturas de Dados" />
          <BadgeText>Estruturas de Dados</BadgeText>
        </BadgeItem>
        <BadgeItem>
          <BadgeImage src="/path/to/badge5.svg" alt="Desenvolvimento Web" />
          <BadgeText>Desenvolvimento Web</BadgeText>
        </BadgeItem>
        <BadgeItem>
          <BadgeImage src="/path/to/badge6.svg" alt="Desenvolvimento de APIs" />
          <BadgeText>Desenvolvimento de APIs</BadgeText>
        </BadgeItem>
        <BadgeItem>
          <BadgeImage src="/path/to/badge7.svg" alt="DevOps" />
          <BadgeText>DevOps</BadgeText>
        </BadgeItem>
        <BadgeItem>
          <BadgeImage src="/path/to/badge8.svg" alt="Banco de Dados" />
          <BadgeText>Banco de Dados</BadgeText>
        </BadgeItem>
      </BadgeGrid>
    </BadgeCollectionContainer>
    </div>

      <StatsSection>
      <StatsTitle>Estatísticas:</StatsTitle>
        <StatsGrid>
          <StatItem>
            <StatIcon src="/path/to/icon1.svg" alt="Dias de investida" />
            <StatLabel>Dias de investida</StatLabel>
            <StatValue>24</StatValue>
          </StatItem>
          <StatItem>
            <StatIcon src="/path/to/icon2.svg" alt="Nível" />
            <StatLabel>Nível</StatLabel>
            <ProgressBar>
              <Progress />
            </ProgressBar>
          </StatItem>
          <StatItem>
            <StatIcon src="/path/to/icon3.svg" alt="Desafios concluídos" />
            <StatLabel>Desafios concluídos</StatLabel>
            <StatValue>24</StatValue>
          </StatItem>
          <StatItem>
            <StatIcon src="/path/to/icon4.svg" alt="Lições completadas" />
            <StatLabel>Lições completadas</StatLabel>
            <StatValue>42</StatValue>
          </StatItem>
        </StatsGrid>
      </StatsSection>

    </Content>
    </ProfileContainer>
  );
};

export default Perfil;
