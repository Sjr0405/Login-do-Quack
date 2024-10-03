import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Desafio from './Desafio'; // O componente que você já criou
import FazerAtividade from './FazerAtividade'; // O componente da nova atividade
import Aprender from './Aprender';
import SideBar from './SideBar';

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
      </MainContent>
    </Container>
  );
};

export default Home;