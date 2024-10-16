import React from "react";
import logo from "../../../assets/logo-vertical-negativo.svg";
import './index.css';

function LeftComponent() {
    return (
        <div className="left-container">
          <div className="image-container">
            <img src={logo} alt="Logo NexusHub" />
          </div>
        </div>
    );
}

export default LeftComponent;