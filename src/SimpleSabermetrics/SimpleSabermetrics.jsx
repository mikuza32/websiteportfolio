import React, {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar";
import '../SimpleSabermetrics/SimpleSabermetrics.css'
import {sabrSlider} from "../constants/constants";
import classNames from "classnames"
import {HashLink} from "react-router-hash-link";



const SimpleSabermetrics = () => {

    const sabrScreenshots = [
        process.env.PUBLIC_URL + "Screenshot (149).png",
        process.env.PUBLIC_URL + "Login Page.png",
        process.env.PUBLIC_URL + "About Me Page.png",
        process.env.PUBLIC_URL + "Screenshot (104).png"
    ];


    const [formValue, setFormValue] = useState( {
        atBats: '',
        walks: '',
        hits: '',
        hitByPitch: '',
        sacFlies: '',
        onBasePercentage: '',
        defWalks: '',
        defHits: '',
        inningsPitched: '',
        walksHitsInningsPitched: ''
    });


    const handleInput = (Event) => {
        const {name, value} = Event.target;
        setFormValue({...formValue,[name]: value});
    }

    const calcOnBasePercentage = (Event) => {
        Event.preventDefault();
        const {atBats, walks, hits, sacFlies, hitByPitch} = formValue;
        const ABs = parseFloat(atBats) || 0;
        const BBs = parseFloat(walks) || 0;
        const H = parseFloat(hits) || 0;
        const SF = parseFloat(sacFlies) || 0;
        const HBP = parseFloat(hitByPitch) || 0;

        const onBasePercentage = (H + BBs + HBP) / (ABs + BBs + HBP + SF);
        const onBasePercentageFixed = onBasePercentage && (ABs + BBs + SF + HBP) > 0 ? onBasePercentage.toFixed(3): '0.000';
        setFormValue({...formValue, onBasePercentage: onBasePercentageFixed});
    };

    const calcWHIP = (Event) => {
        Event.preventDefault();
        const {defWalks, defHits, inningsPitched} = formValue;
        const DBBs = parseFloat(defWalks) || 0;
        const DHs = parseFloat(defHits) || 0;
        const IP = parseFloat(inningsPitched) || 0;

        const walksHitsInningsPitched = (DBBs + DHs) / IP;
        const walksHitsInningsPitchedFixed = walksHitsInningsPitched && (IP) > 0 ? walksHitsInningsPitched.toFixed(3): '0.000';
        setFormValue({...formValue, walksHitsInningsPitched: walksHitsInningsPitchedFixed});
    };

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
            <NavBar/>
            <div className="simple-banner">
                <h1>Simple Sabermetrics Web Application</h1>
                <div className="sabrSlider-container">
                    {sabrSlider.map((slide, index) => (
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
                        like Batting Average, OPS, and ERA. This application I developed was built with a modern tech stack
                        including React, Spring Boot, and MySQL.

                        This application helps a user by providing data to the application to understand their quantitative results.
                        A user can then take this data they retrieved from the application to understand their own or someone else's
                        performance on the baseball field. In recent years, the ability to analyze numbers of the game can help improve
                        ones overall performance or identify what they struggle in. Therefore, using this application can help users
                        improve their own performance or understand the game by the numbers as a whole.
                    </p>
                </div>
                <div className="tryMe-cards">
                    <div className="tryMe-card">
                        <h2>Calculate On Base Percentage Example</h2>
                        <form onSubmit={calcOnBasePercentage}>
                            <label>
                                Total At Bats:
                                <input type="number" name="atBats" value={formValue.atBats} onChange={handleInput}/>
                            </label>
                            <label>
                                Total Walks:
                                <input type="number" name="walks" value={formValue.walks} onChange={handleInput}/>
                            </label>
                            <label>
                                Total Hit By Pitch:
                                <input type="number" name="hitByPitch" value={formValue.hitByPitch}
                                       onChange={handleInput}/>
                            </label>
                            <label>
                                Total Hits:
                                <input type="number" name="hits" value={formValue.hits} onChange={handleInput}/>
                            </label>
                            <label>
                                Total Sacrifice Flies:
                                <input type="number" name="sacFlies" value={formValue.sacFlies} onChange={handleInput}/>
                            </label>
                            <div>
                                <span>Calculation: </span>
                                <input type="text" name="onBasePercentage" value={formValue.onBasePercentage} readOnly/>
                            </div>
                            <button type="submit">Calculate</button>
                        </form>
                    </div>
                    <div className="tryMe-card">
                        <h2>Calculate WHIP Example</h2>
                        <form onSubmit={calcWHIP}>
                            <label>
                                Total Hits Allowed:
                                <input type="number" name="defHits" value={formValue.defHits} onChange={handleInput}/>
                            </label>
                            <label>
                                Total Walks Allowed:
                                <input type="number" name="defWalks" value={formValue.defWalks} onChange={handleInput}/>
                            </label>
                            <label>
                                Total Innings Pitched:
                                <input type="number" name="inningsPitched" value={formValue.inningsPitched}
                                       onChange={handleInput}/>
                            </label>
                            <div>
                                <span>Calculation: </span>
                                <input type="text" name="walksHitsInningsPitched"
                                       value={formValue.walksHitsInningsPitched} readOnly/>
                            </div>
                            <button type="submit">Calculate</button>
                        </form>
                    </div>
                </div>
                <div className="sabr-images">
                    <h2>Simple Sabermetrics Site Photos</h2>
                    {sabrScreenshots.length > 0 ? (
                        <div className="sabr-cards">
                            {sabrScreenshots.map((screenshot, index) => (
                                <div key={index} className="sabr-card">
                                    <img
                                        src={process.env.PUBLIC_URL + screenshot}
                                        alt={`week ${index + 1 + 2 + 2 + 3}`}
                                        className="sabr-image"
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


export default SimpleSabermetrics;