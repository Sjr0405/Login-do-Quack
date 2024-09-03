import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Home/Login'; // Import the Login component
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha';
import Cadastro from './Pages/Cadastro/Cadastro';
export { MainRoutes }


function MainRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
      </Routes>
  );
}

