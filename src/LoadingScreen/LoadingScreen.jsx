import React, {useEffect} from "react";
import "./LoadingScreen.scss";
import baseballImage from '../assets/baseball.png'


const LoadingScreen = () => {
    useEffect(() => {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            window.addEventListener("load", () => {
                loadingScreen.style.opacity = "0";
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 1500);
            })
        }
    }, []);

    return (
        <div id="loading-screen">
            <div className="container" style={{'--ball-image': `url(${baseballImage})`}}>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
    )
}

export default LoadingScreen