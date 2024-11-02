import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import MenuProfileContainer from "../MenuProfileContainer/MenuProfileContainer";

// import FavoIcon from '../../../assets/favo-negativo.svg';
import Logo from '../../../assets/logo-horizontal-negativo.svg';

import HomeIcon from '../../../assets/home-negative.png';
import LeaveIcon from '../../../assets/sair-branco.png';
// import PerfiIcon from '../../../assets/perfil-negativo.png';
// import PodiumIcon from '../../../assets/podium-negativo.png';
// import fotoPerfil from '../../../assets/imagem2.png';

import "../../../reset.css";
import "./index.css";

function Sidebar({ function: setActiveComponent }) {

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
    const TOKEN = JSON.parse(localStorage.getItem('authorization'))

    const navigate = useNavigate();

    function handleLogout() {

        const URI = `https://api-nexus-backend.vercel.app/usuarios/logout?matricula=${userData.matricula}`;
        const CONFIGURACAO = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": TOKEN
            },
        };

        // http://localhost/nexus-backend/api/usuarios/logout/

        (async function () {
            try {
                const response = await fetch(URI, CONFIGURACAO)
                const dados = await response.json();
                if (dados.error) {
                    console.log('Erro na requisição!');
                    console.log(dados.message);
                } else {
                    console.log(dados.message);
                    localStorage.clear();
                    navigate('/');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }

        })();
    };

    function ativarmenu(element){
        const menuLateral = element.target.parentNode;
        menuLateral.classList.toggle('active');
    }

    return (
        <div className="menu-container">
            <div className="mobile-menu" onClick={ativarmenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="horizontal-image-container">
                <img src={Logo} alt='Logo horizontal' />
                {/* <img src={FavoIcon} alt='Logo horizontal' /> */}
            </div>

            <div className="menu-profile-container">
                <div className="profile-image-container">
                    <img src={userData.url_perfil} alt='imagem de perfil no menu' />
                </div>
                <p>Bem vindo,</p>
                <h4>{userData.nome}</h4>
            </div>
            <div className="btn-menu-container">
                <div>
                    <img src={HomeIcon} alt="icone de casa" />
                    <nav onClick={() => { setActiveComponent('Home') }}>Início</nav>
                </div>
                {/* <div>
                    <img src={PodiumIcon} alt="icone de podium" />
                    <nav onClick={() => { setActiveComponent('Ranking') }}>Ranking</nav>
                </div> */}
                {/* <div>
                    <img src={PerfiIcon} alt="icone de perfil" />
                    <nav onClick={() => { setActiveComponent('Profile') }}>Perfil</nav>
                </div> */}
            </div>
            <div className="btn-leave-container">
                <div onClick={() => { handleLogout() }}>
                    <img src={LeaveIcon} alt="icone de logout" />
                    <nav onClick={() => { setActiveComponent('Home') }}>Logout</nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;