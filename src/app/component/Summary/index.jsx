import React from "react";
import style from './style.module.css';
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const SummarySection = () => {
    return (
        <section className={style.container}>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <h1>A website and User Experience that leaves a lasting impression!</h1>
                </div>
                <div className={style.content}>
                    <p>I design websites that are specific to your requirements and my area of expertise is
                        designing websites using WordPress. I also specialize in creating wireframes, user
                        personas, user flows, and prototypes that help bring your product vision to reality
                        using Figma. I'm passionate about producing high-quality, aesthetically pleasing
                        designs. As I recognize how crucial it is to have a website that stands out from the
                        competition, my aim is to assist you in building a website that realizes your vision. Also
                        to create designs that are user-friendly and aesthetically pleasing, while being mindful
                        of the budget and timelines. I'm eager to work with you to make your ideas a reality.
                    </p>

                    <div className={style.socialcontainer}>
                        <div className={style.socialbox}>
                            <a href="https://www.behance.net/shulammughojo"><FaBehance className={style.social}/></a>
                        </div>

                        <div className={style.socialbox}>
                            <a href="https://www.linkedin.com/in/shulammite-ughojo"><FaLinkedinIn className={style.social}/></a>
                        </div>

                        <div className={style.socialbox}>
                            <a href="https://www.facebook.com/profile.php?id=100091130074648&mibextid=ZbWKwL"><FaFacebookF className={style.social}/></a>
                        </div>

                        <div className={style.socialbox}>
                            <a href="https://twitter.com/Shully25341775?t=rHTlvbnW6WgGt4jOvHlTng&s=09"><BsTwitterX className={style.social}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}