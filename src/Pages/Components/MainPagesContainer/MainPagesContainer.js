import React from "react";
import './index.css';
import '../../../reset.css';

function MainPagesContainer({ children }) {
    return (
        <div className="main-pages-container">
            {/* <h1>ola</h1> */}
            {children}
        </div>
    );
}

export default MainPagesContainer;