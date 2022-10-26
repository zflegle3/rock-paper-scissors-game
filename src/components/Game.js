import { ReactComponent as TriBg } from '../images/bg-triangle.svg';
import { ReactComponent as PaperSvg } from '../images/icon-paper.svg';
import { ReactComponent as ScissorsSvg } from '../images/icon-scissors.svg';
import { ReactComponent as RockSvg } from '../images/icon-rock.svg';


function Game(props) {
    //props.step
    console.log(props.step);





    const rockIn = (e) => {
        console.log("rock");
    }

    const paperIn = (e) => {
        console.log("paper");
    }

    const scissorsIn = (e) => {
        console.log("scissor");
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
  