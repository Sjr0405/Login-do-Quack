import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Desafio from '../../Components/Desafio'; 
import FazerAtividade from '../../Components/FazerAtividade'; 
import Aprender from '../../Components/Aprender';
import SideBar from '../../Components/SideBar';
import Rankings from '../../Components/Rankings';
import Perfil from '../../Components/Perfil';

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  overflow-y: auto;
`;

const Home = () => {
  const [section, setSection] = useState('Aprender');
  const location = useLocation(); // Hook para acessar o estado da navegação

  // Verifica se o estado 'section' foi passado e ajusta a seção inicial
  useEffect(() => {
    if (location.state?.section) {
      setSection(location.state.section);
    }
  }, [location]);

  const renderSectionAprender = () => {
    if (section === 'Aprender') {
      return <Aprender changeSection={setSection} />;
    }
  };

  const renderSectionFazerAtividade = () => {
    if (section === 'FazerAtividade') {
      return <FazerAtividade changeSection={setSection} />;
    }
  };

  const renderSectionAtividade = () => {
    if (section === 'Desafio') {
      return <Desafio changeSection={setSection} />;
    }
  };

  const renderSectionRankings = () => {
    if (section === 'Rankings') {
      return <Rankings />;
    }
  };

  const renderSectionPerfil = () => {
    if (section === 'Perfil') {
      return <Perfil changeSection={setSection} />;
    }
  };

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SideBar changeSection={setSection} />} />
      </Routes>

      <MainContent>
        {renderSectionAprender()}
        {renderSectionFazerAtividade()}
        {renderSectionAtividade()}
        {renderSectionRankings()}
        {renderSectionPerfil()}
      </MainContent>
    </Container>
  );
};

export default Home;
