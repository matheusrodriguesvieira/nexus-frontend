import React from "react";
import logo from '../../../assets/logo-horizontal-negativo.svg';

import './index.css';
import "../../../reset.css";

function HorizontalLogo() {
    return (
        <div className="horizontal-image-container">
            <img src={logo} alt='Logo horizontal'/>
        </div>
    );
}

export default HorizontalLogo;