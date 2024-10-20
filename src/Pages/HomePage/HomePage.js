import React from "react";

import MainPagesContainer from "../Components/MainPagesContainer/MainPagesContainer";
import LateralMenu from "../Components/LateralMenu/LateralMenu";

import "../../reset.css";

function HomePage() {
    return (

        <MainPagesContainer>
            <LateralMenu />
            <div className="content-container">
                <h1>Início</h1>
            // </div>
        </MainPagesContainer>
    );
}

export default HomePage;