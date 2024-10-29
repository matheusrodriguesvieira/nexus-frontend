import React from "react";
import './index.css'

function RightContainer({component: Component}) {
    return (
        <div className="right-container">
            <div className="welcome-container">
                <Component />
            </div>
        </div>
    );
}

export default RightContainer;