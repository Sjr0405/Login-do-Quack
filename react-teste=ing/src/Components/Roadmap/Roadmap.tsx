// src/components/Roadmap/Roadmap.tsx
import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import Footer from './Footer';
import './Roadmap.css';

const Roadmap: React.FC = () => {
  return (
    <div className="roadmap">
      <Navbar />
      <div className="main-content">
        <Section title="Internet" content="Conteúdo sobre Internet." />
        <Section title="Basic Frontend Knowledge" content="Conteúdo sobre conhecimentos básicos de frontend." />
        <Section title="OS and General Knowledge" content="Conteúdo sobre sistemas operacionais e conhecimentos gerais." />
        <Section title="Languages" content="Conteúdo sobre linguagens de programação." />
        <Section title="Version Control Systems" content="Conteúdo sobre sistemas de controle de versão." />
        <Section title="Databases" content="Conteúdo sobre bancos de dados." />
        <Section title="APIs" content="Conteúdo sobre APIs." />
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
