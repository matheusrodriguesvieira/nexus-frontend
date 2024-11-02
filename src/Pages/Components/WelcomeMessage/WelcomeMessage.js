import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

function WelcomeMessage() {
    return (
        <div className="welcome-container">
            <h3>Bem vindo!</h3>
            <h1>Um ambiente feito para você.</h1>
            <Link to='/Login'>
                <button>Entrar</button>
            </Link>
        </div>
    );
}

export default WelcomeMessage;
