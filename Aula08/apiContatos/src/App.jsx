import { useState, useEffect } from 'react';
import Contato from './components/ContatoPage';
import ContatosList from './components/ContatoListPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Update `data-bs-theme` on <html> and save preference
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.setAttribute('data-bs-theme', 'dark');
    } else {
      html.removeAttribute('data-bs-theme');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className="container pt-3">
        <nav className="text-center mb-3">
          <Link to="/contatos" className="btn btn-outline-secondary btn-sm me-3">Adicionar Contatos</Link>
          <Link to="/" className="btn btn-outline-secondary btn-sm me-3">Listar Contatos</Link>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="btn btn-sm btn-outline-primary"
            style={{ verticalAlign: 'middle' }}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
        <Routes>
          <Route path="/contatos" element={<Contato />} />
          <Route path="/" element={<ContatosList />} />
          <Route path="/contatos/:id" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}
