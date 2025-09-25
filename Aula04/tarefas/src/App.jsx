import TarefasSimples from "./pages/TarefasSimples";
import TarefasComStatus from "./pages/TarefasComStatus";
import ListaSupermercado from "./pages/ListaSupermercado";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" 

export default function App(){

  // Criar a estrutura de rotas de navegação
  return (
    <Router>
      <div className="container pt-3">
        <nav className="text-center">
          <Link to="/" className="btn btn-outline-secondary btn-sm me-3">Tarefas Simples</Link>
          <Link to="/status" className="btn btn-outline-primary btn-sm me-3">Tarefas com Status</Link>
          <Link to="/lista-mercado" className="btn btn-outline-primary btn-sm">Lista Mercado</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TarefasSimples />} />
          <Route path="/status" element={<TarefasComStatus />} />
          <Route path="/lista-mercado" element={<ListaSupermercado />} />
        </Routes>
      </div>
    </Router>
  )
}