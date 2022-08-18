import Header from './components/Header'
import WeaponForm from './components/WeaponForm'
import './style/App.css'
import {useState} from 'react'

function App() {
  const [choice, setChoice] = useState('');
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [loses, setLoses] = useState(0);

  function handleChoice(userChoice) {
    setChoice(userChoice)
  }

  function handleScore(score) {
    if (score === "win"){
      setWins(wins + 1);
    }
    else if (score === "draw") {
      setDraws(draws + 1);
    }
    else if (score === "lose") {
      setLoses(loses + 1);
    }
  }

  return (
    <main>
      <Header/>
      <WeaponForm/>
      <div id="score">
        <h3>Wins: {wins}</h3>
        <h3>Draws: {draws}</h3>
        <h3>Loses: {loses}</h3>
      </div>
    </main>
  );
}

export default App;
