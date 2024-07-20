import React from "react";
import style from './style.module.css';
import { HeaderNavigation } from "./HeaderNavigation";

export const LandingPageNavigation = () => {
    return (
        <header className={style.headerbox}>
            <div>
                <h1>Shulammite</h1>
            </div>
            <div className={style.menu}>
                <HeaderNavigation />
            </div>
        </header>
    )
}