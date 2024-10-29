import React from "react";
import "../../../reset.css";
import "./index.css";


function CardComponent ({head, body, bgColor}){
    return (
        <div className="card-container" style={{backgroundColor: bgColor}}>
            <div className="card-header">
                <h4>{head}</h4>
            </div>
            <div className="card-body">
                <h1>{body}</h1>
            </div>
        </div>
    );
}

export default CardComponent;