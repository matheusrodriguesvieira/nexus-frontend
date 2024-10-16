import "../../reset.css";

import LeftContainer from "../Components/LeftContainer/LeftContainer";
import RightContainer from "../Components/RightContainer/RightContainer";
import LoginForm from "../Components/LoginForm/LoginForm";
import MainContainer from "../Components/MainContainer/MainContainer";

function Login() {
  return (
    <MainContainer>
      <LeftContainer />
      <RightContainer component={LoginForm}/>
    </MainContainer>
  );
}

export default Login;
