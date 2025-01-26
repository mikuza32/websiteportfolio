import {useEffect, useState} from "react";


import './LandingPage.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css"
import {landingSlider} from "../constants/constants";
import {HashLink} from "react-router-hash-link";



const LandingPage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();

    const [repositories, setRepositories] = useState([]);



    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        if (window.location.hash) {
            const targetSection = document.querySelector(window.location.hash);
            if (targetSection) {
                targetSection.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer)
    }, [location]);



    const [slideIndex, setSlideIndex] = useState(0);

    useEffect( () => {
        const nextSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % landingSlider.length);
        };
        const intervalID = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        fetch("https://api.github.com/users/mikuza32/repos?sort=pushed")
            .then(res => res.json())
            .then(data => {
                setRepositories(data);
            })
            .catch(error => {
                console.error('Error loading Repositories', error);
            })
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
        <div className="content">
            {isLoading && <LoadingScreen />}
            <div className="landing-page">
                <section className="greeting-section">
                    <div className="personal-card" data-aos="fade-down">
                        <div className="personal-img">
                            <img src="_DSC3338.JPG" alt="Profile" />
                            <h2>Software Developer</h2>
                        </div>
                    </div>
                    <div className="greeting-desc" data-aos="fade-down" data-aos-delay="200">
                        <h1>Hello! I'm Zane Mikula.</h1>
                        <p>Welcome to my portfolio! I am a passionate entry level software developer
                            looking to make a break into the tech industry! I hope to provide some insight
                            on my experience and how I could potentially be a great fit for your team!</p>
                    </div>
                </section>
                <section className="information-section">
                    <div className="languages-slider">
                        <div className="languages-slider-container">
                            <img src="icons8-javascript-128.png" alt="Profile" />
                            <img src="icons8-react-100.png" alt="Language-1" />
                            <img src="icons8-java-128.png" alt="Language-2" />
                            <img src="icons8-html-96.png" alt="Language-3" />
                            <img src="icons8-css-128.png" alt="Language-4" />
                            <img src="icons8-python-128.png" alt="Language-5" />
                        </div>
                    </div>
                    <div className="info-card-container">
                        <div className="info-card" data-aos="fade-up">
                            <h2>About Me</h2>
                            <p>Learn more about me and my journey to becoming a Software Developer!</p>
                            <button>Learn More</button>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-delay="200">
                            <h2>Projects</h2>
                            <p>Learn more about the projects I have worked on!</p>
                            <HashLink smooth to="#projects-section">
                                <button>Learn More</button>
                            </HashLink>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-delay="450">
                            <h2>Experience</h2>
                            <p>Learn about the experience I have acquired!</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </section>
                <section className="projects-section" id="projects-section">
                    <h2>My Projects</h2>
                    <div className="project-cards">
                        <div className="project-card">
                            <img src="Screenshot (104).png" alt="SABR" />
                            <div className="projects-overlay">
                                <p>Simple Sabermetrics Application</p>
                                <Link to="/SimpleSabermetrics">
                                    <button>Learn More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="Screenshot (113).png" alt="VCentials" />
                            <div className="projects-overlay">
                                <p>VCentials Application</p>
                                <Link to="/VCentials">
                                    <button>Learn More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="week_5_charts.png" alt="SABR" />
                            <div className="projects-overlay">
                                <p>College Football Data</p>
                                <Link to="/CollegeFootballData">
                                    <button>Learn More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="Screenshot (104).png" alt="SABR" />
                            <div className="projects-overlay">
                                <p>Personal Portfolio Website</p>
                                <Link to="/PersonalWebsite">
                                    <button>Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="aboutMe" id="aboutMe-section">
                    <h1>About Me</h1>
                    <div className="aboutMe-cards">
                        <div className="aboutMe-card">

                        </div>
                    </div>
                </section>
                <section className="testimonials">
                    <h2>What My Past Instructors and Classmates Say</h2>
                    <div className="testimonial-cards">
                        <div className="testimonial-card" data-aos="fade-up">
                            <p>Hard worker with a creative mind!</p>
                            <p>- Professor, Valencia College</p>
                        </div>
                        <div className="testimonial-card" data-aos="fade-up">
                            <p>Hard worker with a creative mind!</p>
                            <p>- Professor, Valencia College</p>
                        </div>
                        <div className="testimonial-card" data-aos="fade-up">
                            <p>Hard worker with a creative mind!</p>
                            <p>- Professor, Valencia College</p>
                        </div>
                        <div className="testimonial-card" data-aos="fade-up">
                            <p>Hard worker with a creative mind!</p>
                            <p>- Professor, Valencia College</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );



}

export default LandingPage;
