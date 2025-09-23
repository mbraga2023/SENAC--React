import { useState, useEffect } from "react";

export default function TarefasSimples() {
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") return;

        setTarefas([...tarefas, novaTarefa.trim()])
        setNovaTarefa("")
    }


    return (
        <div className="container mb-5">
            <h1 className="text-center mb-3">Tarefas Simples</h1>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite a nova tarefa"
                    name=""
                    id=""
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)} />
                <button className="btn btn-primary" onClick={adicionarTarefa}>
                    Adicionar
                </button>
            </div>
            <div>
                <ul className="list-group mt-3">
                    {tarefas.map((tarefa, index) => (
                        <li key={index} className="list-group-item">
                            {tarefa}
                            <button type="button" class="btn-close"></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
