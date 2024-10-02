import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
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

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

const TopBarItem = styled.div`
  margin-bottom: 20px;
  align-items: center;
  border-right: 1px solid #BFB9B9;
  padding: 10px 50px;
  
  a {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #7A5FF5;
      text-decoration: underline;
    }
  }
`;

const SelectedTopBarItem = styled(TopBarItem)`
  color: #7A5FF5;
  text-decoration: underline;
`;

const CodeEditorContainer = styled.div`
  display: flex;
  height: 75%;
  padding: 20px;
  background-color: #F4F4F9;
  justify-content: center;
`;

// Definindo o tema da IDE
const CodeEditor = styled.pre`
  background-color: #1e1e1e; /* Cor de fundo escura típica de uma IDE */
  color: #d4d4d4; /* Cor padrão do texto */
  font-family: 'Source Code Pro', monospace; /* Fonte popular para editores de código */
  font-size: 16px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #333;
  overflow: auto;
  white-space: pre-wrap;
  tab-size: 8;
  line-height: 1.5;
  max-height: 100%;
`;

// Destaque de sintaxe simulando uma IDE
const Keyword = styled.span`
  color: #569cd6; /* Cor das palavras-chave, ex: public, int */
`;

const Method = styled.span`
  color: #dcdcaa; /* Cor dos nomes de métodos */
`;

const Variable = styled.span`
  color: #9cdcfe; /* Cor de variáveis e parâmetros */
`;

const Number = styled.span`
  color: #b5cea8; /* Cor de números */
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background-color: #7A5FF5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// Lasagna.js (definir a classe Lasagna fora do componente para poder ser testada)
export class Lasagna {
  expectedMinutesInOven() {
    return 40;
  }

  remainingMinutesInOven(actualMinutesInOven) {
    return 40 - actualMinutesInOven;
  }

  preparationTimeInMinutes(layers) {
    return layers * 2;
  }

  totalTimeInMinutes(layers, actualMinutesInOven) {
    return this.preparationTimeInMinutes(layers) + actualMinutesInOven;
  }
}


const FazerAtividade = () => {
  const navigate = useNavigate();
  const rodarTeste = () => {
    try {
      const lasagna = new Lasagna();
  
      // Teste 1: expectedMinutesInOven
      const Cond1 = 40;
      const result1 = lasagna.expectedMinutesInOven();
      if (result1 !== Cond1) {
        throw new Error(`Erro no teste expectedMinutesInOven: Esperado ${Cond1}, mas obteve ${result1}`);
      }
  
      // Teste 2: remainingMinutesInOven
      const Cond2 = 30;
      const result2 = lasagna.remainingMinutesInOven(10);
      if (result2 !== Cond2) {
        throw new Error(`Erro no teste remainingMinutesInOven: Esperado ${Cond2} com 10 minutos no forno, mas obteve ${result2}`);
      }
  
      // Teste 3: preparationTimeInMinutes
      const Cond3 = 4;
      const result3 = lasagna.preparationTimeInMinutes(2);
      if (result3 !== Cond3) {
        throw new Error(`Erro no teste preparationTimeInMinutes: Esperado ${Cond3} minutos com 2 camadas, mas obteve ${result3}`);
      }
  
      // Teste 4: totalTimeInMinutes
      const Cond4 = 24;
      const result4 = lasagna.totalTimeInMinutes(2, 20);
      if (result4 !== Cond4) {
        throw new Error(`Erro no teste totalTimeInMinutes: Esperado ${Cond4} minutos no total com 2 camadas e 20 minutos no forno, mas obteve ${result4}`);
      }
  
      // Se todos os testes passarem
      Swal.fire('Sucesso!', 'Todos os testes passaram com sucesso.', 'success').then(() => {
        navigate('/CodeReview');
      });
  
    } catch (error) {
      // Mensagem específica do erro
      Swal.fire({
        icon: 'error',
        title: 'Falha no Teste',
        text: error.message,
        footer: `<a href="/FazerAtividade" style="color: #eb832e;">Clique aqui ver o log</a>`
      });
    }
  };

  return (
    <Container>
      <MainContent>
        <Header>
          <TopBar>
            <TopBarItem onClick={() => navigate('/Atividade')}>
              <a>Visão Geral</a>
            </TopBarItem>
            <SelectedTopBarItem onClick={() => navigate('/FazerAtividade')}>
              <a>Fazer Atividade</a>
            </SelectedTopBarItem>
            <TopBarItem onClick={() => navigate('/SolicitarAjuda')}>
              <a>Solicitar Quacksensei</a>
            </TopBarItem>
            <TopBarItem onClick={() => navigate('/CodeReview')}>
              <a>Code Review</a>
            </TopBarItem>
            <TopBarItem onClick={() => navigate('/Respostas')} style={{ border: 'none' }}>
              <a>Respostas</a>
            </TopBarItem>
          </TopBar>
        </Header>
          {/* Code Editor */}
        <CodeEditorContainer>
        <CodeEditor>
    {`
`}
    <Keyword>public</Keyword> <Keyword>class</Keyword> <Method>Lasagna</Method> {'{\n\n'}
    <Keyword>  public</Keyword> <Keyword>int</Keyword> <Method>expectedMinutesInOven</Method>() {'{\n'}
    {'    '}<Keyword>return</Keyword> <Number>40</Number>;{'\n'}
    {'  }'}{'\n\n'}
    <Keyword>  public</Keyword> <Keyword>int</Keyword> <Method>remainingMinutesInOven</Method>(<Keyword>int</Keyword> <Variable>actualMinutesInOven</Variable>) {'{\n'}
    {'    '}<Keyword>return</Keyword> <Number>40</Number> - <Variable>actualMinutesInOven</Variable>;{'\n'}
    {'  }'}{'\n\n'}
    <Keyword>  public</Keyword> <Keyword>int</Keyword> <Method>preparationTimeInMinutes</Method>(<Keyword>int</Keyword> <Variable>layers</Variable>) {'{\n'}
    {'    '}<Keyword>return</Keyword> <Variable>layers</Variable> * <Number>2</Number>;{'\n'}
    {'  }'}{'\n\n'}
    <Keyword>  public</Keyword> <Keyword>int</Keyword> <Method>totalTimeInMinutes</Method>(<Keyword>int</Keyword> <Variable>layers</Variable>, <Keyword>int</Keyword> <Variable>actualMinutesInOven</Variable>) {'{\n'}
    {'    '}<Keyword>return</Keyword> <Method>preparationTimeInMinutes</Method>(<Variable>layers</Variable>) + <Variable>actualMinutesInOven</Variable>;{'\n'}
    {'  }'}{'\n\n'}
    {'}'}
  </CodeEditor>
        </CodeEditorContainer>

        {/* Action Buttons */}
        <ActionButtonsContainer>
        <ActionButton onClick={rodarTeste}>Rodar teste</ActionButton>
          <ActionButton onClick={() => {
            Swal.fire('Sucesso!', 'Atividade enviada com sucesso.', 'success').then(() => {
              navigate('/Respostas');
            });
          }}>Enviar</ActionButton>
        </ActionButtonsContainer>
      </MainContent>
    </Container>
  );
};

export default FazerAtividade;
