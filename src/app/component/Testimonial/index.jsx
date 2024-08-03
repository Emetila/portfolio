import React, { useState, useEffect } from "react";
import style from './style.module.css';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CustomButton } from "../Button";
import { clientReviews } from "./review";

export const ReviewSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = Math.ceil(clientReviews.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slidesCount]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesCount) % slidesCount);
    };

    return (
        <section className={style.container}>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <h1>What my clients say</h1>
                    <p>See what my clients have to say about working with me and the results I helped them achieve.</p>
                </div>

                <div className={style.reviewcontainer}>

                    <div className={style.reviews}>
                        {clientReviews.slice(currentSlide * 1, currentSlide * 1 + 3).map((clientReviews, index) => (
                            <div key={index} className={style.reviewitem}>
                                <div>
                                    <img className={style.reviewimg} src={clientReviews.Image} alt={clientReviews.Image} />
                                </div>
                                <div className={style.reviewbody}>
                                    <h2 className={style.title}>{clientReviews.title}</h2>
                                    <FaQuoteLeft className={style.quote} />
                                    <p className={style.body}>{clientReviews.description}</p>
                                    <FaQuoteRight className={style.quoteright} />
                                </div>

                                <div key={index} className={style.reviewbox}>
                                    <h2 className={style.name}>{clientReviews.name}</h2>
                                    <p className={style.position}>{clientReviews.position}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className={style.controls}>
                        <CustomButton className={style.previous} onClick={prevSlide}>Previous</CustomButton>
                        <CustomButton className={style.next} onClick={nextSlide} type="secondary">Next</CustomButton>
                    </div>

                    <div className={style['carousel-indicators']}>
                        {[...Array(slidesCount)].map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}