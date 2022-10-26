import { ReactComponent as TriBg } from '../images/bg-triangle.svg';
import { ReactComponent as PaperSvg } from '../images/icon-paper.svg';
import { ReactComponent as ScissorsSvg } from '../images/icon-scissors.svg';
import { ReactComponent as RockSvg } from '../images/icon-rock.svg';

import { useState, useEffect } from 'react';
import { gsap } from "gsap";


function Game(props) {
    //props.step
    //props.setStep
    //props.updateScore();
    const [compPicks, setCompPicks] = useState(["rock","paper","scissors"]);
    const [gameResult, setGameResult] = useState([0,"player selection","computer selection"]);


    const rockIn = (e) => {
        console.log("rock");
        playTurn("rock");
    }

    const paperIn = (e) => {
        console.log("paper");
        playTurn("paper");
    }

    const scissorsIn = (e) => {
        console.log("scissor");
        playTurn("scissors");
    }

    const playTurn = (playerPick) => {
        //create random computer pick
        let compPick = getCompPick();
        //compare picks and return score
        let gameScore = comparePicks(playerPick,compPick);
        console.log(gameScore,playerPick,compPick);
        // props.updateScore(gameScore);
        setTimeout(() => {
            props.updateScore(gameScore);
        },"2000");
        //set game results for display
        setGameResult([gameScore,playerPick,compPick]);
        props.setStep(false);
    }

    const getCompPick = () => {
        let pick = Math.floor(Math.random() * 3);
        return compPicks[pick];
    }

    const comparePicks = (playerPick, compPick) => {
        switch(playerPick) {
            case "rock":
                if (compPick === "paper") {
                    return -1;
                } else if (compPick === "scissors") {
                    return 1;
                } else {
                    return 0;
                }
                break;
            case "paper":
                if (compPick === "rock") {
                    return 1;
                } else if (compPick === "scissors") {
                    return -1;
                } else {
                    return 0;
                }
                break;
            case "scissors":
                if (compPick === "paper") {
                    return 1;
                } else if (compPick === "rock") {
                    return -1;
                } else {
                    return 0;
                }
                break;
            default:
          }
    }

    const playAgain = () => {
        props.setStep(true);
    }

    useEffect(() => {
        let vw = window.screen.width;
        console.log(vw);
        if (!props.step) {
            console.log("hello");
            gsap.from(".player-select", {x: -vw, duration: 1, delay: 0.5, ease: "elastic.out(0.2, 0.3)" });
            gsap.from(".comp-select", {x: vw, duration: 1, delay: 1, ease: "elastic.out(0.2, 0.3)" });
            gsap.from(".game-status", {y: 100, opacity: 0, duration: 1, delay: 1.5 });
            gsap.fromTo(".pulse-1", 6,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 1});
            gsap.fromTo(".pulse-2", 6,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 1.5});
            gsap.fromTo(".pulse-3", 6,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 2});
            gsap.fromTo(".pulse-4", 6,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 2.5});
        }

      },[props.step]);

    console.log(gameResult);
    if (props.step) {
        return (
            <div className="game-container">
                <div className="game-content">
                    <button id="paper" className="rps-select" onClick={paperIn}>
                        <PaperSvg />
                    </button>
                    <button id="scissors" className="rps-select" onClick={scissorsIn}>
                        <ScissorsSvg />
                    </button>
                    <button id="rock" className="rps-select" onClick={rockIn}>
                        <RockSvg />
                    </button>
                    <TriBg />
                </div>
            </div>

        );
    } else
        if (gameResult[0] > 0) {
            //win
            return (
                <div className="game-container">
                    <div className="result-content">
                        <div className="player-container">
                            <div id={gameResult[1]} className="player-select"></div>
                            <div className="select-bg"></div>
                            <div className="pulse-1"></div>
                            <div className="pulse-2"></div>
                            <div className="pulse-3"></div>
                            <div className="pulse-4"></div>
                            <p>YOU PICKED</p>
                        </div>

                        <div className="comp-container">
                            <div id={gameResult[2]} className="comp-select"></div>
                            <div className="select-bg"></div>
                            <p>THE HOUSE PICKED</p>
                        </div>
                    </div>
                    
                    <div className="game-status">
                        <h1>YOU WIN</h1>
                        <button onClick={playAgain}>PLAY AGAIN</button>
                    </div>
                    
                </div>
            );
        } else if (gameResult[0] < 0) {
            //loss
            return (
                <div className="game-container">
                    <div className="result-content">
                        <div className="player-container">
                            <div id={gameResult[1]} className="player-select"></div>
                            <div className="select-bg"></div>
                            <p>YOU PICKED</p>
                        </div>

                        <div className="comp-container">
                            <div id={gameResult[2]} className="comp-select"></div>
                            <div className="select-bg"></div>
                            <div className="pulse-1"></div>
                            <div className="pulse-2"></div>
                            <div className="pulse-3"></div>
                            <div className="pulse-4"></div>
                            <p>THE HOUSE PICKED</p>
                        </div>
                    </div>
                    
                    <div className="game-status">
                        <h1>YOU LOSE</h1>
                        <button onClick={playAgain}>PLAY AGAIN</button>
                    </div>
                    
                </div>
            );
        } else {
            //tie
            return (
                <div className="game-container">
                    <div className="result-content">
                        <div className="player-container">
                            <div id={gameResult[1]} className="player-select"></div>
                            <div className="select-bg"></div>
                            <p>YOU PICKED</p>
                        </div>

                        <div className="comp-container">
                            <div id={gameResult[2]} className="comp-select"></div>
                            <div className="select-bg"></div>
                            <p>THE HOUSE PICKED</p>
                        </div>
                    </div>
                    
                    <div className="game-status">
                        <h1>YOU TIE</h1>
                        <button onClick={playAgain}>PLAY AGAIN</button>
                    </div>
                    
                </div>
            );
        }
  }
  
  export default Game;
  