import React from "react";
import style from './style.module.css';

export const Footer = () => {
    return (
        <footer>
            <div className={style.copyright}>
                <div className={style.copy}>
                    <p>© 2024 Designed and Developed by Shulammite</p>
                </div>
            </div>
        </footer>
    )
}