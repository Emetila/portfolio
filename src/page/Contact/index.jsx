import React from "react";
import { LandingPageNavigation } from "../../app/component/Header/LandingPageNavigation";
import { ContactBody } from "../../app/component/ContactBody";
import { Footer } from "../../app/component/Footer";
import { FAQ } from "../../app/component/Faq";

export const ContactPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <ContactBody />
            <FAQ />
            <Footer />
        </div>
    )
}