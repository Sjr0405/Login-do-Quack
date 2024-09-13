import process from 'process';
import styled from '@emotion/styled/macro';
import "./Home.css"


const Section = styled.section`
min height: ${props => `calc(100vh - ${props})`   };
with: 100vw;
position: relative;

`

const Container = styled.div`
width:75%;
height: 80vh;
margin: 0 auto;
background-color: lightblue;
`

const Home = () => {
    return (
        <Section>
            <Container>
                <h1>O QUE É QUACK()</h1> 
                <h1>TRILHAS</h1> 
                <h1>SOBRE</h1> 
                <h1>CONTATO</h1> 
                <h1>CRIAR CONTA GRATUITA</h1> 
                <button>ENTRAR</button>
            </Container>
        </Section>
    )
}

export default Home
