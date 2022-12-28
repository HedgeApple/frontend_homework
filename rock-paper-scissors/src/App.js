import "./bootstrap.min.css";
import "./App.css";
import Game from "./components/Game.js";
import Scoreboard from "./components/Scoreboard.js";
import { useState } from "react";

const App = () => {
  // const [matchNumber, setMatchNumber] = useState(1);
  const [scoreboard, setScoreboard] = useState({
    PLAYER: 0,
    OPPONENT: 0,
    DRAW: 0,
  });

  const callback = (matchWinner) => {
    // console.log(matchWinner);
    const updatedScore = { ...scoreboard };
    switch (matchWinner) {
      case "PLAYER":
        updatedScore["PLAYER"] = updatedScore["PLAYER"] + 1;
        break;
      case "OPPONENT":
        updatedScore["OPPONENT"] = updatedScore["OPPONENT"] + 1;
        break;
      case "DRAW":
        updatedScore["DRAW"] = updatedScore["DRAW"] + 1;
        break;
      default:
        break;
    }
    setScoreboard(updatedScore);
    // console.log(scoreboard);
  };

  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row">
          <Scoreboard scores={scoreboard} />
          <Game callback={callback} />
        </div>
      </div>
    </div>
  );
};

export default App;
