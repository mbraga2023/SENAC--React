import { useState } from "react"

export default function Calculadora() {
    const [primeiro, setPrimeiro] = useState('')
    const [segundo, setSegundo] = useState('')
    const [resultado, setResultado] = useState(null)

    const limparCampos = () => {
        setPrimeiro('');
        setSegundo('');
    };

    const somar = () => {
        if (!primeiro.trim() || !segundo.trim()) {
            setResultado("Por favor, preencha os dois campos.");
            return;
        }

        const num1 = parseFloat(primeiro);
        const num2 = parseFloat(segundo);

        if (isNaN(num1) || isNaN(num2)) {
            setResultado("Entradas inválidas.");
            return;
        }

        const soma = num1 + num2;
        setResultado(soma);
        limparCampos();


    };
    const multiplicar = () => {
        const num1 = parseFloat(primeiro);
        const num2 = parseFloat(segundo);

        const multiplicacao = num1 * num2
        setResultado(multiplicacao)

        limparCampos();

    }
    const subtrair = () => {
        const num1 = parseFloat(primeiro);
        const num2 = parseFloat(segundo);

        const multiplicacao = num1 - num2
        setResultado(multiplicacao)
        limparCampos();

    }
    const dividir = () => {
        const num1 = parseFloat(primeiro);
        const num2 = parseFloat(segundo);

        const multiplicacao = num1 / num2
        setResultado(multiplicacao)

        limparCampos();

    }

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Calculadora</h1>
            <input
                type="number"
                className="form-control mb-3"
                value={primeiro}
                onChange={(e) => setPrimeiro(e.target.value)}
                placeholder="Digite o primeiro número"
                style={{ padding: "10px", fontSize: "16px" }}
            />
            <input
                type="number"
                className="form-control mb-4"
                value={segundo}
                onChange={(e) => setSegundo(e.target.value)}
                placeholder="Digite o segundo número"
                style={{ padding: "10px", fontSize: "16px" }}

            />

            <div className="d-flex justify-content-between flex-wrap gap-1 mb-3">
                <button className="btn btn-outline-primary" onClick={somar}>Somar</button>
                <button className="btn btn-outline-secondary" onClick={subtrair}>Subtrair</button>
                <button className="btn btn-outline-success" onClick={multiplicar}>Multiplicar</button>
                <button className="btn btn-outline-warning" onClick={dividir}>Dividir</button>
            </div>

            {resultado !== null && (
                <div className="alert alert-info mt-3" >
                    Resultado: {resultado}
                </div>
            )}

        </div>
    )
}