import React from "react";

import "../../../reset.css";
import "./index.css";

function MenuProfileContainer({ url_profile, user_name }) {
    return (
        <div className="menu-profile-container">
            <div className="profile-image-container">
                <img src={url_profile} alt='imagem de perfil no menu' />
            </div>
            <p>Bem vindo,</p>
            <h4>{user_name}</h4>
        </div>
    );
}

export default MenuProfileContainer;