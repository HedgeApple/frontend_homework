import Header from './components/Header'
import WeaponForm from './components/WeaponForm'
import './style/App.css'
import {useState} from 'react'

function App() {
  const [choice, setChoice] = useState('')

  function handleChoice(userChoice) {
    setChoice(userChoice)
  }

  return (
    <main>
      <Header/>
      <WeaponForm/>
    </main>
  );
}

export default App;
