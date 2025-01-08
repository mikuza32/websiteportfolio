import React from "react";
import NavBar from "../NavBar/NavBar";
import '../Design/LandingPage.css';


const LandingPage = () => {


    return (
        <div>
            <NavBar />
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
            <div className='intro-banner'>
                <div className='AboutMe' id="AboutMe">
                    <h2>About Me:</h2>
                    <p>Empty</p>
                </div>
                <div className='Projects' id="Projects">
                    <h2>Projects:</h2>
                    <p>Empty</p>
                </div>
                <div className='Experience' id="Experience">
                    <h2>Experience:</h2>
                    <p>Empty</p>
                </div>
            </div>
        </div>
    );


}

export default LandingPage;