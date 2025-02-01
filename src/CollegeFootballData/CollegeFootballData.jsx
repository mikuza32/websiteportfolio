import React from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import './CollegeFootballData.css'




const CollegeFootballData = () => {

    const cfbSlider = [
        process.env.PUBLIC_URL + "icons8-python-48.png",
        process.env.PUBLIC_URL + "icons8-aws-48.png"
    ];

    const [slideIndex, setSlideIndex] = useState(0);


    const cfbCharts = [
        process.env.PUBLIC_URL + "week_1_charts.png",
        process.env.PUBLIC_URL + "week_3_charts.png",
        process.env.PUBLIC_URL + "week_5_charts.png",
        process.env.PUBLIC_URL + "week_8_charts.png"
    ];


    useEffect( () => {
        const nextCFBSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % cfbSlider.length);
        };
        const intervalID = setInterval(nextCFBSlide, 3000);
        return () => clearInterval(intervalID);
    }, []);



    return (
        <div className="cfb-content">
            <NavBar />
            <div className="cfb-banner">
                <h1>College Football Data</h1>
                <div className="cfbSlider">
                    {cfbSlider.map((slide, index) => (
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
                            href="https://github.com/mikuza32/collegeFootballData"
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
                    <p>In my College Football Data project, I developed Python scripts that query a College Football Data API.
                        After the data is queried, the scripts then retrieve the data in a JSON format in a seperate JSON file,
                        and is put in a separate directory in the project. This data is then manipulated using pandas and matplotlib
                        to visualize this data into various charts and graphs.

                        The purpose of this project is to gather small data and create conclusions off of that data, therefore
                        the data I had retrieved was focused on the University of Colorado's football team. I measured their first
                        8 games of the season and used the important offensive and defensive statistics I queried to create conclusions
                        on their win-loss ratio.
                    </p>
                </div>
                <div className="cfb-images">
                    <h2>Images</h2>
                    {cfbCharts.length > 0 ? (
                        <div className="cfb-cards">
                            {cfbCharts.map((chart, index) => (
                                <div key={index} className="cfb-card">
                                    <img
                                        src={process.env.PUBLIC_URL + chart}
                                        alt={`week ${index + 1 + 2 + 2 + 3}`}
                                        className="cfb-image"
                                    />
                                    <p>Colorado Football Performance Data</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No Charts available</p>
                    )}
                </div>
            </div>
        </div>
    )
};


export default CollegeFootballData;