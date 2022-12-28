const InfoPanel = ({ matchNumber, playerSelection, opponentSelection }) => (
  <div className="info mb-5" style={{ height: "105px", minWidth: "520px" }}>
    {playerSelection !== "" && (
      <div>
        <h3>Round #{matchNumber}</h3>
        <h4>You chose: {playerSelection}</h4>
        <h4>Opponent chose: {opponentSelection}</h4>
      </div>
    )}
  </div>
);

export default InfoPanel;
