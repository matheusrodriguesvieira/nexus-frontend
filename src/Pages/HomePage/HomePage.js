import React, { useState } from "react";

import Sidebar from "../Components/Sidebar/Sidebar";
import HomeComponent from "../Components/HomeComponent/HomeComponent";
import RankingComponent from "../Components/RankingComponent/RankingComponent";
import ProfileComponent from "../Components/ProfileComponent/ProfileComponent";

import "../../reset.css";
import "./index.css";

function HomePage() {

    const [activeComponent, setActiveComponent] = useState('home');

    function renderComponent() {
        switch (activeComponent) {
            case "Home":
                return <HomeComponent />;
            case "Profile":
                return <ProfileComponent />;
            case "Ranking":
                return <RankingComponent />;
            default:
                return <HomeComponent />;
        }
    };

    return (
        <div className="main-pages-container">
            <Sidebar function={setActiveComponent} />
            <div className="content-container">
                {renderComponent()}
            </div>
        </div>
    );
}

export default HomePage;