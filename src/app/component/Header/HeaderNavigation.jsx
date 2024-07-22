import React, {useState} from "react";
import style from './style.module.css';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CustomButton } from "../Button";

export const HeaderNavigation = (props) => {
    const location = useLocation();

    const [activeNav, setActiveNav] = useState('/');

    const handleNavClick = (path) => {
        setActiveNav(path);
    };
    const [activeMenu, setActiveMenu] = useState(null);
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={style.navbar}>
            <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
            <ul lassName={props.className}>
                <li>
                <NavLink to="/about" 
                onClick={() => handleNavClick('/about')} className={activeNav === '/about' ? 'nav-item active' : 'nav-item'}>About</NavLink>
                </li>
                <li>
                <NavLink to="/portfolio" 
                onClick={() => handleNavClick('/portfolio')} className={activeNav === '/portfolio' ? 'nav-item active' : 'nav-item'}>Portfolio</NavLink>
                </li>
                <li>
                <NavLink to="/resume" 
                onClick={() => handleNavClick('/resume')} className={activeNav === '/resume' ? 'nav-item active' : 'nav-item'}>Resume</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    )
}