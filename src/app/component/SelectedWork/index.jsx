import React from "react";
import style from './style.module.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FewWorks } from "./work";

export const SelectedWorkSection = () => {
    return (
        <section className={style.container}>
            <div className={style.headerbox}>
                <h1>Selected Works</h1>
                <div className={style.linkbox}>
                    <FaArrowRight className={style.arrowicon} />
                    <Link to="/portfolio">See All</Link>
                </div>
            </div>

            <div>
                <div className={style.works} key={FewWorks.id}>
                    {FewWorks.map((Works) => (
                        <div key={Works.id} className={style.workbox}>
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