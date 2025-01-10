import React, {useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";
import './LandingPage.scss';
import {useNavigate} from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css"


const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration:1000,
            once:true,
        });
    }, []);


    const iconSlider = [
        process.env.PUBLIC_URL + "icons8-javascript-48.png",
        process.env.PUBLIC_URL + "icons8-react-40.png",
        process.env.PUBLIC_URL + "icons8-html-50.png",
        process.env.PUBLIC_URL + "icons8-css-48.png",
        process.env.PUBLIC_URL + "icons8-java-48.png",
        process.env.PUBLIC_URL + "icons8-spring-boot-48.png",
        process.env.PUBLIC_URL + "icons8-python-48.png",
        process.env.PUBLIC_URL + "icons8-aws-48.png"
    ];

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % iconSlider.length);
    };

    useEffect( () => {
        const intervalID = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalID);
    }, []);

    const loadCFB = () => {
        navigate('/CollegeFootballData');
    };

    const loadPersonalSite = () => {
        navigate('/PersonalWebsite');
    };
    const loadVCentials = () => {
        navigate('/VCentials');
    };
    const loadSabermetrics = () => {
        navigate('/SimpleSabermetrics');
    };


    return (
        <div className="landing-page">
            <LoadingScreen />
            <NavBar />
            <div className="box">
                <div className="content-wrapper">
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/zane-mikula-156b22283/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="linkedin-icon"
                                src="https://img.icons8.com/3d-fluency/48/linkedin-logo.png"
                                alt="LinkedIn"
                            />
                        </a>
                        <a
                            href="https://github.com/mikuza32"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="github-icon"
                                src="https://img.icons8.com/3d-fluency/48/github.png"
                                alt="GitHub"
                            />
                        </a>
                        <a
                            href="mailto:mikuza32@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="Gmail-icon"
                                src="https://img.icons8.com/3d-fluency/48/gmail.png"
                                alt="Gmail"
                            />
                        </a>
                    </div>
                    <div className='intro-banner' data-aos="fade-down">
                        <h1 className="my-name">Zane Mikula</h1>
                        <h3 className="soft-dev">Software Developer</h3>
                        <div className='AboutMe' id="AboutMe" data-aos="fade-right">
                            <h2>About Me</h2>
                            <p>Empty</p>
                        </div>
                        <div className='Projects' id="Projects" data-aos="fade-left">
                            <h2>Projects</h2>
                            <div className="projectList">
                                <ul>
                                    <li><strong>Simple Sabermetrics Web Application ----------------- 2024</strong>
                                        <button onClick={loadSabermetrics}>Learn More...</button>
                                    </li>
                                    <li><strong>VCentials Web Application ------------------------------ 2024</strong>
                                        <button onClick={loadVCentials}>Learn More...</button>
                                    </li>
                                    <li><strong>College Football Data ------------------------------------ 2024</strong>
                                        <button onClick={loadCFB}>Learn More...</button>
                                    </li>
                                    <li><strong>Personal Portfolio Website ------------------------------ 2025</strong>
                                        <button onClick={loadPersonalSite}>Learn More...</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='Experience' id="Experience" data-aos="zoom-in">
                            <h2>Experience</h2>
                            <div className="experience-slider">
                                {iconSlider.map((slide, index) => (
                                    <img
                                        key={index}
                                        className={`iconSlider ${index === slideIndex ? "displaySlides" : ""}`}
                                        src={slide}
                                        alt={`slide ${index}`}
                                        style={{display: index === slideIndex ? "block" : "none"}}/>
                                ))}
                            </div>
                            <p>Empty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default LandingPage;