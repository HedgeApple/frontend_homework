import "./bootstrap.min.css";
import "./App.css";
import Game from "./components/Game.js";

const App = () => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row">
          <Game />
        </div>
      </div>
    </div>
  );
};

export default App;
