import React from "react";
import style from './style.module.css';
import { PiFigmaLogoFill } from "react-icons/pi";
import { CgFramer } from "react-icons/cg";
import { SiCanva } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiGoogleforms } from "react-icons/si";

export const ToolSection = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Tools I Use</h1>

            <div className={style.containerbox}>
                <div className={style.figmabox}>
                    <PiFigmaLogoFill className={style.figma} />
                    <h3>Figma</h3>
                </div>
                <div className={style.framerbox}>
                    <CgFramer className={style.framer} />
                    <h3>Framer</h3>
                </div>
                <div className={style.canvabox}>
                    <SiCanva className={style.canva} />
                    <h3>Canva</h3>
                </div>
                <div className={style.vsbox}>
                    <SiVisualstudiocode className={style.vscode} />
                    <h3>VS Code</h3>
                </div>
                <div className={style.formbox}>
                    <SiGoogleforms className={style.form} />
                    <h3>Google Form</h3>
                </div>
            </div>
        </div>
    )
}