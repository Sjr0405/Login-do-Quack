import styled from 'styled-components';

// Grupo de SVGs com posicionamento específico
const Vector = styled.div`
  position: absolute;
  top: -20%;  // Ajuste para começar no topo
  left: 0;
  width: 100%; // Cobrir toda a largura do container
  height: auto;
  z-index: 1;
  overflow: hidden; // Garante que os itens que saem da área do Vector sejam cortados
  img {
    width: 100%; // O SVG ocupará toda a largura do Vector
    height: auto;
  }
`;

// Estilizando a seção principal
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #F7F5F9;
  z-index: 2;
`;

// Container que organiza os cards e o título
const Container = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 40px;
  width: 85%;
  margin: 0 auto;
  z-index: 2;
`;

// Estilizando o título
const Titulo = styled.h1`
  grid-column: 1 / -1;
  color: #333;
  font-size: 42px;
  text-align: center;
  font-weight: bold;
  margin-top: 0%;
  padding: 20px 0;
  z-index: 2;
`;

// Estilizando cada card
const Card = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%; // Ajusta a imagem para se adequar ao tamanho do card
    max-width: 350px; // Define um limite para a largura da imagem
    height: auto;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    text-align: center;
  }

  h3{
    text-align: center;

    &:hover {
      cursor: pointer;
      color: #4834d4;
    }
  }

  @media (max-width: 768px) {
    grid-column: span 6;
  }

  @media (max-width: 576px) {
    grid-column: span 12;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Vector>
        <img className="svg1" src="/src/svgs/Landpage-svgs/6.svg" alt="svg" />
      </Vector>
      <Container>
        <Titulo>
          O Quack() oferece recursos desenvolvidos para todos os estágios do aprendizado<br/> de programação
        </Titulo>
        <Card>
          <img src="/src/Assets/Placeholders/placeholder1.svg" alt="Trilhas de aprendizado" />
          <h3>Trilhas de aprendizado detalhadas</h3>
          <p>Precisa de um caminho claro e estruturado para aprender a programar? No Quack(), oferecemos trilhas de aprendizado que vão desde os conceitos básicos até habilidades avançadas.</p>
        </Card>
        <Card>
          <img src="/src/Assets/Placeholders/placeholder2.svg" alt="Gestão do aprendizado"/>
          <h3>Gestão do aprendizado</h3>
          <p>Acompanhe suas tarefas e progresso de forma flexível e dinâmica com quadros de tarefas integrados. Organize seus estudos e gere tempo de forma eficiente.</p>
        </Card>
        <Card>
          <img src="/src/Assets/Placeholders/placeholder3.svg" alt="Conquistas e Badges" />
          <h3>Conquistas e Badges</h3>
          <p>Conquiste badges ao completar trilhas de aprendizado, resolver problemas e participar ativamente da comunidade.</p>
        </Card>
        <Card>
          <img src="/src/Assets/Placeholders/placeholder4.svg" alt="Sistema de Pontuação" />
          <h3>Sistema de Pontuação e Recompensas</h3>
          <p>Ganhe pontos à medida que avança nos módulos de aprendizado e participe de desafios para desbloquear certificados e prêmios.</p>
        </Card>
        <Card>
          <img src="/src/Assets/Placeholders/placeholder5.svg" alt="Níveis e Progressão" />
          <h3>Níveis e Progressão</h3>
          <p>Avance por diferentes níveis de dificuldade e melhore suas habilidades, passando de iniciante a especialista.</p>
        </Card>
        <Card>
          <img src="/src/Assets/Placeholders/placeholder6.svg" alt="Desafios e Competições" />
          <h3>Desafios e Competições</h3>
          <p>Participe de desafios semanais e mensais para testar suas habilidades contra outros alunos. Suba no ranking e conquiste prêmios.</p>
        </Card>
      </Container>
    </Section>
  );
};

export default About;
