import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Image } from '../../asset/Images/malicha.svg';
import { FaArrowLeftLong } from "react-icons/fa6";

export const HeroMalicha = () => {
    const navigate = useNavigate();
    const goToDetails = () => {
        navigate('/malicha');
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
                    <h1>Malicha</h1>
                    <p>MALICHA is the leading light sent to birth Visionary African Authors across the globe, 
                        that helps ‘midwife’ you from conception through gestation and delivery, to become an 
                        author. It is also a platform that sells books and offer courses to train others too.
                    </p>
                </div>
                <div className={style.contentbox}>
                    <div className={style.content}>
                        <h2>Client</h2>
                        <p>Lilian Akwunwa</p>
                    </div>
                    <div>
                        <h2>Timeline</h2>
                        <p>1 year +</p>
                    </div>
                    <div>
                        <h2>Tool</h2>
                        <p>Figma</p>
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