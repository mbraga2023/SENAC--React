import React, { useState } from 'react';
import api from '../services/api'; 
import Categorias from '../constants/categorias';

export default function Form() {
  const [titulo, setTitulo] = useState('');
  const [paginas, setPaginas] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLivro = {
      titulo,
      paginas: Number(paginas),
      categoria,
      descricao,
    };

    try {
      await api.post('/livros', newLivro);
      alert('Livro salvo com sucesso!');
      setTitulo('');
      setPaginas('');
      setCategoria('');
      setDescricao('');
    } catch (error) {
      alert('Erro ao salvar livro: ' + error.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center mb-4">Incluir Livro</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Páginas</label>
          <input
            type="number"
            className="form-control"
            value={paginas}
            onChange={(e) => setPaginas(e.target.value)}
            placeholder="Digite o número de páginas"
            required
          />
        </div>
       <div className="mb-3">
        <label className="form-label">Categoria</label>
        <select
          className="form-control"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="">Selecione uma categoria</option>
          {Object.values(Categorias).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Salvar Livro
        </button>
      </form>
    </div>
  );
}
