import React from 'react'
import { render } from '@testing-library/react'
import App from '.././App.js'

test('playerlist component is rendering properly', () => {
    const { getByTestId } = render(<App />)
    getByTestId('playerlist')
})

test('check to see if all player objects are being rendered', () => {
    const { queryAllByText } = render(<App />)
    queryAllByText(/name/i)
    queryAllByText(/country/i)
})
