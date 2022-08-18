import Header from './components/Header';
import WeaponForm from './components/WeaponForm';
import Players from './components/Players';
import './style/App.css';
import {useState} from 'react';

function App() {
  const [choice, setChoice] = useState('');
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [loses, setLoses] = useState(0);
  const [compChoice, setCompChoice] = useState('');


  function handleChoice(userChoice) {
    setChoice(userChoice);
    setCompChoice(randomChoice);
    handleScore(choice, compChoice);
  }

  function handleScore(choice, compChoice) {
    if (choice === '' || compChoice === '') {
      return;
    }

    if (choice === "Rock" && compChoice === "Scissors"){
      setWins(wins + 1);
    }
    else if (choice === "Paper" && compChoice === "Rock") {
      setWins(wins + 1);
    }
    else if(choice === "Scissors" && compChoice === "Paper") {
      setWins(wins + 1);
    }
    else if (choice === compChoice) {
      setDraws(draws + 1);
    }
    else{
      setLoses(loses + 1);
    }
  }

  function randomChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length )];
  }

  return (
    <main>
      <Header/>
      <WeaponForm handleChoice={handleChoice}/>

      <div className="flex-around">
        <h3>Wins: {wins}</h3>
        <h3>Draws: {draws}</h3>
        <h3>Loses: {loses}</h3>
      </div>

      <div className="flex-around">
        <Players player="You" choice={choice}/>
        <Players player="The Enemy" choice={compChoice}/>
      </div>
    </main>
  );
}

export default App;
