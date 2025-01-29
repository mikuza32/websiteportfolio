import React from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import classNames from "classnames";
import './VCentials.css'



const VCentials = () => {

    const vcentialSlider = [
        process.env.PUBLIC_URL + "icons8-javascript-48.png",
        process.env.PUBLIC_URL + "icons8-react-40.png",
        process.env.PUBLIC_URL + "icons8-html-50.png",
        process.env.PUBLIC_URL + "icons8-css-48.png",

    ];

    const vcentialScreenshots = [
        process.env.PUBLIC_URL + "Screenshot (113).png",
        process.env.PUBLIC_URL + "Screenshot (110).png",
    ]

    const [slideIndex, setSlideIndex] =  useState(0);



    useEffect( () => {
        const nextVCentialSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % vcentialSlider.length);
        };
        const intervalID = setInterval(nextVCentialSlide, 3000);
        return () => clearInterval(intervalID);
    }, []);



    return (
        <div className="vcential-content">
            <NavBar />
            <div className="vcential-banner">
                <h1>VCentials Web Application</h1>
                <div className="vcentialSlider">
                    {vcentialSlider.map((slide, index) => (
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
                <div className="vcential-info">
                    <div className="github-link">
                        <h2>Overview</h2>
                        <a
                            href="https://github.com/mikuza32/vcentials_web"
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
                <div className="vcential-images">
                    <h2>VCentials App Photos</h2>
                    {vcentialScreenshots.length > 0 ? (
                        <div className="vcential-cards">
                            {vcentialScreenshots.slice(0, 2).map((screenshot, index) => (
                                <div key={index} className="vcential-card">
                                    <img
                                        src={process.env.PUBLIC_URL + screenshot}
                                        alt={`week ${index + 1}`}
                                        className="vcential-image"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No Images Available</p>
                    )}
                </div>
            </div>
        </div>
    )
};


export default VCentials