import React from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import './CollegeBaseballDashboard.css'




const CollegeBaseballDashboard = () => {

    const colBaseballSlider = [
        process.env.PUBLIC_URL + "icons8-python-48.png",
        process.env.PUBLIC_URL + "icons8-nextjs-64.png",
        process.env.PUBLIC_URL + "icons8-tailwindcss-48.png"
    ];

    const [slideIndex, setSlideIndex] = useState(0);


    const colBaseballImages = [
        process.env.PUBLIC_URL + "Screenshot (166).png",
        process.env.PUBLIC_URL + "Screenshot (167).png",
        process.env.PUBLIC_URL + "Screenshot (168).png",
        process.env.PUBLIC_URL + "Screenshot (169).png"
    ];


    useEffect( () => {
        const colBaseballSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % colBaseballSlider.length);
        };
        const intervalID = setInterval(colBaseballSlide, 3000);
        return () => clearInterval(intervalID);
    }, []);



    return (
        <div className="cfb-content">
            <NavBar />
            <div className="cfb-banner">
                <h1>College Baseball Dashboard Project</h1>
                <div className="cfb-slider">
                    {colBaseballSlider.map((slide, index) => (
                        <motion.img
                            loading="lazy"
                            key={index}
                            className={classNames("sabrSlider", {displaySlides: index === slideIndex})}
                            src={slide}
                            alt={`slide ${index}`}
                            inital={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.5}}
                        />
                    ))}
                </div>
                <div className="cfb-info">
                    <div className="github-link">
                        <h2>Overview</h2>
                        <a
                            href="https://github.com/mikuza32/CollegeBaseballDashboard"
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
                    <p>In my College Baseball Dashboard project, I developed a full-stack application that gathers, processes, and visualizes
                        Division 1 College Baseball Individual Player statistics. I developed the backend using Python and the BeautifulSoup library to scrape
                        the individual player statistics from ncaa.com. Once the data was scraped, I stored the data securely in my Google Firebase project while using FastAPIs
                        to display the data via RESTful endpoints. The frontend uses Next.js which consumes the JSON data provided from the FastAPIs I created and turns the data
                        into helpful charts using Chart.js. Therefore, users can analyze and create conclusions based off the data I displayed in various charts and graphs.
                    </p>
                </div>
                <div className="cfb-images">
                    <h2>College Baseball Dashboard Project Images</h2>
                    {colBaseballImages.length > 0 ? (
                        <div className="cfb-cards">
                            {colBaseballImages.map((chart, index) => (
                                <div key={index} className="cfb-card">
                                    <img
                                        src={process.env.PUBLIC_URL + chart}
                                        alt={`week ${index + 1 + 2 + 2 + 3}`}
                                        className="cfb-image"
                                    />
                                    <p>NCAA Division 1 Baseball Data</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No Images available</p>
                    )}
                </div>
            </div>
        </div>
    )
};


export default CollegeBaseballDashboard;