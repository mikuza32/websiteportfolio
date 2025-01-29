import './NavBar.css';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY < 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);




    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="hash-links">
                <HashLink smooth to="/#greeting-section" className='home-button'>Home</HashLink>
                <HashLink smooth to="/#projects-section" className='projects-button'>Projects</HashLink>
                <HashLink smooth to="/#aboutMe-section" className= 'about-button'>About Me</HashLink>
            </div>
            <Link to='/ContactMe'>
                <button className='cta-button'>Contact Me</button>
            </Link>
        </nav>
    );
};

export default NavBar;