import React from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";
import {personalSiteSlider} from "../constants/constants";
import classNames from "classnames";
import { motion} from "framer-motion";
import './PersonalWebsite.css'

const PersonalWebsite = () => {

    const siteSlider = [
        process.env.PUBLIC_URL + "icons8-javascript-48.png",
        process.env.PUBLIC_URL + "icons8-html-50.png",
        process.env.PUBLIC_URL + "icons8-css-48.png",
        process.env.PUBLIC_URL + "icons8-react-40.png"
    ];


    const [slideIndex, setSlideIndex] = useState(0);


    useEffect( () => {
        const nextPersonalSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % siteSlider.length);
        };
        const intervalID = setInterval(nextPersonalSlide, 3000);
        return () => clearInterval(intervalID);
    }, []);




    return (
        <div className="site-content">
            <NavBar />
            <div className="site-banner">
                <h1>Personal Portfolio Website</h1>
                <div className="siteSlider">
                    {siteSlider.map((slide, index) => (
                        <motion.img
                            loading="lazy"
                            key={index}
                            className={classNames("sabrSlider", {displaySlides: index === slideIndex})}
                            src={slide}
                            alt={`slide ${index}`}
                            inital={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            transition={{duration:0.5}}
                        />
                    ))}
                </div>
                <div className="site-info">
                    <div className="github-link">
                        <h2>Overview</h2>
                        <a
                            href="https://github.com/mikuza32/websiteportfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="github-icon"
                                src="https://img.icons8.com/3d-fluency/48/github.png"
                                alt="GitHub"
                            />
                        </a>
                    </div>
                    <p>The Simple Sabermetrics app allows users to track and calculate baseball performance metrics
                        like Batting Average, OPS, and ERA. Built with a modern tech stack: React, Spring Boot, MySQL, and more.</p>
                </div>
                <div className="site-images">
                    <h2>Images</h2>
                </div>
            </div>
        </div>
    )
};


export default PersonalWebsite;