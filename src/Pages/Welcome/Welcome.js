import React from "react";
import LeftContainer from "../Components/LeftContainer/LeftContainer";
import "../../reset.css";
import RightContainer from "../Components/RightContainer/RightContainer";
import WelcomeMessage from "../Components/WelcomeMessage/WelcomeMessage";
import MainContainer from "../Components/MainContainer/MainContainer";

function Welcome() {
  return (
    <MainContainer>
      <LeftContainer />
      <RightContainer component={WelcomeMessage}/>
    </MainContainer>
  );
}

export default Welcome;
