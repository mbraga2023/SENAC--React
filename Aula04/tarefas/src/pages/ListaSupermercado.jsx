import { useEffect, useState } from "react"

export default function ListaSupermercado() {
  const [itens, setItens] = useState([])
  const [novoItem, setNovoItem] = useState("")


  function adicionarItem() {
    if (!novoItem.trim()) return
    const novo = { nome: novoItem, comprado: false }
    setItens([...itens, novo])
    setNovoItem([])
  }

  function marcarComoComprado(index) {
    const listaAtualizada = itens.map((item, i) =>
      i === index ? { ...item, comprado: true } : item
    )
    setItens(listaAtualizada)
  }

  function ordenarItens() {
    const listaOrdenada = [...itens].sort((a, b) =>
      a.nome.localeCompare(b.nome)
    )
    setItens(listaOrdenada)
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Lista de Supermercado</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite um item (ex: arroz, leite, pão...)"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && adicionarItem()}
        />
        <button className="btn btn-success" onClick={adicionarItem}>
          Adicionar
        </button>
        <button className="btn btn-warning btn-sm" onClick={ordenarItens}>
          Ordenar Itens
        </button>
      </div>

      <ul className="list-group">
        {itens.length === 0 && (
          <li className="list-group-item text-center text-muted">
            Nenhum item adicionado
          </li>
        )}
        {itens.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              style={{
                textDecoration: item.comprado ? "line-through" : "none",
                color: item.comprado ? "gray" : "black",
              }}
            >
              {item.nome}
            </span>
            {!item.comprado && (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => marcarComoComprado(index)}
              >
                Marcar como Comprado
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

