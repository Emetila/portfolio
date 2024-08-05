import React from "react";
import style from './style.module.css';

export const FamebirdClient = () => {
    return (
        <section className={style.container}>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <p>Concept</p>
                    <h1>Style Guide, Wirefreame, High Fidelity, User Persona, Prototype and Website Management.</h1>
                </div>

                <div className={style.contentbox}>
                    <div className={style['content-titlebox']}>
                        <h2>Challenge</h2>
                        <p>My client, a startup influencer marketing company, approached me to redesign their 
                            existing influencer entertainment website and mobile app. Despite having a sizable 
                            user base, the platform faced challenges with user engagement, content discovery, 
                            and overall user experience. </p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Goal</h2>
                        <p>One of the biggest problems facing the influencer marketing sector was the absence of 
                            a centralized platform that would link brands and influencers. Marketers found it 
                            difficult to locate and effectively work with relevant influencers. This project's 
                            main goals were to improve campaign administration, encourage greater teamwork, and 
                            expedite influencer finding. Additionally, to develop a lively and user-friendly 
                            platform that promoted deeper user involvement, enhanced the platform's usability, 
                            and enabled meaningful influencer-brand collaborations.</p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Result</h2>
                        <p>By offering a transparent and user-friendly marketplace for companies and influencers, 
                            the "Famebirds" platform effectively tackled the difficulties associated with influencer 
                            marketing. The initiative demonstrated the value of a central center for data-driven 
                            decision-making and influencer collaboration.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}