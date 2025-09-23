import { useState, useEffect } from "react"

export default function TarefasSimples() {
    const [listaDeTarefas, setListaTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    function adicionarTarefa() {
        if (novaTarefa.trim() === '') {
            return
        }
        setListaTarefas([...listaDeTarefas, novaTarefa])
        setNovaTarefa('')
    }
    function removerTarefa(posicaoNoIndex) {
        const listaAtualizada = listaDeTarefas.filter((tarefa, i) => {
            return i != posicaoNoIndex
        })
        setListaTarefas(listaAtualizada)
    }
    function ordenarTarefas() {
        const listaOrdenada = [...listaDeTarefas].sort((a, b)=>a.localeCompare(b))
        setListaTarefas(listaOrdenada)
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Tarefas simples</h1>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite a nova tarefa"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <button className="btn btn-primary" onClick={adicionarTarefa}>
                    Adicionar
                </button>
                <button className="btn btn-outline-primary" onClick={ordenarTarefas}>
                    Ordenar Tarefas
                </button>
            </div>

            <ul className="list-group">
                {listaDeTarefas.length == 0 && (
                    <li className="list-group-item text-center text-muted">
                        Nenhuma tarefa adicionada
                    </li>

                )}
                {listaDeTarefas.map((tarefas, posicaoNoIndex) =>
                    <li
                        key={posicaoNoIndex}
                        className="list-group-item d-flex justify-content-between">
                        {posicaoNoIndex} - {tarefas}

                        <button className="btn btn-danger"
                            onClick={() => removerTarefa(posicaoNoIndex)}>
                            Remover</button>
                    </li>
                )}
            </ul>
        </div>
    )

}