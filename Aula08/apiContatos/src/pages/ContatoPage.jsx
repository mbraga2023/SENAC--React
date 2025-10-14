import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nome, whatsapp, email });
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h1 className="text-center mb-4">Incluir Contato</h1>
            <form onSubmit={handleSubmit}>
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
                        value={whatsapp}
                        onAccept={(value) => setWhatsapp(value)}
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
        </div>
    );
}
