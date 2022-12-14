import { useState } from 'react';
//Styles
import './styles/app.scss';
//Components
import Footer from "./components/Footer";
import Game from "./components/Game";
import RulesModal from "./components/RulesModal";

function App() {

  const [rulesDisplay, setRulesDisplay] = useState(false);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(true);

  const showRules = () => {
    setRulesDisplay(true);
  }

  const hideRules = () => {
    setRulesDisplay(false);
  }

  const updateScore = (gameResult) => {
    let scoreTemp = score;
    scoreTemp += gameResult;
    setScore(scoreTemp);
  }

  return (
    <div className="App">
      <header>
        <h1>ROCK PAPER SCISSORS</h1>
        <div className="score-container">
          <p>SCORE</p>
          <p className="score-value">{score}</p>
        </div>
      </header>

      <Game step={step} setStep={setStep} updateScore={updateScore}/>

      <Footer showRules={showRules}/>
      <RulesModal rulesDisplay={rulesDisplay} hideRules={hideRules}/>
    </div>
  );
}

export default App;
 