import './NavBar.css';
import Scrollspy from "react-scrollspy";
import React, {useState} from "react";
import {Link} from "react-router-dom";

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
                <Scrollspy
                    items={['AboutMe', 'Projects', 'Experience']} currentClassName="is-current"
                >
                    <a href="#AboutMe">About Me</a>
                    <a href="#Projects">Projects`</a>
                    <a href="#Experience">Experience</a>
                </Scrollspy>
            </div>
            <Link to='/ContactMe'>
                <button className='cta-button'>Contact Me</button>
            </Link>
        </nav>
    );

};

export default NavBar;