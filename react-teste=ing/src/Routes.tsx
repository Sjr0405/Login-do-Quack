import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/Login'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home';
import Aprender from './Components/Aprender';
import Atividade from './Components/Desafio';
import Rankings from './Components/Rankings';
import FazerAtividade from './Components/FazerAtividade';
import Perfil from './Components/Perfil';
import EditarPerfil from './Pages/EditarPerfil/EditarPerfil';
import { AuthProvider } from './AuthContext';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Styles/Themes';
import LandingPage from './Pages/LandingPage/LandingPage'; // Importando o componente LandingPage
import Trilhas from './Pages/Trilhas/Trilhas';

export { MainRoutes }

function MainRoutes() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <ThemeProvider theme={light || dark}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/FazerAtividade" element={<FazerAtividade changeSection={(section: string) => console.log(section)} />} />
          <Route path="/Aprender" element={<Aprender changeSection={(section: string) => console.log(section)} />} />  
          <Route path="/Atividade" element={<Atividade changeSection={(section: string) => console.log(section)} />} />  
          <Route path="/Rankings" element={<Rankings />} />
          <Route path="/Perfil" element={<Perfil changeSection={(section: string) => console.log(section)} />} />
          <Route path="/EditarPerfil" element={<EditarPerfil />} />
          <Route path="/Backend_Roadmap" element={<Trilhas />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}