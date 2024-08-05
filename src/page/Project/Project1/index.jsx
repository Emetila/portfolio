import React from "react";
import { LandingPageNavigation } from "../../../app/component/Header/LandingPageNavigation";
import { ProjectOne } from "../../../app/component/project1";
import { Footer } from "../../../app/component/Footer";

export const ProjectonePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <ProjectOne />
            <Footer />
        </div>
    )
}