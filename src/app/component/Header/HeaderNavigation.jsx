import React from "react";
import style from './style.module.css';

export const HeaderNavigation = (props) => {
    return (
        <nav className={style.navbar}>
            <ul lassName={props.className}>
                <li>
                <a href="/about">About</a>
                </li>
                <li>
                <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}