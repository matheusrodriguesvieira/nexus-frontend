import React from "react";
import { useNavigate } from "react-router-dom";
import HorizontalLogo from '../HorizontalLogo/HorizontalLogo';
import MenuProfileContainer from "../MenuProfileContainer/MenuProfileContainer";

import HomeIcon from '../../../assets/home-negative.png';
import LeaveIcon from '../../../assets/sair-branco.png';
import PerfiIcon from '../../../assets/perfil-negativo.png';
import PodiumIcon from '../../../assets/podium-negativo.png';
import fotoPerfil from '../../../assets/imagem2.png';

import "../../../reset.css";
import "./index.css";

function Sidebar({ function: setActiveComponent }) {

    const navigate = useNavigate();

    function handleLogout(){
        setActiveComponent('Home');
        navigate('/', {replace:true});
    };

    return (
        <div className="menu-container">
            <HorizontalLogo />
            <MenuProfileContainer url_profile={fotoPerfil} user_name={"carlos alberto"} />
            <div className="btn-menu-container">
                <div>
                    <img src={HomeIcon} alt="icone de casa" />
                    <nav onClick={() => { setActiveComponent('Home') }}>Início</nav>
                </div>
                <div>
                    <img src={PodiumIcon} alt="icone de podium" />
                    <nav onClick={() => { setActiveComponent('Ranking') }}>Ranking</nav>
                </div>
                <div>
                    <img src={PerfiIcon} alt="icone de perfil" />
                    <nav onClick={() => { setActiveComponent('Profile') }}>Perfil</nav>
                </div>
            </div>
            <div className="btn-leave-container">
                    <div onClick={() => {handleLogout()}}>
                        <img src={LeaveIcon} alt="icone de logout" />
                        <nav onClick={() => { setActiveComponent('Home') }}>Logout</nav>
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;