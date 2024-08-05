import React from "react";
import style from './style.module.css';

export const VotedeckClient = () => {
    return (
        <section className={style.container}>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <p>Concept</p>
                    <h1>Concept, Design, and Development. All-in-one.</h1>
                </div>

                <div className={style.contentbox}>
                    <div className={style['content-titlebox']}>
                        <h2>Challenge</h2>
                        <p>My client already has a desktop design for the platform but neds it to be mobile 
                            responsive and needs the dashboard to also be set up.</p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Goal</h2>
                        <p>The primary objective was to create an intuitive and secure platform that could 
                            handle various voting scenarios, from small community elections to large-scale 
                            organizational votes. The design needed to ensure a seamless user experience while 
                            maintaining the integrity and security of the voting process and also needs to be 
                            accessible across all devices.</p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Result</h2>
                        <p>Successfully completed the design of the admin and other user dashboard and also the 
                            mobile responsiveness</p>
                    </div>
                </div>
            </div>
        </section>
    )
}