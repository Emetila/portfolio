import React, { useRef } from "react";
import style from './style.module.css';
import { ReactComponent as Image } from '../../asset/Images/img2.svg';
import { CustomButton } from "../Button";
import { FaArrowDown } from "react-icons/fa6";
import { ReactComponent as Image2 } from '../../asset/Images/mobileimage.svg';
import { SocialSection } from "../ContactBody/social";

export const AboutSectio = () => {
    const sectionRefs = useRef([]);

    const handleClick = (index) => {
        if (sectionRefs.current[index + 1]) {
            sectionRefs.current[index + 1].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={style.containbox}>
            <div className={style.container}>
                <div>
                    <Image className={style.image} />
                </div>
                <div className={style.containerbody}>
                    <div ref={(el) => (sectionRefs.current[0] = el)}>

                        <div>
                            <h1>Shulammite Ughojo</h1>
                            <p>Delivering Premium Product Design, Web Design and Development Services to Boost Your Online
                                Presence.</p>
                            <CustomButton className={style.applybtn} onClick={() => handleClick(0)} type="secondary">
                                <div>
                                    <FaArrowDown className={style.arrow} />
                                    About Me</div>
                            </CustomButton>
                        </div>
                    </div>

                    <div ref={(el) => (sectionRefs.current[1] = el)}>
                        <div>
                            <p className={style.name}>Shulammite Ughojo</p>
                            <h2>Your Partner in Bringing Your Design Vision to Life</h2>
                            <p className={style.body}>As a product designer, web designer and developer, I bring a unique combination of creativity
                                and technical expertise to every project. With a keen eye for design and a passion for
                                delivering user-friendly web experiences, I work closely with clients to understand their
                                needs and bring their vision to life.</p>
                            <br />
                            <p className={style.body}>My approach is rooted in collaboration and communication, and I take pride in my
                                ability to explain technical concepts in simple terms. Whether I'm developing a new
                                website from scratch or optimizing an existing site for search engines, I always strive
                                for excellence in both form and function. With a dedication to quality and a
                                commitment to staying on top of the latest trends and technologies, I am confident
                                in my ability to deliver exceptional results that exceed my clients' expectations.</p>

                            <Image2 className={style.imag2} />
                        </div>

                        <div>
                            <SocialSection />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}