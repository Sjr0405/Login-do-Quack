import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeuFormulario from './components/MeuFormulario';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MeuFormulario />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
