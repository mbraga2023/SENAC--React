import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import * as bootstrap from "bootstrap";

export default function ContatosList() {
    const [contatos, setContatos] = useState([]);
    const toastRef = useRef(null);

    const carregarContatos = async () => {
        try {
            const resposta = await api.get("/contatos");
            setContatos(resposta.data);
        } catch (erro) {
            console.error("Erro ao carregar contatos:", erro);
        }
    };

    const excluirContato = async (id) => {
        if (!window.confirm("Tem certeza que deseja excluir este contato?")) return;

        try {
            await api.delete(`/contatos/${id}`);

            await carregarContatos();

            const toast = new bootstrap.Toast(toastRef.current);
            toast.show();
        } catch (erro) {
            console.error("Erro ao excluir contato:", erro);
        }
    };

    useEffect(() => {
        carregarContatos();
    }, []);

    return (
        <div className="container card p-0 mt-4">
            <div className="card-header text-center">
                <h4>Lista de Contatos</h4>

            </div>

            <div className="card-body">
                <table
                    className="table table-striped table-fixed"
                    style={{ tableLayout: "fixed", width: "100%" }}
                >
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>ID</th>
                            <th style={{ width: "25%" }}>Nome</th>
                            <th style={{ width: "20%" }}>WhatsApp</th>
                            <th style={{ width: "20%" }}>Email</th>
                            <th style={{ width: "20%" }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contatos.length > 0 ? (
                            contatos.map((contato) => (
                                <tr key={contato.id}>
                                    <td>{contato.id}</td>
                                    <td>{contato.nome}</td>
                                    <td>{contato.whatsApp || contato.whatsapp}</td>
                                    <td>{contato.email}</td>
                                    <td>
                                        <div className="btn-group">
                                            <Link
                                                className="btn btn-warning"
                                                to={`/contatos/${contato.id}`}
                                            >
                                                Editar
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => excluirContato(contato.id)}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-muted py-4">
                                    Lista vazia
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

                <div
                    ref={toastRef}
                    className="toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <div className="toast-body">Contato excluído com sucesso!</div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
