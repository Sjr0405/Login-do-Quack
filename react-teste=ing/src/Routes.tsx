import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Home/Login'; 
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha'; 
import Cadastro from './Pages/Cadastro/Cadastro';
import Dashboard from './Pages/Dashboard/Dashboard';
import { AuthProvider } from './AuthContext.tsx';
export { MainRoutes }


function MainRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/Cadastro" element={< Cadastro />} />
        <Route path="/EsqueciSenha" element={< EsqueciSenha />} />
        <Route path="/Dashboard" element={< Dashboard />} />
      </Routes>
    </AuthProvider>
  );
}

