import "./bootstrap.min.css";
import "./App.css";
import Game from "./components/Game.js";
import Scoreboard from "./components/Scoreboard.js";
import { useState } from "react";

const App = () => {
  const [matchNumber, setMatchNumber] = useState(1);
  const [scores, setScores] = useState({
    PLAYER: 0,
    OPPONENT: 0,
    DRAW: 0,
  });

  const updateScores = (matchWinner) => {
    const updatedScores = { ...scores };

    switch (matchWinner) {
      case "PLAYER":
        updatedScores["PLAYER"] = updatedScores["PLAYER"] + 1;
        break;
      case "OPPONENT":
        updatedScores["OPPONENT"] = updatedScores["OPPONENT"] + 1;
        break;
      case "DRAW":
        updatedScores["DRAW"] = updatedScores["DRAW"] + 1;
        break;
      default:
        break;
    }

    setScores(updatedScores);
    setMatchNumber(matchNumber + 1);
  };

  return (
    <div className="d-flex text-center align-items-center min-vh-100">
      <div className="container">
        <div className="row">
          <Scoreboard scores={scores} />
          <Game callback={updateScores} currentMatch={matchNumber} />
        </div>
      </div>
    </div>
  );
};

export default App;
