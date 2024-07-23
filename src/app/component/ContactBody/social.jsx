import React from "react";
import style from './style.module.css';
import { FaBehance } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const SocialSection = () => {
    return (
        <div>
            <div className={style.socialcontainer}>
                <div className={style.socialbox}>
                    <div className={style.social}>
                        <FaBehance className={style.icon} />
                        <a href="https://www.behance.net/shulammughojo">Behance</a>
                    </div>
                    <FaArrowRight className={style.arrowicon} />
                </div>

                <div className={style.socialbox}>
                    <div className={style.social}>
                        <FaLinkedinIn className={style.icon} />
                        <a href="https://www.linkedin.com/in/shulammite-ughojo">LinkedIn</a>
                    </div>
                    <FaArrowRight className={style.arrowicon} />
                </div>

                <div className={style.socialbox}>
                    <div className={style.social}>
                        <FaFacebookF className={style.icon} />
                        <a href="https://www.facebook.com/profile.php?id=100091130074648&mibextid=ZbWKwL">Facebook</a>
                    </div>
                    <FaArrowRight className={style.arrowicon} />
                </div>

                <div className={style.socialbox}>
                    <div className={style.social}>
                        <FaTwitter className={style.icon} />
                        <a href="https://twitter.com/Shully25341775?t=rHTlvbnW6WgGt4jOvHlTng&s=09">X</a>
                    </div>
                    <FaArrowRight className={style.arrowicon} />
                </div>
            </div>
        </div>
    )
}