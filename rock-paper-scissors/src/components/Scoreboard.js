const Scoreboard = ({ scores }) => {
  return (
    <div className="mb-5">
      <h1 className="mb-3">Scoreboard</h1>
      <h2>Player: {scores["PLAYER"]}</h2>
      <h2>Opponent: {scores["OPPONENT"]}</h2>
      <h2>Draw: {scores["DRAW"]}</h2>
    </div>
  );
};

export default Scoreboard;
