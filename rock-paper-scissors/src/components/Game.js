import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Game = (props) => {
  const [counter, setCounter] = useState(1);
  const [playerWinCount, setPlayerWinCount] = useState(0);
  const [opponentWinCount, setOpponentWinCount] = useState(0);
  const [drawCount, setDrawCount] = useState(0);

  const buttonClicked = (e) => {
    const playerSelection = e.currentTarget.value;
    playRound(playerSelection);
  };

  const playRound = (playerSelection) => {
    const opponentSelection = opponentChoice();
    alert(
      "Round #" +
        counter +
        ": \nYou chose: " +
        playerSelection +
        "\n Opponent chose: " +
        opponentSelection
    );

    const matchOutcome = checkMatchOutcome(playerSelection, opponentSelection);
    switch (matchOutcome) {
      case "PLAYER":
        setPlayerWinCount(playerWinCount + 1);
        break;
      case "OPPONENT":
        setOpponentWinCount(opponentWinCount + 1);
        break;
      case "DRAW":
        setDrawCount(drawCount + 1);
        break;
      default:
        break;
    }

    setCounter(counter + 1);
  };

  const opponentChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const random_index = Math.floor(Math.random() * choices.length);
    return choices[random_index];
  };

  const checkMatchOutcome = (playerChoice, opponentChoice) => {
    const winningCombinations = {
      ROCK: "SCISSORS",
      PAPER: "ROCK",
      SCISSORS: "PAPER",
    };

    if (
      opponentChoice.toUpperCase() ===
      winningCombinations[playerChoice.toUpperCase()]
    ) {
      return "PLAYER";
    } else if (playerChoice === opponentChoice) {
      return "DRAW";
    } else {
      return "OPPONENT";
    }
  };

  return (
    <div className="col-12 text-center">
      <div className="mb-5" id="scoreboard">
        <h1 className="mb-3">Scoreboard</h1>
        <h2>Player: {playerWinCount}</h2>
        <h2>Opponent: {opponentWinCount}</h2>
        <h2>Draw: {drawCount}</h2>
      </div>
      <div className="card border-success mb-3">
        <div className="card-header">Rock Paper Scissors</div>
        <div className="card-body">
          <div className="form-group mt-3 mb-3">
            <button
              className="btn btn-outline-success me-3 rounded-circle p-4"
              value="Rock"
              onClick={buttonClicked}
            >
              <FontAwesomeIcon size="6x" icon={faHandBackFist} />
            </button>
            <button
              className="btn btn-outline-warning me-3 rounded-circle p-4"
              value="Paper"
              onClick={buttonClicked}
            >
              <FontAwesomeIcon size="6x" icon={faHand} />
            </button>
            <button
              className="btn btn-outline-info me-3 rounded-circle p-4"
              value="Scissors"
              onClick={buttonClicked}
            >
              <FontAwesomeIcon size="6x" icon={faHandScissors} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
