import React, { useEffect, useState } from "react";

export default function LivroList() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    fetch("http://localhost:5000/livros")
      .then((res) => res.json())
      .then((data) => {
        console.log('Respondeu API: ')
        console.table(data)
        setLivros(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching livros:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container card p-0 mt-4">
      <div className="card-header text-center">
        <h4>Lista de Livros</h4>
      </div>
      <div className="card-body">
        <table className="table table-striped table-fixed" style={{ tableLayout: 'fixed', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ width: '7%' }}>ID</th>
              <th style={{ width: '25%' }}>Título</th>
              <th style={{ width: '12%' }}>Páginas</th>
              <th style={{ width: '15%' }}>Categoria</th>
              <th style={{ width: '40%' }}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.paginas}</td>
                <td>{livro.categoria}</td>
                <td>{livro.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
