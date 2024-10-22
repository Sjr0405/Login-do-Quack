import styled from 'styled-components';

const Vector = styled.div`
  /* Posicionando os SVGs individualmente */
  .svg7 {
    position: absolute;
    top: 0%;
    right: 0%;
    width: auto;
    height: auto;
    z-index: 1; /* SVGs ficam atrás de tudo */
  }
`;

// Seção principal
const Section = styled.section`
  grid-template-columns: repeat(12, 1fr); // Define a grid com 12 colunas
  align-items: center;
  position: relative;
  height: 60vh;
  padding: 50px 20px;
  background-color: #1D1534; // Cor de fundo roxa escura da seção
  z-index: 1;
`;

// Contêiner do conteúdo
const Container = styled.div`
  align-items: center;
  position: relative;
  width: 90%;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  max-width: 1000px;
  z-index: 2;
`;

// Título centralizado
const Title = styled.h2`
  margin-top: 20%;
  justify-self: center;
  position: relative;
  grid-column: span 3;
  font-size: 42px;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  z-index: 2;
`;

// Estilizando os cards
const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 2;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    text-align: left; 
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;  
    transition: color 0.3s ease;
    

  &:hover{
    cursor: pointer;
    color: #eb832e;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 16px;
  }
`;

const Showcase = () => {
  return (
    <Section id="showcase">
      <Container>
        <Title>Trilhas mais populares</Title>
        {/* Card 1 */}
        <Card>
          <img src="/src/Assets/Placeholders/placeholder7.svg" alt="Lógica de Programação" />
          <h3>Lógica de Programação</h3>
          <p>Aprenda os fundamentos essenciais da programação, algoritmos e resolução de problemas. Ideal para iniciantes.</p>
        </Card>

        {/* Card 2 */}
        <Card>
          <img src="/src/Assets/Placeholders/placeholder8.svg" alt="Frontend" />
          <h3>Frontend</h3>
          <p>Domine HTML, CSS, JavaScript e frameworks como React. Crie interfaces de usuário atraentes e responsivas.</p>
        </Card>

        {/* Card 3 */}
        <Card>
          <img src="/src/Assets/Placeholders/placeholder9.svg" alt="DevOps" />
          <h3>DevOps</h3>
          <p>Aprenda CI/CD, automação, Docker, Kubernetes e práticas de DevOps. Obtenha certificações reconhecidas no setor.</p>
        </Card>
      </Container>
      <Vector>
        <img className="svg7" src="/src/svgs/Landpage-svgs/7.svg" alt="svg" />
      </Vector>
    </Section>
  );
}

export default Showcase;
