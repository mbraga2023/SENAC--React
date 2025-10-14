import Contato from './pages/ContatoPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container pt-3">
        <nav className="text-center">
          <Link to="/" className="btn btn-outline-secondary btn-sm me-3">Adicionar Contatos</Link>
          <Link to="/" className="btn btn-outline-secondary btn-sm me-3">Listar Contatos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}
