import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">Home</Link>

        <div className="d-flex">
          <Link to="/" className="btn btn-outline-success me-2">Listar</Link>
          <Link to="/novo" className="btn btn-outline-success">Adicionar</Link>
        </div>
      </div>
    </nav>
  );
}
