import Header from './components/Header'
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
    </main>
  );
}

export default App;
