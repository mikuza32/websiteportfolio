import {landingSlider} from "./constants/constants";
import classNames from "classnames";


{/*<div className="contribution-section">
    <h2>GitHub Contribution Graph</h2>
    <img
        src="https://github-readme-stats.vercel.app/api?username=mikuza32&show_icons=true&hide=prs&count_private=true"
        alt="GitHub Stats"
        className="github-stats"
    />
</div>


<div className="content-wrapper">
    <div className="social-icons">
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


    <div className="intro-banner" data-aos="fade-down">
        <h1 className="my-name">Zane Mikula</h1>
        <h3 className="soft-dev">Software Developer</h3>
    </div>


    <div className="section" id="AboutMe" data-aos="fade-right">
        <h2>About Me</h2>
        <p>Empty</p>
    </div>


    <div className="section" id="Projects" data-aos="fade-left">
        <h2>Projects</h2>
        <ul className="projectList">
            <li>
                <strong>Simple Sabermetrics Web Application ----------------- 2024</strong>
                <button onClick={loadSabermetrics}>Learn More...</button>
            </li>
            <li>
                <strong>VCentials Web Application ------------------------------ 2024</strong>
                <button onClick={loadVCentials}>Learn More...</button>
            </li>
            <li>
                <strong>College Football Data ------------------------------------ 2024</strong>
                <button onClick={loadCFB}>Learn More...</button>
            </li>
            <li>
                <strong>Personal Portfolio Website ------------------------------ 2025</strong>
                <button onClick={loadPersonalSite}>Learn More...</button>
            </li>
        </ul>
    </div>


    <div className="section" id="Experience" data-aos="zoom-in">
        <h2>Experience</h2>
        <div className="experience-slider">
            {landingSlider.map((slide, index) => (
                <img
                    loading="lazy"
                    key={index}
                    className={classNames("landingSlider", {displaySlides: index === slideIndex})}
                    src={slide}
                    alt={`slide ${index}`}
                />
            ))}
        </div>
        <p>Empty</p>
    </div>
</div>


<div className="repo-section">
    <h2>GitHub Repositories</h2>
    {repositories.length > 0 ? (
        <div className="repo-cards">
            {repositories.slice(0, 5).map((repo, index) => (
                <div key={index} className="repo-card">
                    <h3>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="repo-link"
                        >
                            {repo.name}
                        </a>
                    </h3>
                    <p className="repo-description">{repo.description || 'No Description'}</p>
                    <div className="repo-info">
                                <span className="repo-language">
                                    {repo.language && <strong>Language:</strong>} {repo.language || 'N/A'}
                                </span>
                        <span className="repo-stars">
                                    <strong>Stars:</strong> {repo.stargazers_count}
                                </span>
                        <span className="repo-forks">
                                    <strong>Forks:</strong> {repo.forks_count}
                                </span>
                    </div>
                    <div className="repo-meta">
                        <p><strong>Last
                            updated:</strong> {new Date(repo.updated_at).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <p>No Repositories to display :(</p>
    )}
</div>*/}