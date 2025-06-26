import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import leftArrowIcon from '../../../assets/left-arrow.svg';

import './index.css';
import { color } from "chart.js/helpers";

function SignInForm() {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [senha1, setSenha1] = useState('');
    const [senha2, setSenha2] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        if (senha1 !== senha2) {
            alert("Senhas não conferem!");
            setLoading(false);
            return;
        }


        const URI = `https://api-nexus-backend.vercel.app/usuarios/store/cadastrar`;
        const CONFIGURACAO = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'matricula': id,
                'senha': senha1
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
                    setLoading(false);
                    navigate('/Login');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Erro na requisição:', error);
                setLoading(false);
            }

        })();
    }

    const handleLogin = () => {
        navigate('/Login');
    }

    if (loading) {
        return <LoadingComponent loadingStyle={'transparent'} />
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sing In</h1>
            <div className="form-group">
                <label htmlFor="Email">Matricula do usuário</label>
                <input placeholder="Ex.: 123456" id="Email" value={id} onChange={event => setId(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="Password1">Senha</label>
                <input placeholder="password" id="Password1" type="password" onChange={event => setSenha1(event.target.value)} value={senha1} />
            </div>
            <div className="form-group">
                <label htmlFor="Password2">Repita a senha</label>
                <input placeholder="password" id="Password2" type="password" onChange={event => setSenha2(event.target.value)} value={senha2} />
            </div>
            <div className="button-group">
                <button type="submit">Cadastrar</button>
                <button type='button' style={{backgroundColor:"#ecf0f1", color:'#000', border:'1px solid #000'}} onClick={handleLogin}>
                    Voltar
                </button>
            </div>
        </form>
    );
}

export default SignInForm;