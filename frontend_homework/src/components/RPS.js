import { useEffect, useState } from "react"
import './RPS.css'

const RPS = () => {
    const hands = ['rock', 'paper', 'scissors']

    const [userHand, setUserHand] = useState('')
    const [comHand, setComHand] = useState('')

    const [userWins, setUserWins] = useState(0)
    const [userLosses, setUserLosses] = useState(0)

    const [comWins, setComWins] = useState(0)
    const [comLosses, setComLosses] = useState(0)

    const [ties, setTies] = useState(0)

    const [winLose, setWinLose] = useState(' ')

    const [btnDisplay, setBtnDisplay] = useState('block')

    useEffect(() => {
        //user wins
        if ((userHand === 'rock' && comHand === 'scissors') || (userHand === 'scissors' && comHand === 'paper') || (userHand === 'paper' && comHand === 'rock')) {
            setWinLose('YOU WIN!')
            setUserWins(userWins + 1)
            setComLosses(comLosses + 1)
        }

        //com wins
        if ((comHand === 'rock' && userHand === 'scissors') || (comHand === 'scissors' && userHand === 'paper') || (comHand === 'paper' && userHand === 'rock')) {
            setWinLose('YOU LOSE!')
            setUserLosses(userLosses + 1)
            setComWins(comWins + 1)
        }

        if ((userHand === 'rock' && comHand === 'rock') || (userHand === 'scissors' && comHand === 'scissors') || (userHand === 'paper' && comHand === 'paper')) {
            setWinLose('IT WAS A TIE!')
            setTies(ties + 1)
        }
    }, [userHand, comHand])

    const outcome = () => {
        setBtnDisplay('none')
        setComHand(hands[Math.floor(Math.random() * hands.length)])
    }

    const playAgain = () => {
        setUserHand('')
        setComHand('')
        setWinLose('')
        setBtnDisplay('block')
    }

    const gameReset = () => {
        setUserHand('')
        setComHand('')
        setUserWins(0)
        setUserLosses(0)
        setComLosses(0)
        setComWins(0)
        setComLosses(0)
        setTies(0)
        setWinLose(' ')
        setBtnDisplay('block')
    }


    return (
        <>
            <h1>Let's Play Rock, Paper, Scissors!</h1>
            <h3>Choose your hand then click 'PLAY'</h3>
            <div style={{ position: 'relative' }}>
                {winLose === 'YOU WIN!' && (
                    <h2 style={{ fontSize: '50px', color: 'green' }}>{winLose}</h2>
                )}
                {winLose === 'YOU LOSE!' && (
                    <h2 style={{ fontSize: '50px', color: 'red' }}>{winLose}</h2>
                )}
                {winLose === 'IT WAS A TIE!' && (
                    <h2 style={{ fontSize: '50px', color: 'gray' }}>{winLose}</h2>
                )}
            </div>
            <div>
                <h2>Ties: {ties}</h2>
            </div>
            <div className="user-and-com-div" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="user-div" style={{ border: '1px solid black', padding: '40px', borderRadius: '10px' }}>
                    <h1>User</h1>
                    <div className="user-score" style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="wins">Wins: {userWins}</span>
                        <span className="losses">Losses: {userLosses}</span>
                    </div>
                    <div className="buttons" style={{ display: `${btnDisplay}` }}>
                        <span style={{ fontWeight: 'bold' }}>Choose your hand</span>
                        <div className="rps-selection">
                            <button onClick={e => setUserHand('rock')} className='choose-hand'><i className="fa-solid fa-hand-back-fist"></i></button>
                            <button onClick={e => setUserHand('paper')} className='choose-hand'><i className="fa-solid fa-hand"></i></button>
                            <button onClick={e => setUserHand('scissors')} className='choose-hand'><i className="fa-solid fa-hand-scissors"></i></button>
                        </div>
                    </div>
                    <div>
                        <h1>{userHand}</h1>
                        {userHand == 'rock' && (<i className="fa-solid fa-hand-back-fist chosen"></i>)}
                        {userHand == 'paper' && (<i className="fa-solid fa-hand chosen"></i>)}
                        {userHand == 'scissors' && (<i className="fa-solid fa-hand-scissors chosen"></i>)}
                    </div>
                </div>


                <div className="com-div" style={{ border: '1px solid black', padding: '40px', borderRadius: '10px' }}>
                    <h1>Computer</h1>
                    <div className="com-score" style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="wins">Wins: {comWins}</span>
                        <span className="losses">Losses: {comLosses}</span>
                    </div>

                    <div>
                        <h1>{comHand}</h1>
                        {!comHand && (<i className="fa-solid fa-question chosen"></i>)}
                        {comHand == 'rock' && (<i className="fa-solid fa-hand-back-fist chosen"></i>)}
                        {comHand == 'paper' && (<i className="fa-solid fa-hand chosen"></i>)}
                        {comHand == 'scissors' && (<i className="fa-solid fa-hand-scissors chosen"></i>)}
                    </div>
                </div>
            </div>
            <div className="play-div">
                {userHand && !comHand && (<button onClick={outcome} className='play-btn'>PLAY</button>)}
                {comHand && (
                    <>
                        <button onClick={playAgain} className='play-btn'>PLAY AGAIN</button>
                        <button onClick={gameReset} className='reset-btn'>RESET GAME</button>
                    </>
                )}
            </div>
        </>
    )
}

export default RPS
