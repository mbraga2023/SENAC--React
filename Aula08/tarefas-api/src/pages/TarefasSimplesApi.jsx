import { useState, useEffect } from "react"
import axios from 'axios'

const API_URL = 'https:limeiraweb.com.br/api/tarefas'

export default function TarefasSimples() {
    const [listaDeTarefas, setListaDeTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    async function carregarTarefas() {
        const resultado = await axios.get(API_URL)
        setListaDeTarefas(resultado.data)
        // console.log(resultado.data)

    }
    useEffect(() => {
        carregarTarefas()
    }, [])


    async function adicionarTarefa() {
        if (novaTarefa.trim() == "") {
            return
        }
        await axios.post(API_URL, {
            nome: novaTarefa,
            status: 'novo'
        })
        setNovaTarefa("")
                carregarTarefas()

    }

    async function removerTarefa(id) {
        await axios.delete(`${API_URL}/${id}`)
                carregarTarefas()


    }

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Tarefas API</h1>

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
            </div>

            <ul className="list-group">
                {listaDeTarefas.length == 0 && (
                    <li className="list-group-item text-center text-muted">
                        Nenhuma tarefa adicionada
                    </li>
                )}
                {listaDeTarefas.map((tarefa) => (
                    <li
                        key={tarefa.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            {tarefa.id}
                        </div>
                        <div>
                            {tarefa.nome}
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <span className="fw-bold">Status: </span>{tarefa.status}
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removerTarefa(tarefa.id)}
                            >
                                Remover
                            </button>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )

}