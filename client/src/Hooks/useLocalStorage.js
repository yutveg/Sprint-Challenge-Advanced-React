import { useState } from 'react'

export const useLocalStorage = (key, intialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //Check if key exists in local storage
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        return initialValue
    })

    //Setter function set up
    const setValue = value => {
        //setting storedValue to value
        setStoredValue(value)
        //adding value to key in local storage as string
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setStoredValue]
}
