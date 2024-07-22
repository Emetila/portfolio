import React from "react";
import style from './style.module.css';
import { Offers } from "./offers";
import { motion } from "framer-motion";

export const OfferSection = () => {
    return (
        <motion.div className={style.container}
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
            <div>
                <div className={style.offers} key={Offers.id}>
                    {Offers.map((Offers) => (
                        <div className={style.offerbox}>
                            <div className={style.name}>
                                <p className={style.number}>{Offers.number}</p>
                                <h2 className={style.title}>{Offers.title}</h2>
                                <p className={style.description}>{Offers.description}</p>
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
            </div>
        </motion.div>
    )
}