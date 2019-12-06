import React from 'react'
import PlayerList from './Components/PlayerList.js'
import { useSpecialTheme } from './Hooks/useSpecialTheme.js'
import './App.css'

function App() {
    const [specialTheme, setSpecialTheme] = useSpecialTheme(
        'specialTheme',
        false
    )

    const handleClick = () => {
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
