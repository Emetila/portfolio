import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from './style.module.css';
import React from 'react';
import {ReactComponent as Logo1} from '../../asset/logo/logo1.svg';
import {ReactComponent as Logo2} from '../../asset/logo/logo2.svg';
import {ReactComponent as Logo3} from '../../asset/logo/logo3.svg';
import {ReactComponent as Logo4} from '../../asset/logo/logo4.svg';
import {ReactComponent as Logo5} from '../../asset/logo/logo5.svg';
import {ReactComponent as Logo6} from '../../asset/logo/logo6.svg';
import {ReactComponent as Logo7} from '../../asset/logo/logo7.svg';
import {ReactComponent as Logo8} from '../../asset/logo/logo8.svg';
import {ReactComponent as Logo9} from '../../asset/logo/logo9.svg';
import {ReactComponent as Logo10} from '../../asset/logo/logo10.svg';
import {ReactComponent as Logo11} from '../../asset/logo/logo11.svg';
import {ReactComponent as Logo12} from '../../asset/logo/logo12.svg';

export const LogoSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
      };
    
    return (
        <div className={style.body}>
            <Slider {...settings}>
        <div><Logo1 className={style.logo1} /></div>
        <div><Logo2 className={style.logo2} /></div>
        <div><Logo3 className={style.logo3} /></div>
        <div><Logo4 className={style.logo4}/></div>
        <div><Logo5 className={style.logo5} /></div>
        <div><Logo6 className={style.logo6} /></div>
        <div><Logo7 className={style.logo7} /></div>
        <div><Logo8 className={style.logo8} /></div>
        <div><Logo9 className={style.logo9} /></div>
        <div><Logo10 className={style.logo10} /></div>
        <div> <Logo11 className={style.logo11} /></div>
        <div><Logo12 className={style.logo12} /></div>
      </Slider>
        </div>
    )
}