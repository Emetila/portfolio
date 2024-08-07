import React from "react";
import { LandingPageNavigation } from "../../../app/component/Header/LandingPageNavigation";
import { HeroMalicha } from "../../../app/component/MalichaHero";
import { MalichaClient } from "../../../app/component/Client/malichaclient";
import { Footer } from "../../../app/component/Footer";

export const MalichaPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroMalicha />
            <MalichaClient />
            <Footer />
        </div>
    )
}