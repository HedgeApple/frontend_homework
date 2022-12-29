import "./bootstrap.min.css";
import "./App.css";
import Game from "./components/Game.js";
import InfoPanel from "./components/InfoPanel";
import Scoreboard from "./components/Scoreboard.js";
import { useState } from "react";

const App = () => {
  const [matchNumber, setMatchNumber] = useState(0);
  const [playerSelection, setPlayerSelection] = useState("");
  const [opponentSelection, setOpponentSelection] = useState("");
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
  };

  const updateInfo = (playerSelection, opponentSelection) => {
    setPlayerSelection(playerSelection);
    setOpponentSelection(opponentSelection);
    setMatchNumber(matchNumber + 1);
  };

  return (
    <div
      className="d-flex text-center min-vh-100 mt-5"
      style={{ minWidth: "500px" }}
    >
      <div className="container">
        <div className="row">
          <Scoreboard scores={scores} />
          <InfoPanel
            matchNumber={matchNumber}
            playerSelection={playerSelection}
            opponentSelection={opponentSelection}
          />
          <Game score_callback={updateScores} info_callback={updateInfo} />
        </div>
      </div>
    </div>
  );
};

export default App;
