import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Components/Sidebar/Sidebar";
import HomeComponent from "../Components/HomeComponent/HomeComponent";
import RankingComponent from "../Components/RankingComponent/RankingComponent";
import ProfileComponent from "../Components/ProfileComponent/ProfileComponent";
import LoadingComponent from "../Components/LoadingComponent/LoadingComponent";

import "../../reset.css";
import "./index.css";

function HomePage() {

    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState('home');
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
    const TOKEN = JSON.parse(localStorage.getItem('authorization'))
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const URI = `http://localhost/nexus-backend/api/validate-token/usuarios?matricula=${userData.matricula}`;
        const CONFIGURACAO = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": TOKEN
            },
        };

        (async function() {
            try {
                const response = await fetch(URI, CONFIGURACAO)
                const dados = await response.json();
                if (dados.error) {
                    console.log('Erro na requisição!');
                    console.log(dados.message);
                    alert(dados.message);
                    navigate('/Homepage');
                } else {
                    console.log('Sucesso na requisição!');
                    console.log(dados.message);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Erro na requisição:', error);
                navigate('/Homepage');
            }

        })();
    }, []);



    const renderComponent = () => {

        switch (activeComponent) {
            case "Home":
                return <HomeComponent />;
            case "Profile":
                return <ProfileComponent />;
            case "Ranking":
                return <RankingComponent />;
            default:
                return <HomeComponent />;
        }
    };

    if (loading) {
        return <LoadingComponent loadingStyle={'solid'} />
    }

    return (
        <div className="main-pages-container">
            <Sidebar function={setActiveComponent} />
            <div className="content-container">
                {renderComponent()}
            </div>
        </div>
    );
}

export default HomePage;