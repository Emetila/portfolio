import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Image } from '../../asset/Images/buywihease.svg';
import { FaArrowLeftLong } from "react-icons/fa6";

export const HeroBuywithease = () => {
    const navigate = useNavigate();
    const goToDetails = () => {
        navigate('/buy-with-ease');
    };
    const goBack = () => {
        navigate('/portfolio');
    }


    return (
        <section className={style.container}>
            <div onClick={goBack} className={style.directionbox}>
                <FaArrowLeftLong className={style.arrowback} />
                <p>Go back</p>
            </div>
            <div className={style.body}>
                <div className={style.titlebox}>
                    <h1>Buy With Ease</h1>
                    <p>Buy WIth Ease is an online store for small medium enterprise, focusing on user-friendly 
                        interfaces, efficient product management, and seamless checkout processes to help small 
                        medium enterprises (SMEs) reach a larger audience.
                    </p>
                </div>
                <div className={style.contentbox}>
                    <div className={style.content}>
                        <h2>Client</h2>
                        <p>Buy With Ease</p>
                    </div>
                    <div>
                        <h2>Timeline</h2>
                        <p>2 Months</p>
                    </div>
                    <div>
                        <h2>Service</h2>
                        <p>Frontend Developer</p>
                    </div>
                </div>

                <CustomButton className={style.morebtn} onClick={goToDetails} type="secondary">
                    <div>
                        <FaArrowDown className={style.arrow} />
                        More Details</div>
                </CustomButton>
            </div>

            <div className={style.imgbox}>
                <Image className={style.image} />
            </div>
        </section>
    )
}