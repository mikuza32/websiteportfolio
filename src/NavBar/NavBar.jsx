import './NavBar.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const NavBar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar-unclicked");
    const [menu_class, setMenuClass] = useState("menu-hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar-clicked");
            setMenuClass("menu-visible");
        } else {
            setBurgerClass("burger-bar-unclicked")
            setMenuClass("menu-hidden")
        }
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <nav className="navbar">
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
            <div className={`menu ${menu_class}`}>
                <HashLink smooth to="#AboutMe" onClick={updateMenu}>About Me</HashLink>
                <HashLink smooth to="#Projects" onClick={updateMenu}>Projects</HashLink>
                <HashLink smooth to="#Experience" onClick={updateMenu}>Experience</HashLink>
            </div>
            <Link to='/ContactMe'>
                <button className='cta-button'>Contact Me</button>
            </Link>
        </nav>
    );

};

export default NavBar;