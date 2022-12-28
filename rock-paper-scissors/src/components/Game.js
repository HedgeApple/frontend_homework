import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";

const Game = (props) => {
  let playerSelection;

  const buttonClicked = (e) => {
    playerSelection = e.currentTarget.value;
    playRound(playerSelection);
  };

  const playRound = (playerSelection) => {
    const opponentSelection = opponentChoice();
    alert(
      "Round #1: \nYou chose: " +
        playerSelection +
        "\n Opponent chose: " +
        opponentSelection
    );
  };

  const opponentChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const random_index = Math.floor(Math.random() * choices.length);
    return choices[random_index];
  };

  return (
    <div className="col-12 text-center">
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
