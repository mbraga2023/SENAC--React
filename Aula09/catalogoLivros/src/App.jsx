import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LivroForm from './components/livroForm'
import Menu from './components/menu'
import LivroList from "./components/livroList";


export default function App() {
  return (
    <Router>
      <div className="container pt-3">
        <Menu />
        <Routes>
          <Route path="/" element={<LivroList />} />
          <Route path="/novo" element={<LivroForm />} />
          <Route path="/editar/:id" element={<LivroForm />} />
        </Routes>
        
      </div>
    </Router>
  );
}
