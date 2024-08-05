import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Image } from '../../asset/Images/sjfashionmockup.svg';
import { FaArrowLeftLong } from "react-icons/fa6";

export const HeroSjfashion = () => {
    const navigate = useNavigate();
    const goToDetails = () => {
        navigate('/sj-fashion');
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
                    <h1>SJ FASHION</h1>
                    <p>SJ Fashion Empire is an online customize cloth store for only women and children, where 
                        customers can choose to either buy already available clothes or request customization. 
                        The website was designed to showcase different clothes for customers and facilitate 
                        easy discovery.
                    </p>
                </div>
                <div className={style.contentbox}>
                    <div className={style.content}>
                        <h2>Client</h2>
                        <p>Juliet Ughojo</p>
                    </div>
                    <div>
                        <h2>Timeline</h2>
                        <p>6 months</p>
                    </div>
                    <div>
                        <h2>Tool</h2>
                        <p>WordPress</p>
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