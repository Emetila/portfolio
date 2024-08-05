import React from "react";
import { HeroFamebird } from "../../../app/component/FamebirdsHero";
import { LandingPageNavigation } from "../../../app/component/Header/LandingPageNavigation";
import { Footer } from "../../../app/component/Footer";
import { FamebirdClient } from "../../../app/component/Client/famebirdclient";

export const FamebirdsPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroFamebird />
            <FamebirdClient />
            <Footer />
        </div>
    )
}