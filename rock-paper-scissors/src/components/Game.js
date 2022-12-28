import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

const Game = ({ callback }) => {
  // const [matchCounter, setMatchCounter] = useState(1);
  // const [playerWinCount, setPlayerWinCount] = useState(0);
  // const [opponentWinCount, setOpponentWinCount] = useState(0);
  // const [drawCount, setDrawCount] = useState(0);

  let matchCounter = 1;

  const buttonClicked = (e) => {
    const playerSelection = e.currentTarget.value;
    playRound(playerSelection);
  };

  const playRound = (playerSelection) => {
    const opponentSelection = opponentChoice();
    alert(
      "Round #" +
        matchCounter +
        ": \nYou chose: " +
        playerSelection +
        "\n Opponent chose: " +
        opponentSelection
    );

    const matchWinner = checkMatchWinner(playerSelection, opponentSelection);

    // switch (matchOutcome) {
    //   case "PLAYER":
    //     playerWinCount++;
    //     // setPlayerWinCount(playerWinCount + 1);
    //     break;
    //   case "OPPONENT":
    //     opponentWinCount++;
    //     // setOpponentWinCount(opponentWinCount + 1);
    //     break;
    //   case "DRAW":
    //     drawCount++;
    //     // setDrawCount(drawCount + 1);
    //     break;
    //   default:
    //     break;
    // }

    matchCounter = 0;
    // setMatchCounter(matchCounter + 1);

    // console.log(playerWinCount, opponentWinCount, drawCount);
    // console.log(playerWinCount);

    callback(matchWinner);
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
