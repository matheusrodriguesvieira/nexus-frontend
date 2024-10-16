import React from "react";
import { Link } from "react-router-dom";

import './index.css';

function LoginForm() {
    return (
        <form>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="Email">Email ou Id de usuário</label>
                <input id="Email" type="email" />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Senha</label>
                <input id="Password" type="password" />
            </div>
            <Link to={'/Homepage'}>
                <button>Entrar</button>
            </Link>
        </form>
    );
}

export default LoginForm;