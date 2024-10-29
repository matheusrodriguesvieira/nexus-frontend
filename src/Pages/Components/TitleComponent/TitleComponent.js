import React from "react";

import "../../../reset.css";
import "./index.css";

function TitleComponent({title}) {
    return (
        <div className="title-container">
            <h1>{title}</h1>
        </div>
    );
}

export default TitleComponent;