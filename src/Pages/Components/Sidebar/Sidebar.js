import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import HorizontalLogo from '../HorizontalLogo/HorizontalLogo';
import MenuProfileContainer from "../MenuProfileContainer/MenuProfileContainer";

import HomeIcon from '../../../assets/home-negative.png';
import LeaveIcon from '../../../assets/sair-branco.png';
import PerfiIcon from '../../../assets/perfil-negativo.png';
import PodiumIcon from '../../../assets/podium-negativo.png';
// import fotoPerfil from '../../../assets/imagem2.png';

import "../../../reset.css";
import "./index.css";

function Sidebar({ function: setActiveComponent }) {

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
    const TOKEN = JSON.parse(localStorage.getItem('authorization'))

    // // const { nome } = JSON.parse(localStorage.getItem('userData'))
    // // const {url_perfil} = JSON.parse(localStorage.getItem('userData'))
    // // const url_perfil = 'https://drive.google.com/uc?export=view&id=1jTKfcZDWZ5t-hDbAp5YcZBA9J0gkFc1c';
    // // const url_perfil = 'https://drive.google.com/file/d/1jTKfcZDWZ5t-hDbAp5YcZBA9J0gkFc1c/view?usp=sharing';
    // const url_perfil = 'https://drive.google.com/file/d/1jTKfcZDWZ5t-hDbAp5YcZBA9J0gkFc1c/view?usp=sharing';
    // // const url_perfil = 'drive.usercontent.google.com/download?id=1jTKfcZDWZ5t-hDbAp5YcZBA9J0gkFc1c&authuser=0';


    const navigate = useNavigate();

    function handleLogout() {

        const URI = `http://localhost/nexus-backend/api/usuarios/logout/?matricula=${userData.matricula}`;
        const CONFIGURACAO = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": TOKEN
            },
        };

        // http://localhost/nexus-backend/api/usuarios/logout/

        (async function() {
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

    return (
        <div className="menu-container">
            <HorizontalLogo />
            <MenuProfileContainer url_profile={userData.url_perfil} user_name={userData.nome} />
            <div className="btn-menu-container">
                <div>
                    <img src={HomeIcon} alt="icone de casa" />
                    <nav onClick={() => { setActiveComponent('Home') }}>Início</nav>
                </div>
                {/* <div>
                    <img src={PodiumIcon} alt="icone de podium" />
                    <nav onClick={() => { setActiveComponent('Ranking') }}>Ranking</nav>
                </div> */}
                <div>
                    <img src={PerfiIcon} alt="icone de perfil" />
                    <nav onClick={() => { setActiveComponent('Profile') }}>Perfil</nav>
                </div>
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