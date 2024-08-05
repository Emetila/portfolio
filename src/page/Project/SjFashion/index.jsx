import React from "react";
import { HeroSjfashion } from "../../../app/component/Sj-fashionHero";
import { LandingPageNavigation } from "../../../app/component/Header/LandingPageNavigation";
import { Footer } from "../../../app/component/Footer";
import { SjClient } from "../../../app/component/Client/Sjclient";

export const SjfashionPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroSjfashion />
            <SjClient />
            <Footer />
        </div>
    )
}