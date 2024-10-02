import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login.tsx'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home.tsx';
import Aprender from './Pages/Home/Aprender.tsx';
import Atividade from './Pages/Home/Atividade.tsx';
import FazerAtividade from './Pages/Home/FazerAtividade.tsx';
import { AuthProvider } from './AuthContext.tsx';
import GlobalStyles from './Styles/GlobalStyles.tsx';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Styles/Themes.tsx';
export { MainRoutes }

//Landpage Imports//
import Navigation from "./Pages/Landpage/Navigation.tsx"
import Landpage from "./Pages/Landpage/landpage/Landpage.tsx"
import About from "./Pages/Landpage/landpage/About.tsx"
import Roadmap from "./Pages/Landpage/landpage/Roadmap.tsx"
import Showcase from "./Pages/Landpage/landpage/Showcase.tsx"
// import Team from "./Pages/Landpage/landpage/Team.tsx"
import Faq from "./Pages/Landpage/landpage/Faq.tsx"
import Footer from "./Pages/Landpage/Footer.tsx"
//Landpage imports// 


function MainRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <div>
          <GlobalStyles /> 
          <ThemeProvider theme={light|| dark}/> 
          <Navigation /> 
          <Landpage /> 
          <About /> 
          <Roadmap /> 
          <Showcase /> 
          {/* <Team />  */}
          <Faq /> 
          <Footer /> 
          </div>} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/FazerAtividade" element={<FazerAtividade />} />
        <Route path="/Aprender" element={<Aprender />} />  
        <Route path="/Atividade" element={<Atividade />} />  
      </Routes>
    </AuthProvider>


    
  );
}


