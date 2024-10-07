import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Desafio from '../../Components/Desafio'; // O componente que você já criou
import FazerAtividade from '../../Components/FazerAtividade'; // O componente da nova atividade
import Aprender from '../../Components/Aprender';
import SideBar from '../../Components/SideBar';
import Rankings from '../../Components/Rankings';

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
      return <Rankings changeSection={setSection} />;
    }
  };

  return (
      <Container>
        <Routes>
          <Route path="/" element={<SideBar changeSection={setSection} />} />
        </Routes>
      {/* Botões para alternar entre as seções */}
      <MainContent>
        {renderSectionAprender()}
        {renderSectionFazerAtividade()}
        {renderSectionAtividade()}
        {renderSectionRankings()}
      </MainContent>
    </Container>
  );
};

export default Home;