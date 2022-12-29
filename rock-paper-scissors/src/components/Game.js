import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

const Game = ({ score_callback, info_callback }) => {
  const buttonClicked = (e) => {
    const playerSelection = e.currentTarget.value;
    playRound(playerSelection);
  };

  const playRound = (playerSelection) => {
    const opponentSelection = opponentChoice();
    const matchWinner = checkMatchWinner(playerSelection, opponentSelection);
    score_callback(matchWinner);
    info_callback(playerSelection, opponentSelection);
  };

  const opponentChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const random_index = Math.floor(Math.random() * choices.length);
    return choices[random_index];
  };

  const checkMatchWinner = (playerChoice, opponentChoice) => {
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
    <div className="col-12">
      <div className="card border-danger mb-3">
        <div className="card-body">
          <div className="form-group mt-3 mb-3">
            <div className="row justify-content-around">
              <div className="col-4">
                <button
                  className="btn btn-outline-success rounded-circle p-5"
                  value="Rock"
                  onClick={buttonClicked}
                >
                  <FontAwesomeIcon
                    className="choiceButton"
                    icon={faHandBackFist}
                  />
                </button>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-outline-warning rounded-circle p-5"
                  value="Paper"
                  onClick={buttonClicked}
                >
                  <FontAwesomeIcon className="choiceButton" icon={faHand} />
                </button>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-outline-info rounded-circle p-5"
                  value="Scissors"
                  onClick={buttonClicked}
                >
                  <FontAwesomeIcon
                    className="choiceButton"
                    icon={faHandScissors}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
