import React from "react";
import { LandingPageNavigation } from "../../../app/component/Header/LandingPageNavigation";
import { HeroBuywithease } from "../../../app/component/Buywitheasehero";
import { Footer } from "../../../app/component/Footer";
import { BuywitheaseClient } from "../../../app/component/Client/Buywithease";

export const BuywitheasePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroBuywithease />
           <BuywitheaseClient />
            <Footer />
        </div>
    )
}