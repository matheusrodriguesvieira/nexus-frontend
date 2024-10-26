import React, { useEffect, useState } from "react";

import TitleComponent from "../TitleComponent/TitleComponent";
import CardComponent from "../CardComponent/CardComponent";
import BarChart from "../BarChart/BarChart";
// import data from "../../../datateste/datateste";


import "../../../reset.css";
import "./index.css";


function HomeComponent() {

    const date = new Date();
    const [mesAtual, setMesAtual] = useState((date.toLocaleDateString('PT-BR', { month: 'long' })).charAt(0).toUpperCase() + (date.toLocaleDateString('PT-BR', { month: 'long' })).slice(1));
    const [mediaVerResolver, setMediaVerResolver] = useState(0);
    const [totalAnual, setTotalAnual] = useState(0);

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));


    // const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
    useEffect(() => {
        if (userData) {
            handleAvg(userData.ocorrenciasPorMes);
        }
    }, []);

    // // console.log(userData.ocorrenciasPorMes);
    const handleAvg = (ocorrenciasPorMes) => {
        const meses = Object.keys(ocorrenciasPorMes);
        const indiceMesAtual = meses.indexOf(mesAtual);
        
        if (indiceMesAtual !== -1) {
            const mesesAteAtual = meses.slice(0, indiceMesAtual + 1);
            const valores = mesesAteAtual.map(mes => ocorrenciasPorMes[mes]);
            const soma = valores.reduce((acumulador, valorAtual) => {
                return acumulador + valorAtual
            }, 0);
            const media = (soma / valores.length);

            setMediaVerResolver(media);
            setTotalAnual(soma);
        } 
        // else {
        //     console.log('Mês não encontrado no objeto de dados.');
        // }
    }

    return (
        <div className="home-container">
            <TitleComponent title={'Início'} />
            <div className="cards-container">
                <CardComponent head={mesAtual} body={userData.ocorrenciasPorMes[mesAtual]} bgColor={'#B95946'} />
                <CardComponent head={'Média p/ Mês'} body={mediaVerResolver} bgColor={'#4A3041'} />
                <CardComponent head={'Total'} body={totalAnual} bgColor={'#444D55'} />
            </div>
            <div className="graph-container">
                <BarChart chartData={userData.ocorrenciasPorMes} />
            </div>
        </div>
    );
}

export default HomeComponent;