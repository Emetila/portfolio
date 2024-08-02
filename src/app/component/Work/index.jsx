import React from "react";
import style from './style.module.css';
import { Works } from "./works";
import { motion } from 'framer-motion';

export const PortfolioBody = () => {
    return (
        <section className={style.container} 
        whilehover={{ scale: 1.05 }}
      whiletap={{ scale: 0.95 }}>
            <div className={style.titlebox}>
                <h1>Welcome to my portfolio</h1>
                <p>Creating beautiful and functional designs is my passion. Whether it's product design, web design or frontend 
                    development, I am committed to providing top-notch service to all my clients. From conceptualization 
                    to execution, I ensure that each design is tailored to your needs and exceeds your expectations. 
                    Take a look at my portfolio to see what I can do for your business.</p>
            </div>

            <div>
                <div className={style.works} key={Works.id}>
                    {Works.map((Works) => (
                        <div className={style.workbox}>
                            <div>
                                <img className={style.worksimages} src={Works.Image} alt={Works.Image} />

                            </div>
                            <div className={style.wrap}>
                                <div className={style.name}>
                                    <h5 className={style.title}>{Works.title}</h5>
                                    <h5 className={style.description}>{Works.description}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}