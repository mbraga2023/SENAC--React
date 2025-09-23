import TarefasSimples from "./pages/TarefasSimples";
import TarefasComStatus from "./pages/TarefasComStatus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" 

export default function App(){

  // Criar a estrutura de rotas de navegação
  return (
    <Router>
      <div className="container pt-3">
        <nav className="text-center">
          <Link to="/" className="btn btn-outline-secondary btn-sm me-3">Tarefas Simples</Link>
          <Link to="/status" className="btn btn-outline-primary btn-sm">Tarefas com Status</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TarefasSimples />} />
          <Route path="/status" element={<TarefasComStatus />} />
        </Routes>
      </div>
    </Router>
  )
}