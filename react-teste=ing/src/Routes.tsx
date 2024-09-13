import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login.tsx'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Dashboard from './Pages/Dashboard/Dashboard';
import { AuthProvider } from './AuthContext.tsx';
export { MainRoutes }

//Landpage Imports//
import Home from "./Pages/Home/Home.tsx"
import About from "./Pages/Home/About.tsx"
import Roadmap from "./Pages/Home/Roadmap.tsx"
import Showcase from "./Pages/Home/Showcase.tsx"
import Team from "./Pages/Home/Team.tsx"
import Faq from "./Pages/Home/Faq.tsx"
import Footer from "./Pages/Home/Footer.tsx"
import Navigation from "./Pages/Home/Navigation.tsx"
//Landpage imports// 


function MainRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>

      Bloco Global de Componentes
      <>
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Faq />
          <Footer />
      </>
    </AuthProvider>
  );
}


