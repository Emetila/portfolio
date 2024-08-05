import React from "react";
import style from './style.module.css';

export const SjClient = () => {
    return (
        <section className={style.container}>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <p>Concept</p>
                    <h1>UI/UX Design & Web Design</h1>
                </div>

                <div className={style.contentbox}>
                    <div className={style['content-titlebox']}>
                        <h2>Challenge</h2>
                        <p>Client has a clothing brand but unable to reach a larger audience so needs a website to 
                            showcase products and services and reach a larger audience </p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Goal</h2>
                        <p>To design an intuitive and engaging online clothing store that enhances the shopping 
                            experience, increases customer satisfaction, and boosts sales.</p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Result</h2>
                        <p>SJ Fashion successfully addressed the challenges faced by existing online clothing 
                            stores by focusing on user-centric design, personalized recommendations, and 
                            enhanced visual content.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}