import React from "react";
import { LandingPageNavigation } from "../../app/component/Header/LandingPageNavigation";
import { HomeBody } from "../../app/component/HomeContainer";
import { LogoSection } from "../../app/component/LogoSection";
import { OfferSection } from "../../app/component/Offer";
import { ToolSection } from "../../app/component/Tools";
import { SelectedWorkSection } from "../../app/component/SelectedWork";
import { Footer } from "../../app/component/Footer";

export const HomePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HomeBody />
            <LogoSection />
            <OfferSection />
            <ToolSection />
            <SelectedWorkSection />
            <Footer />
        </div>
    )
}