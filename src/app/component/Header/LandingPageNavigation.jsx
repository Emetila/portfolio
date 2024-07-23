import React from "react";
import { HeaderNavigation } from "./HeaderNavigation";
import { CustomButton } from "../Button";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import './LandingPage.css'

export const LandingPageNavigation = () => {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };
    const [showMenu, setMenu] = React.useState(false);

    const toggleMenu = () => {
        setMenu(showMenu === false)
    }
    return (
        <header className="headerbox">
            <div>
                <Link className="logo" to="/">Shulammite</Link>
            </div>
            <IoMdMenu className="menu-icon" onClick={toggleMenu} />
            <div className='menu'>
                <HeaderNavigation className={showMenu ? 'mobile' : ''}/>
            </div>
            <CustomButton className="button" onClick= {goToContact}>Let's Talk</CustomButton>
        </header>
    )
}