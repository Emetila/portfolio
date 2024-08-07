import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Image } from '../../asset/Images/gocipemockup.svg';
import { FaArrowLeftLong } from "react-icons/fa6";

export const HeroGocipe = () => {
    const navigate = useNavigate();
    const goToDetails = () => {
        navigate('/gocipe');
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
                    <h1>Go'cipe</h1>
                    <p>The startup company, Go'cipe, is a food company that neeed an app where users can watch 
                        cooking videos, upload videos discover, share, and create recipes, as well as plan meals 
                        and more.
                    </p>
                </div>
                <div className={style.contentbox}>
                    <div className={style.content}>
                        <h2>Client</h2>
                        <p>Go'cipe (Sidehustle Bootcamp)</p>
                    </div>
                    <div>
                        <h2>Timeline</h2>
                        <p>2 Months</p>
                    </div>
                    <div>
                        <h2>Service</h2>
                        <p>UI/UX Designer</p>
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