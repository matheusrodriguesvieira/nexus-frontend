import React from "react";
import './index.css'

function MainContainer({children}) {
    return (
        <>
            <div className="main-container">
                <div className="card-container">
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainContainer;