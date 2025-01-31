import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import './Game.css'


const Game = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionsIndex, setCurrentQuestionsIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(30);
    const [timeout, setTimeout] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const initialTime = 30;


    useEffect(() => {
        const triviaQuestions = [
            {question: "Who is the all-time career home run leader in the MLB?", answers: ["Aaron Judge", "Barry Bonds", "Hank Aaron", "Babe Ruth"], correctAnswer: "Barry Bonds"},
            {question: "Who is the all-time career strikeouts leader in the MLB?", answers: ["Nolan Ryan", "Justin Verlander", "Shohei Ohtani", "Mariano Rivera"], correctAnswer: "Nolan Ryan"},
            {question: "What is the home team of Wrigley Field?", answers: ["White Sox", "Padres", "Marlins", "Cubs"], correctAnswer: "Cubs"},
            {question: "Who won the World Series in 2024?", answers: ["Orioles", "Yankees", "Guardians", "Dodgers"], correctAnswer: "Dodgers"},
            {question: "What teams home field is in Baltimore, Maryland?", answers: ["Reds", "Orioles", "Braves", "Brewers"], correctAnswer: "Orioles"},
            {question: "Which MLB team has won the most World Series in MLB history?", answers: ["Yankees", "Red Sox", "Dodgers", "Giants"], correctAnswer: "Yankees"},
            {question: "What is the most common pitch thrown in the MLB?", answers: ["Curveball", "Sweeper", "Four-Seam Fastball", "Sinker"], correctAnswer: "Four-Seam Fastball"},
            {question: "What does SABR stand for?", answers: ["Study of American Baseball Research", "Society of American Baseball Research", "Study for American Baseball Research", "Society for American Baseball Research"], correctAnswer: "Society for American Baseball Research"},
            {question: "How many players play defense on the baseball diamond?", answers: ["8", "11", "10", "9"], correctAnswer: "9"},
            {question: "What does the acronym DH stand for in baseball?", answers: ["Designated Homerunner", "Designed Hitter", "Designated Homeplate", "Designated Hitter"], correctAnswer: "Designated Hitter"},
            {question: "What position(s) did I play in High School?", answers: ["3B/P", "SS", "P", "SS/P"], correctAnswer: "3B/P"},
            {question: "When does a closer usually come in to pitch during a baseball game?", answers: ["End", "Start", "Middle", "Whenever"], correctAnswer: "End"},
            {question: "How many innings did the longest game ever recorded in the MLB last?", answers: ["37 Innings", "31 Innings", "33 Innings", "35 Innings"], correctAnswer: "33 Innings"},
            {question: "Who threw the fastest pitch ever recorded in the MLB?", answers: ["Stephen Strausburg", "Aroldis Chapman", "Nolan Ryan", "Randy Johnson"], correctAnswer: "Aroldis Chapman"},
            {question: "Who has the most career saves in MLB history?", answers: ["Mariano Rivera", "Kenley Jansen", "Aroldis Chapman", "Rollie Fingers"], correctAnswer: "Mariano Rivera"},
            {question: "Which of these players are currently in the MLB Hall of Fame", answers: ["Coco Crisp", "Catfish Hunter", "Boof Bosner", "Razor Shines"], correctAnswer: "Catfish Hunter"},
            {question: "Who hit the most home runs in a single season in MLB history?", answers: ["Sammy Sosa", "Jeff Bagwell", "Babe Ruth", "Barry Bonds"], correctAnswer: "Barry Bonds"},
            {question: "What is the numerical identity of player who plays shortstop on a scoring card?", answers: ["4", "1", "7", "6"], correctAnswer: "6"},
            {question: "Does Barry Bonds belong in the MLB Hall of Fame?", answers: ["Yes", "No", "Maybe", "Definitely Not"], correctAnswer: "Yes"},
            {question: "What position did I play in College?", answers: ["Catcher", "Third Base", "Shortstop", "Pitcher"], correctAnswer: "Pitcher"}
        ];
        setQuestions(triviaQuestions);
    }, []);




    useEffect(() => {
        if (timer > 0 &&  gameStarted &&!gameOver && !timeout) {
            const timeInterval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(timeInterval);
        } else if (timer === 0) {
            setTimeout(true);
            setGameOver(true);
        }
    }, [timer, gameOver, timeout, gameStarted]);


    const handleUserAnswer = (answer) => {
        if (answer === questions[currentQuestionsIndex].correctAnswer) {
            setScore(prevScore => prevScore + 1000);
            if (currentQuestionsIndex < questions.length - 1) {
                setCurrentQuestionsIndex(prevIndex => prevIndex + 1);
                setTimer(prevTime => Math.max(5, initialTime - 1 * (currentQuestionsIndex + 1)));
            } else {
                setGameOver(true);
            }
        } else {
            setGameOver(true);
        }
    };

    const startGame = () => {
        setGameStarted(true);
        setTimer(initialTime);
    }

    if (gameOver) {
        return (
            <div className="game-over-card">
                <h1>Game Over!</h1>
                <p>Your Final Score: {score}</p>
                <button onClick={() => window.location.reload()}>Restart</button>
                <HashLink smooth to="/#greeting-section">
                    <button>Return Home</button>
                </HashLink>
            </div>
        );
    }

    if (timeout) {
        return <p>Time is up... Game Over!</p>
    }

    return (
        <div className="game-container">
            {!gameStarted ? (
                <div className="start-screen">
                    <h2>Welcome to Zane's Baseball Trivia!</h2>
                    <button onClick={startGame}>Start</button>
                    <HashLink smooth to="/#greeting-section">
                        <button>No Thanks</button>
                    </HashLink>
                </div>
            ) : (
                <div className="quiz-card">
                    <h2>Current Score: {score}</h2>
                    <h3>Time Remaining: {timer}s</h3>
                    <div className="answers-container">
                        <h4>{questions[currentQuestionsIndex]?.question}</h4>
                        {questions[currentQuestionsIndex]?.answers.map((answer, index) => (
                            <button key={index} onClick={() => handleUserAnswer(answer)} disabled={timeout}>
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

};

export default Game;