import React from "react-router-dom";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar";
import '../SimpleSabermetrics/SimpleSabermetrics.css'
import {sabrSlider} from "../constants/constants";
import classNames from "classnames"



const SimpleSabermetrics = () => {

    const [slideIndex, setSlideIndex] = useState(0);


    useEffect( () => {
        const nextSabrSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % sabrSlider.length);
        };
        const intervalID = setInterval(nextSabrSlide, 3000);
        return () => clearInterval(intervalID);
    }, []);



    return (
        <div className="sabr-content">
            <NavBar />
            <div className="head-banner">
                <h1>Simple Sabermetrics Web Application</h1>
                <div className="sabrSlider-container">
                    {sabrSlider.map((slide, index) => (
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
                <div className="sabr-info">
                    <div className="github-link">
                        <h2>Overview</h2>
                        <a
                            href="https://github.com/mikuza32/simpleSabreScorecardApp"
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
                <div className="sabr-images">
                    <h2>Images</h2>
                </div>
            </div>
        </div>
    )
};


export default SimpleSabermetrics;