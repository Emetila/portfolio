import React from "react";
import { LandingPageNavigation } from "../../app/component/Header/LandingPageNavigation";
import { HomeBody } from "../../app/component/HomeContainer";
import { LogoSection } from "../../app/component/LogoSection";

export const HomePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HomeBody />
            <LogoSection />
        </div>
    )
}