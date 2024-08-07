import React from "react";
import { LandingPageNavigation } from "../../../app/component/Header/LandingPageNavigation";
import { HeroGocipe } from "../../../app/component/Go'cipe";
import { Footer } from "../../../app/component/Footer";
import { GocipeClient } from "../../../app/component/Client/GocipeClient";

export const GocipePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroGocipe />
            <GocipeClient />
            <Footer />
        </div>
    )
}