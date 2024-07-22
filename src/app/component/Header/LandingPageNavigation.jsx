import React, {useState} from "react";
import style from './style.module.css';
import { HeaderNavigation } from "./HeaderNavigation";
import { CustomButton } from "../Button";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

export const LandingPageNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <header className={style.headerbox}>
            <div>
                <Link to="/"><h1>Shulammite</h1></Link>
            </div>
            <IoMdMenu className={style['menu-icon']} onClick={toggleMenu} />
            <div className={style.menu}>
            {isOpen && (
                <HeaderNavigation />
            )}
            </div>
            <CustomButton onClick= {() => {}}>Let's Talk</CustomButton>
        </header>
    )
}