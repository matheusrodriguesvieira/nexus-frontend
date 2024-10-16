import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

function WelcomeMessage() {
    return (
        <>
            <h3>Bem vindo!</h3>
            <h1>Um ambiente feito para você.</h1>
            <Link to='/Login'>
                <button>Entrar</button>
            </Link>
        </>
    );
}

export default WelcomeMessage;
