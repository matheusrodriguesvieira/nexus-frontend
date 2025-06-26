import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

import './index.css';

function LoginForm() {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const URI = `https://api-nexus-backend.vercel.app/usuarios/login`;
        const CONFIGURACAO = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'matricula': id,
                'senha': senha
            }),
        };

        (async function () {
            try {
                const response = await fetch(URI, CONFIGURACAO)
                const dados = await response.json();
                if (dados.error) {
                    console.log('Erro na requisição!');
                    console.log(dados.message);
                    alert(dados.message);
                    setLoading(false);
                } else {
                    console.log('Sucesso na requisição!');
                    localStorage.setItem('userData', JSON.stringify(dados.data));
                    localStorage.setItem('authorization', JSON.stringify(dados.token));
                    setLoading(false);
                    navigate('/Homepage');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Erro na requisição:', error);
                setLoading(false);
            }

        })();
    }

    const handleCadastrar = () => {
        navigate('/Cadastro');
    }

    if (loading) {
        return <LoadingComponent loadingStyle={'transparent'} />
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="Email">Matrícula de usuário</label>
                <input placeholder="Ex.: 123456" id="Email" value={id} onChange={event => setId(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Senha</label>
                <input placeholder="password" id="Password" type="password" onChange={event => setSenha(event.target.value)} value={senha} />
            </div>
            <div className="button-group">
                <button type="submit">Entrar</button>
                <button type='button' onClick={handleCadastrar}>Primeiro acesso</button>
            </div>
        </form>
    );
}

export default LoginForm;