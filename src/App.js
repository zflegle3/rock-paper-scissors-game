import logo from './logo.svg';
import './styles/app.scss';
import Footer from "./components/Footer";
import RulesModal from "./components/RulesModal";
import { useState } from 'react';


function App() {

  const [rulesDisplay, setRulesDisplay] = useState(false);

  const showRules = () => {
    console.log("show rules");
    setRulesDisplay(true);
  }

  const hideRules = () => {
    setRulesDisplay(false);
  }


  return (
    <div className="App">
      <header></header>
      <div className="game-container"></div>
      <Footer showRules={showRules}/>
      <RulesModal rulesDisplay={rulesDisplay} hideRules={hideRules}/>
    </div>
  );
}

export default App;
 