import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Image } from '../../asset/Images/famebirdmockup.svg';
import { FaArrowLeftLong } from "react-icons/fa6";

export const HeroFamebird = () => {
    const navigate = useNavigate();
    const goToDetails = () => {
        navigate('/famebird');
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
                    <h1>Famebirds</h1>
                    <p>Famebirds is a cutting-edge product design concept aimed at revolutionizing the 
                        influencer marketing industry. The work I did highlights how the innovative website 
                        enhances the influencer collaboration process
                    </p>
                </div>
                <div className={style.contentbox}>
                    <div className={style.content}>
                        <h2>Client</h2>
                        <p>Lilian Akwunwa</p>
                    </div>
                    <div>
                        <h2>Timeline</h2>
                        <p>1 year</p>
                    </div>
                    <div>
                        <h2>Service</h2>
                        <p>Product (UI/UX) Design</p>
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