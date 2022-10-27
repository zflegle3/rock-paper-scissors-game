import { useState, useEffect } from 'react';
import { gsap } from "gsap";
//Images & SVGS
import { ReactComponent as TriBg } from '../images/bg-triangle.svg';
import { ReactComponent as PaperSvg } from '../images/icon-paper.svg';
import { ReactComponent as ScissorsSvg } from '../images/icon-scissors.svg';
import { ReactComponent as RockSvg } from '../images/icon-rock.svg';

function Game(props) {
    //props.step
    //props.setStep
    //props.updateScore();
    const [compPicks, setCompPicks] = useState(["rock","paper","scissors"]);
    const [gameResult, setGameResult] = useState([0,"player selection","computer selection"]);

    const rockIn = (e) => {
        playTurn("rock");
    }

    const paperIn = (e) => {
        playTurn("paper");
    }

    const scissorsIn = (e) => {
        playTurn("scissors");
    }

    const playTurn = (playerPick) => {
        //create random computer pick
        let compPick = getCompPick();
        //compare picks and return score
        let gameScore = comparePicks(playerPick,compPick);
        setTimeout(() => {
            props.updateScore(gameScore);
        },"2000");
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
        if (!props.step) {
            if (vw > 760) {
                //Player & Computer Selections
                gsap.fromTo(".player-select", {x: -vw }, {x: 0, duration: 1, delay: 0.5, ease: "elastic.out(0.2, 0.3)" });
                gsap.fromTo(".comp-select", {x: vw }, {x: 0, duration: 1, delay: 1, ease: "elastic.out(0.2, 0.3)"});
                //Spread for results
                gsap.to(".player-container", {x: -120, duration: 1, delay: 2, ease: "elastic.out(0.2, 0.3)" });
                gsap.to(".comp-container", {x: 120, duration: 1, delay: 2, ease: "elastic.out(0.2, 0.3)"});
                //Game Results
                gsap.fromTo(".game-status", {opacity: 0, }, {y: 0, opacity: 1, duration: 1, delay: 3});
                if (gameResult[0] !== 0) {
                //Winner Pulse Background
                    gsap.fromTo(".pulse-1", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 1.5, duration: 3});
                    gsap.fromTo(".pulse-2", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 2, duration: 3});
                    gsap.fromTo(".pulse-3", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 2.5, duration: 3});
                    gsap.fromTo(".pulse-4", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 3, duration: 3});
                }
            } else {
                //Player & Computer Selections
                gsap.fromTo(".player-select", {x: -vw }, {x: 0, duration: 1, delay: 0.5, ease: "elastic.out(0.2, 0.3)" });
                gsap.fromTo(".comp-select", {x: vw }, {x: 0, duration: 1, delay: 1, ease: "elastic.out(0.2, 0.3)"});
                //Game Results
                gsap.fromTo(".game-status", {opacity: 0, }, {y: 0, opacity: 1, duration: 1, delay: 1.5});
                if (gameResult[0] !== 0) {
                //Winner Pulse Background
                    gsap.fromTo(".pulse-1", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 1.5, duration: 3});
                    gsap.fromTo(".pulse-2", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 2, duration: 3});
                    gsap.fromTo(".pulse-3", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 2.5, duration: 3});
                    gsap.fromTo(".pulse-4", {scale: 0, autoAlpha:1, transformOrigin: "center center", duration: 3}, {scale: 3, autoAlpha: 0, repeat: -1, delay: 3, duration: 3});
                } 
            }
        }

      },[props.step]);

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
  