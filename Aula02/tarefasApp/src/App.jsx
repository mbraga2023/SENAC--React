import TarefasSimples from "./pages/tarefasSimples";
import TarefasComStatus from "./pages/tarefasComStatus";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="container pt-3 ">
        <div className="container">
          <nav className="navbar bg-body-tertiary container-fluid justify-content-center">
            <Link className="btn btn-outline-primary btn-sm me-2" to="/">Tarefas Simples</Link>
            <Link className="btn btn-outline-primary btn-sm" to="/status">Tarefas Com Status</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<TarefasSimples />} />
          <Route path="/status" element={<TarefasComStatus />} />
        </Routes>
      </div>
    </Router>
  );
}
