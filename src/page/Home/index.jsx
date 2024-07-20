import React from "react";
import { LandingPageNavigation } from "../../app/component/Header/LandingPageNavigation";
import { HomeBody } from "../../app/component/HomeContainer";

export const HomePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HomeBody />
        </div>
    )
}