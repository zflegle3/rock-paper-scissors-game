import { ReactComponent as TriBg } from '../images/bg-triangle.svg';
import { ReactComponent as PaperSvg } from '../images/icon-paper.svg';
import { ReactComponent as ScissorsSvg } from '../images/icon-scissors.svg';
import { ReactComponent as RockSvg } from '../images/icon-rock.svg';

import { useState } from 'react';


function Game(props) {
    //props.step
    //props.updateScore();
    const [compPicks, setCompPicks] = useState(["rock","paper","scissors"]);



    console.log(props.step);





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
        let compPick = getCompPick();
        console.log(compPick);
        let gameScore = comparePicks(playerPick,compPick);
        console.log(gameScore,playerPick,compPick);
        props.updateScore(gameScore);
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



    if (props.step === 0) {
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
    } else if (props.step === 1)
        return (
            <div className="game-container">Game Over</div>
        );
  }
  
  export default Game;
  