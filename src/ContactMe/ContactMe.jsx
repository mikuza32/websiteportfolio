import React from "react-router-dom";
import '../ContactMe/ContactMe.css';

const ContactMe = () => {
    return (

        <div className="contact-me-page">
            <div className="head-banner">
                <h1>Contact Me</h1>
                <h3>Get In Touch!</h3>
            </div>
            <div className="contact-box-container">
                <div className="mail-contact-card">
                    <h2>Email me here!</h2>
                    <div className="mail-contact-icon">
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
                </div>
                <div className="linkedin-contact-card">
                    <h2>Contact me on LinkedIn!</h2>
                    <div className="linkedin-contact-icon">
                        <a
                            href="https://www.linkedin.com/in/zane-mikula-156b22283/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="linkedin-icon"
                                src="https://img.icons8.com/3d-fluency/48/linkedin--v2.png"
                                alt="LinkedIn"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
