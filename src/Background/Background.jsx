import "./Background.css";


const Background = () => {

    const languages = [
        'icons8-aws-48.png', 'icons8-css-48.png', 'icons8-html-50.png', 'icons8-java-48.png', 'icons8-javascript-48.png', 'icons8-python-48.png',
        'icons8-react-40.png', 'icons8-spring-boot-48.png'
    ];

    return (
        <div className="background-carousel">
            <div className="image-container">
                {languages.map((language, index) => (
                    <img
                        key={index}
                        src={`/${language}`}
                        alt={language}
                        className="carousel-image"
                    />
                ))}
            </div>
        </div>
    )


}

export default Background;