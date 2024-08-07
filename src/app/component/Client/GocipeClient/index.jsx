import React from "react";
import style from './style.module.css';

export const GocipeClient = () => {
    return (
        <section className={style.container}>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <p>Concept</p>
                    <h1>Style Guide, Wireframe, Mockup, User Persona, UI Design, & Prototype</h1>
                </div>

                <div className={style.contentbox}>
                    <div className={style['content-titlebox']}>
                        <h2>Challenge</h2>
                        <p>For this Project, the start-up company, Goci'pe, is a food company that needs an app 
                            where users can watch cooking videos, upload videos and more. </p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Goal</h2>
                        <p>To design an intuitive and engaging food platform that helps users discover, share, and 
                            create recipes, while also facilitating meal planning and grocery shopping.</p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Result</h2>
                        <p>Go'cipe successfully addressed the challenges faced by existing food platforms by 
                            focusing on user-centric design, personalized meal planning, and enhanced social 
                            interaction features. The platform’s success highlights the importance of thorough 
                            research, iterative design, and continuous user feedback in creating engaging and 
                            user-friendly digital products.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}