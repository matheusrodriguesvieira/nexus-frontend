import React from "react";
import logoNegativo from "../../../assets/logo-vertical-negativo.svg";
import logoPreto from "../../../assets/logo-vertical-preto.svg";
import './index.css';

function LeftComponent() {
    return (
        <div className="left-container">
          <div className="image-container">
            <img src={logoNegativo} alt="Logo NexusHub" className="logo-branca"/>
            <img src={logoPreto} alt="Logo NexusHub" className="logo-preta"/>
          </div>
        </div>
    );
}

export default LeftComponent;