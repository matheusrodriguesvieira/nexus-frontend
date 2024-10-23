import React from "react";

import TitleComponent from "../TitleComponent/TitleComponent";
import CardComponent from "../CardComponent/CardComponent";
import "../../../reset.css";
import "./index.css";


function HomeComponent (){

    const date = new Date();
    const mesAtual = date.toLocaleDateString('pt-BR', {month:'long'});

    return (
        <div className="home-container">
            <TitleComponent title={'Início'}/>
            <div className="cards-container">
                <CardComponent head={mesAtual} body={10} bgColor={'#B95946'}/>
                <CardComponent head={'Média p/ Mês'} body={10} bgColor={'#4A3041'}/>
                <CardComponent head={'Total'} body={60} bgColor={'#444D55'}/>
            </div>
            <div className="graph-container">
                <div>grafico</div>
            </div>
        </div>
    );
}

export default HomeComponent;