import React from "react";
import style from './style.module.css';

export const MalichaClient = () => {
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
                        <p>My client was struggling to attract and retain customers due to an outdated and 
                            non-responsive website that didn't align with their brand identity. </p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Goal</h2>
                        <p>The goal was to create a modern and visually appealing website that reflected the client's 
                            brand and delivered a seamless user experience. The website needed to be responsive, easy 
                            to navigate, and optimized for search engines to improve their online visibility.</p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Result</h2>
                        <p>I  developed a custom website design that was not only visually stunning but also 
                            user-friendly and optimized for search engines. The client's website now showcases 
                            their products and services professionally and engagingly and has seen a significant 
                            increase in organic traffic and customer engagement. The client is thrilled with the 
                            final result and has received positive feedback from their customers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}