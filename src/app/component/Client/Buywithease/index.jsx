import React from "react";
import style from './style.module.css';

export const BuywitheaseClient = () => {
    return (
        <section className={style.container}>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <p>Concept</p>
                    <h1>Wireframes and Mockups, Accessibility, Responsive Design</h1>
                </div>

                <div className={style.contentbox}>
                    <div className={style['content-titlebox']}>
                        <h2>Challenge</h2>
                        <p>Ensuring smooth performance with a large number of products, and reaching out to a 
                            larger audience </p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Goal</h2>
                        <p>Develop an online store tailored for Small and Medium Enterprises (SMEs) to 
                            facilitate easy buying and selling of products.</p>
                    </div>
                    <div className={style['content-titlebox']}>
                        <h2>Result</h2>
                        <p>The "Buy with Ease" project successfully delivered a robust and user-friendly online 
                            store tailored for SMEs. The combination of modern technologies and best practices in 
                            design and development ensured a high-quality product that meets the needs of its target 
                            audience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}