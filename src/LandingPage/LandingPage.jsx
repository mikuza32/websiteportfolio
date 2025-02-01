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
            once: false,
            offset: 100
        });
        AOS.refresh();
        if (window.location.hash) {
            const targetSection = document.querySelector(window.location.hash);
            if (targetSection) {
                targetSection.scrollIntoView({behavior: 'smooth'});
            }
        }
        return () => {
            AOS.refresh();
        };
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
                <section className="greeting-section" id="greeting-section">
                    <div className="personal-card" data-aos="fade-down">
                        <div className="personal-img">
                            <img src="_DSC3338.JPG" alt="Profile"/>
                            <h2>Software Developer</h2>
                            <a href="/Zane_Mikula_Software_Developer_Resume.pdf" download>
                                <button className="download-button">Resume</button>
                            </a>
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
                            <img src="icons8-javascript-128.png" alt="Profile" data-aos="fade-right"/>
                            <img src="icons8-react-native-96.png" alt="Language-1" data-aos="fade-left" data-aos-delay="300" />
                            <img src="icons8-java-128.png" alt="Language-2" data-aos="fade-down" data-aos-delay="600"/>
                            <img src="icons8-html-96.png" alt="Language-3" data-aos="fade-up" data-aos-delay="900"/>
                            <img src="icons8-css-128.png" alt="Language-4" data-aos="fade-right" data-aos-delay="1200"/>
                            <img src="icons8-python-128.png" alt="Language-5" data-aos="fade-left" data-aos-delay="1500"/>
                        </div>
                    </div>
                    <div className="info-card-container">
                        <div className="info-card" data-aos="fade-up">
                            <h2>About Me</h2>
                            <p>Learn more about me and my journey to becoming a Software Developer!</p>
                            <HashLink smooth to="/#aboutMe-section">
                                <button>Learn More</button>
                            </HashLink>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-delay="200">
                            <h2>Projects</h2>
                            <p>Learn more about the projects I have worked on!</p>
                            <HashLink smooth to="/#projects-section">
                                <button>Learn More</button>
                            </HashLink>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-delay="450">
                            <h2>Testimonials</h2>
                            <p>Here from past instructors endorsing my skills.</p>
                            <HashLink smooth to="/#testimonials-section">
                                <button>Learn More</button>
                            </HashLink>
                        </div>
                    </div>
                </section>
                <section className="projects-section" id="projects-section">
                    <h2>My Projects</h2>
                    <div className="project-cards">
                        <div className="project-card">
                            <img src="Screenshot (104).png" alt="SABR" data-aos="fade-right" />
                            <div className="projects-overlay">
                                <p>Simple Sabermetrics Application</p>
                                <Link to="/SimpleSabermetrics">
                                    <button>Learn More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="Screenshot (113).png" alt="VCentials" data-aos="fade-left" data-aos-delay="200"/>
                            <div className="projects-overlay">
                                <p>VCentials Application</p>
                                <Link to="/VCentials">
                                    <button>Learn More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="week_5_charts.png" alt="SABR" data-aos="fade-right" data-aos-delay="400"/>
                            <div className="projects-overlay">
                                <p>College Football Data</p>
                                <Link to="/CollegeFootballData">
                                    <button>Learn More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="Screenshot (104).png" alt="SABR" data-aos="fade-left" data-aos-delay="600"/>
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
                        <div className="aboutMe-card" data-aos="fade-up">
                            <h2>My Education</h2>
                            <p>I currently have a Bachelors Degree from Valencia College, where I gained knowledge of Software Development
                                principles and moder programming practices. Throughout my time at Valencia College I worked on various
                                projects that developed my problem-solving skills focusing on full-stack web development.
                            </p>
                        </div>
                        <div className="aboutMe-card" data-aos="fade-up" data-aos-delay="200">
                            <h2>Skills and Technology Stack</h2>
                            <p>
                                I am proficient and have experience in a range of technologies with a focus for front-end development, including:
                                <ul>
                                    <li><strong>Front-end: </strong>JavaScript, React, HTML5, CSS3</li>
                                    <li><strong>Back-end: </strong>Java, Node.js, Spring Boot</li>
                                    <li><strong>Databases: </strong>MySQL, Firebase</li>
                                    <li><strong>Tools: </strong>Git, AWS, Vercel</li>
                                </ul>
                            </p>
                        </div>
                        <div className="aboutMe-card" data-aos="fade-up" data-aos-delay="400">
                            <h2>Experience</h2>
                            <p>As a software developer I have worked on various projects involving multiple frameworks and languages.
                                From querying APIs to retrieve resourceful data to developing a full-stack web application that
                                can calculate a users baseball sabermetrics persistently while using modern technologies. I also
                                developed and deployed this personal site by myself, with the intent to update it in later versions
                                to provide my newly acquired knowledge on web scraping while using Node.js.


                            </p>
                        </div>
                    </div>
                </section>
                <section className="testimonials" id="testimonials-section">
                    <h1>Testimonial</h1>
                    <div className="testimonial-cards">
                        <div className="testimonial-card" data-aos="fade-up">
                            <div className="testimonial-image">
                                <img src="VC-Secondary-Web.png" alt="school logo"/>
                            </div>
                            <div className="testimonial-text">
                                <p>❝Zane was a student in my Open Source Web Technologies course during the Fall 2024
                                    semester. This research-intensive course required students to build their own
                                    full-stack web application using multiple open-source frameworks. For his project,
                                    Zane developed a web application that provided an advanced analysis of various
                                    baseball
                                    statistics. He successfully combined front-end design, UI/UX principles, and backend
                                    integration to create a fully functional and polished app.

                                    Throughout the course, Zane consistently met all deadlines and delivered
                                    high-quality
                                    work at every checkpoint. Through this experience, he developed several
                                    industry-standard
                                    full-stack development skills that would make him a valuable asset to any employer.
                                    It was a pleasure having him in my class.❞</p>
                                <p>- Professor Ashley Evans, Valencia College</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer">
                    <div className="footer-content">
                        <div className="footer-socials">
                            <a href="https://github.com/mikuza32" target="_blank" rel="noopener noreferrer">
                                <img src="icons8-github-50.png" alt="GitHub Footer" className="github-footer"/>
                            </a>
                            <a href="https://www.linkedin.com/in/zane-mikula-156b22283/" target="_blank"
                               rel="noopener noreferrer">
                                <img src="icons8-linkedin-48.png" alt="LinkedIn Footer" className="linkedin-footer"/>
                            </a>
                        </div>
                        <div className="footer-nav">
                            <HashLink smooth to="#greeting-section" className='greeting-button-footer'>Home</HashLink>
                            <HashLink smooth to="#aboutMe-section" className='about-button-footer'>About Me</HashLink>
                            <HashLink smooth to="#projects-section"
                                      className='projects-button-footer'>Projects</HashLink>
                            <HashLink smooth to="#testimonials-section"
                                      className='testimonial-button-footer'>Testimonials</HashLink>
                            <Link to="/ContactMe" className="contact-me-page-footer">Contact Me</Link>
                        </div>
                        <div className="footer-copy">
                            <p>2025 Zane Mikula</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );


}

export default LandingPage;
