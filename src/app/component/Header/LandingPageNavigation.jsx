import React from "react";
import style from './style.module.css';
import { HeaderNavigation } from "./HeaderNavigation";
import { CustomButton } from "../Button";

export const LandingPageNavigation = () => {
    return (
        <header className={style.headerbox}>
            <div>
                <h1>Shulammite</h1>
            </div>
            <div className={style.menu}>
                <HeaderNavigation />
            </div>
            <CustomButton onClick= {() => {}}>Let's Talk</CustomButton>
        </header>
    )
}