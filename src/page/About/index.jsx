import React from "react";
import { LandingPageNavigation } from "../../app/component/Header/LandingPageNavigation";
import { Footer } from "../../app/component/Footer";
import { AboutSectio } from "../../app/component/AboutSection";

export const AboutPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <AboutSectio />
            <Footer />
        </div>
    )
}