import React from "react";
import { LandingPageNavigation } from "../../app/component/Header/LandingPageNavigation";
import { PortfolioBody } from "../../app/component/Work";
import { Footer } from "../../app/component/Footer";

export const PortfolioPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <PortfolioBody />
            <Footer />
        </div>
    )
}