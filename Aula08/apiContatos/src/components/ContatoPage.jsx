import React, { useEffect, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";
import * as bootstrap from "bootstrap";

export default function Contato() {
    const [nome, setNome] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [email, setEmail] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();
    const toastRef = useRef(null);


    const salvarContato = async (e) => {
        e.preventDefault();
        const dados = { nome, whatsApp, email };

        try {
            if (id) {
                await api.put(`/contatos/${id}`, dados);
            } else {
                await api.post("/contatos", dados);
            }

            const toast = new bootstrap.Toast(toastRef.current);
            toast.show();

            setTimeout(() => navigate("/"), 1500);
        } catch (erro) {
            console.error("Erro ao salvar contato:", erro);
        }
    };



    useEffect(() => {
        if (id) {
            api.get(`/contatos/${id}`)
                .then((resposta) => {
                    const contato = resposta.data;
                    setNome(contato.nome);
                    setWhatsApp(contato.whatsApp || contato.whatsapp); // handle both cases
                    setEmail(contato.email);
                })
                .catch((erro) => {
                    console.error("Erro ao carregar contato:", erro);
                });
        }
    }, [id]);


    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h1 className="text-center mb-4">
                {id ? "Editar Contato" : "Incluir Contato"}
            </h1>
            <form onSubmit={salvarContato}>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome"
                        required
                    />

                </div>

                <div className="mb-3">
                    <label className="form-label">WhatsApp</label>
                    <IMaskInput
                        mask="(00) 00000-0000"
                        value={whatsApp}
                        onAccept={(value) => setWhatsApp(value)}
                        className="form-control"
                        placeholder="(00) 00000-0000"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemplo@dominio.com"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Salvar Contato
                </button>
            </form>
            <div
                ref={toastRef}
                className="toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex">
                    <div className="toast-body">
                        Contato salvo com sucesso!
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
            </div>
        </div>
    );
}
