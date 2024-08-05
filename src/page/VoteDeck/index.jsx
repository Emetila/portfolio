import React from "react";
import { HeroVotedeck } from "../../app/component/Votedeckhero";
import { LandingPageNavigation } from "../../app/component/Header/LandingPageNavigation";
import { VotedeckClient } from "../../app/component/Client/votedeckclient";
import { Footer } from "../../app/component/Footer";

export const VotedeckPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroVotedeck />
            <VotedeckClient />
            <Footer />
        </div>
    )
}