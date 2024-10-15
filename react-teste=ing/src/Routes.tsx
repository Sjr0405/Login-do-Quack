import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login.tsx'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home.tsx';
import Aprender from './Components/Aprender.tsx';
import Atividade from './Components/Desafio.tsx';
import Rankings from './Components/Rankings.tsx';
import FazerAtividade from './Components/FazerAtividade.tsx';
import Perfil from './Components/Perfil.tsx';
import EditarPerfil from './Pages/EditarPerfil/EditarPerfil.tsx';
import { AuthProvider } from './AuthContext.tsx';
import GlobalStyles from './Styles/GlobalStyles.tsx';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Styles/Themes.tsx';
export { MainRoutes }

//Landpage Imports//
import Navigation from "./Pages/Landpage/Navigation.tsx"
import Landpage from "./Pages/Landpage/landpage/Landpage.tsx"
import About from "./Pages/Landpage/landpage/About.tsx"
import Showcase from "./Pages/Landpage/landpage/Showcase.tsx"
import Faq from "./Pages/Landpage/landpage/Faq.tsx"
import Footer from "./Pages/Landpage/Footer.tsx"
import Trilha from  "./Pages/Trilhas/index.tsx" 
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
          <Showcase /> 
          <Faq /> 
          <Footer /> 
          </div>} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/FazerAtividade" element={<FazerAtividade changeSection={(section: string) => console.log(section)} />} />
        <Route path="/Aprender" element={<Aprender changeSection={(section: string) => console.log(section)} />} />  
        <Route path="/Atividade" element={<Atividade changeSection={(section: string) => console.log(section)} />} />  
        <Route path="/Rankings" element={<Rankings />} />
        <Route path="/Perfil" element={<Perfil changeSection={(section: string) => console.log(section)} />} />
        <Route path="/EditarPerfil" element={<EditarPerfil changeSection={(section: string) => console.log(section)} />} />
        <Route path="/Trilhas" element={<Trilha />} />

      </Routes>
    </AuthProvider>


    
  );
}


