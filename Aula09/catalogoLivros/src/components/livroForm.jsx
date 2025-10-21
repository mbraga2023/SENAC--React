import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";

export default function LivroForm() {
    const [titulo, setTitulo] = useState("");
    const [paginas, setPaginas] = useState("");
    const [categoria, setCategoria] = useState("Romance");
    const [descricao, setDescricao] = useState("");

    // Recupera o id da URL
    const { id } = useParams();
    // Hook para navegação programática
    const navigate = useNavigate();

    const salvar= async(e)=>{
        e.preventDefault()
        const dados = {titulo, paginas, categoria, descricao}
        await api.post("/livros", dados)
        navigate("/")
        console.log('Salvando ' + dados)
    }

    useEffect(()=>{
        if(id){
            api.get(`/livros/${id}`)
            .then((resposta)=>{
                setTitulo(resposta.titulo)
                setPaginas(resposta.paginas)
                setCategoria(resposta.categoria)
                setDescricao(resposta.descricao)
            })
        }
    }, [id])

    return (
        <div className="container card p-0" style={{ maxWidth: "500px" }}>
            <div className="card-header">
                <h5>{id ? "Editar Livro" : "Novo Livro"}</h5>
            </div>
            <div className="card-body">

                <form>
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>

                    {/* Preço e Categoria lado a lado */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">N de páginas</label>
                            <input
                                type="number"
                                className="form-control"
                                value={paginas}
                                onChange={(e) => setPaginas(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Categoria</label>
                            <select
                                className="form-select"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <option value="Romance">Romance</option>
                                <option value="Biografia">Biografia</option>
                                <option value="Literatura">Literatura</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descrição</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" onClick={salvar} className="btn btn-success" >Salvar</button>
                    <Link className="btn btn-warning ms-2" to={`/`}>
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );
}
