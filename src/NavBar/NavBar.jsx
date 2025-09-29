import './NavBar.css';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };




    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-container">
                    <HashLink smooth to="/#greeting-section" className="navbar-logo">
                        <img src='new-logo.svg' alt='logo' className='logo-svg'/>
                    </HashLink>
                    <div className="hash-links">
                        <HashLink smooth to="/#greeting-section" className='nav-link'>HOME</HashLink>
                        <HashLink smooth to="/#projects-section" className='nav-link'>PROJECTS</HashLink>
                        <HashLink smooth to="/#aboutMe-section" className= 'nav-link'>ABOUT</HashLink>
                        <HashLink smooth to="/#myExperience-section" className= 'nav-link'>EXPERIENCE</HashLink>
                        <HashLink smooth to="/#testimonials-section" className='nav-link'>TESTIMONIALS</HashLink>
                        <Link to="/ContactMe" className='cta-button'>CONTACT</Link>
                    </div>
                    <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <HashLink smooth to="/#greeting-section" className='nav-link' onClick={closeMobileMenu}>HOME</HashLink>
                <HashLink smooth to="/#projects-section" className='nav-link' onClick={closeMobileMenu}>PROJECTS</HashLink>
                <HashLink smooth to="/#aboutMe-section" className='nav-link' onClick={closeMobileMenu}>ABOUT</HashLink>
                <HashLink smooth to="/#myExperience-section" className='nav-link' onClick={closeMobileMenu}>EXPERIENCE</HashLink>
                <HashLink smooth to="/#testimonials-section" className='nav-link' onClick={closeMobileMenu}>TESTIMONIALS</HashLink>
                <Link to="/ContactMe" onClick={closeMobileMenu}>
                    <button className='cta-button mobile-cta'>CONTACT</button>
                </Link>
            </div>
        </>
    );
};

export default NavBar;