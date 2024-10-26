import React from "react";
import logoVerticalNegativo from '../../../assets/logo-vertical-negativo.svg'
import logoVerticalPreto from '../../../assets/logo-vertical-preto.svg'
import './index.css';

function LoadingComponent({ loadingStyle }) {

    if (loadingStyle == "solid") {
        return (
            <div className="screen-loading-container">
                <div className='loading-image-container'>
                    <img src={logoVerticalNegativo} alt="logo vertical negativo" />
                </div>
                <div className="loading-progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    } else if (loadingStyle == "transparent") {
        return (
            <div className="component-loading-container">
                <div className='loading-image-container'>
                    <img src={logoVerticalPreto} alt="Logo vertical preto" />
                </div>
                <div className=" loading-progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default LoadingComponent;