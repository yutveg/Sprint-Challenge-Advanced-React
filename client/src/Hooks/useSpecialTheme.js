import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage.js'

export const useSpecialTheme = () => {
    const [specialTheme, setSpecialTheme] = useLocalStorage('specialTheme')

    const body = document.querySelector('body')

    useEffect(() => {
        if (specialTheme) {
            body.classList.add('special-theme')
        } else body.classList.remove('special-theme')
    }, [specialTheme])

    return [specialTheme, setSpecialTheme]
}
