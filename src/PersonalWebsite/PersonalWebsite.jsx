import React from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";
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
                    <p>The Personal Portfolio project I developed (and still is developing), was created to provide a
                        overall summary of the technology stack I have acquired through various projects and course work
                        while at Valencia College. I am currently an entry level software developer as I have no prior work
                        experience and I graduated with my Bachelors Degree at Valencia College on December, 2024.

                        This project has been fully developed using React and was deployed using Vercel. I plan to keep
                        on optimizing and improving upon this project as time goes on, to provide more insight on my
                        blossoming technical career.
                    </p>
                </div>
            </div>
        </div>
    )
};


export default PersonalWebsite;