import React from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";



const VCentials = () => {

    const vcentialSlider = [
        process.env.PUBLIC_URL + "icons8-javascript-48.png",
        process.env.PUBLIC_URL + "icons8-react-40.png",
        process.env.PUBLIC_URL + "icons8-html-50.png",
        process.env.PUBLIC_URL + "icons8-css-48.png",

    ]

    const [slideIndex, setSlideIndex] =  useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % vcentialSlider.length);
    };

    useEffect( () => {
        const intervalID = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalID);
    }, [nextSlide]);



    return (
        <div className="vcentials-content">
            <NavBar />
            <div className="head-banner">
                <h1>VCentials</h1>
                <div className="vcentialSlider">
                    {vcentialSlider.map((slide, index) => (
                        <img
                            key={index}
                            className={`vcentialSlider ${index === slideIndex ? "displaySlides" : ""}`}
                            src={slide}
                            alt={`slide ${index}`}
                        />
                    ))}
                </div>
                <div className="vcentials-info">
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
                    <p>Empty</p>
                </div>
                <div className="vcentials-images">
                    <h2>Images</h2>
                </div>
            </div>
        </div>
    )
};


export default VCentials