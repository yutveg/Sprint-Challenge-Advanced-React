import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage.js'
import { brotliDecompressSync } from 'zlib'

export const useSpecialTheme = () => {
    const [specialTheme, setSpecialTheme] = useLocalStorage('specialTheme')

    const playerCards = document.querySelectorAll('player-card')

    useEffect(() => {
        if (specialTheme) playerCards.classList.add('special-theme')
        else playerCards.classList.remove('special-theme')
    }, [specialTheme])

    return [specialTheme, setSpecialTheme]
}
