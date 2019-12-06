import React from 'react'
import PlayerList from './Components/PlayerList.js'
import './App.css'

test('playerlist component is rendering properly', () => {
    const { getByTestId } = render(<App />)
    getByTestId(/playerlist/i)
})

test('check to see if all player objects are being rendered', () => {
    const { getAllByText } = render(<App />)
    expect.getAllByText(/name:/i).length.toBe(101)
    expect.getAllByText(/country:/i).length.toBe(101)
})
