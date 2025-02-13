import React from 'react'
import PlayerList from './Components/PlayerList.js'
import { useSpecialTheme } from './Hooks/useSpecialTheme.js'
import './App.css'

function App() {
    const [specialTheme, setSpecialTheme] = useSpecialTheme(false)

    const handleClick = () => {
        console.log('hi')
        setSpecialTheme(!specialTheme)
    }

    return (
        <div className="App">
            <button onClick={handleClick} className="special-button">
                Activate Special Theme
            </button>
            <PlayerList />
        </div>
    )
}

export default App
