import React from "react";
import HorizontalLogo from '../HorizontalLogo/HorizontalLogo';
import MenuProfileContainer from "../MenuProfileContainer/MenuProfileContainer";

import HomeIcon from '../../../assets/home-negative.png';
import PerfiIcon from '../../../assets/perfil-negativo.png';
import PodiumIcon from '../../../assets/podium-negativo.png';
import fotoPerfil from '../../../assets/imagem2.png';

import "../../../reset.css";
import "./index.css";

function LateralMenu() {
    return (
        <div className="menu-container">
                <HorizontalLogo />
                <MenuProfileContainer url_profile={fotoPerfil} user_name={"carlos alberto"}/>
                {/* <div className="btn-menu-container">
                    <div>
                        <img src={HomeIcon} alt="icone de casa"/>
                        <button>Início</button>
                    </div>
                    <div>
                        <img src={PodiumIcon} alt="icone de podium"/>
                        <button>Ranking</button>
                    </div>
                    <div>
                        <img src={PerfiIcon} alt="icone de perfil"/>
                        <button>Perfil</button>
                    </div>
                </div> */}
            </div>
    );
}

export default LateralMenu;