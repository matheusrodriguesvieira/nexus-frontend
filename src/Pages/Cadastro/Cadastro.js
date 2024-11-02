import React from "react";
import LeftContainer from "../Components/LeftContainer/LeftContainer";
import RightContainer from "../Components/RightContainer/RightContainer";
import MainContainer from "../Components/MainContainer/MainContainer";
import SignInForm from "../Components/SignInForm/SignInForm";



function Cadastro() {
    return (
        <MainContainer>
            <LeftContainer />
            <RightContainer component={SignInForm} />
        </MainContainer>
    );
}

export default Cadastro;