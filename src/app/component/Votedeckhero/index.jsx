import React from "react";
import style from './style.module.css';
import { CustomButton } from "../Button";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Image } from '../../asset/Images/votedeckmockup.svg';
import { useParams } from 'react-router-dom';
import { Works } from "../Work/works";
import { FaArrowLeftLong } from "react-icons/fa6";

export const HeroVotedeck = () => {
    const navigate = useNavigate();
    const goToDetails = () => {
        navigate('/votedeck');
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
                    <h1>Votedeck</h1>
                    <p>VoteDeck is an online voting platform designed to facilitate secure and efficient voting
                        processes for organizations, communities, and events. The platform aims to provide a
                        user-friendly interface, robust security features, and comprehensive analytics for vote
                        management.
                    </p>
                </div>
                <div className={style.contentbox}>
                    <div className={style.content}>
                        <h2>Client</h2>
                        <p>Abdullahim</p>
                    </div>
                    <div>
                        <h2>Timeline</h2>
                        <p>2 Months</p>
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