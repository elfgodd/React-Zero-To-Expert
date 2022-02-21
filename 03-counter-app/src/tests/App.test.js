import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Pruebas en <App />', () => {
  test('debe de mostrar el mensaje "Hola, soy Goku', () => {
    const saludo = 'Hola, soy Goku'

    // const wrapper = render(<App saludo={saludo} />)
    // const { getByText } = render(<App saludo={saludo} />)
    render(<App saludo={saludo} />)

    expect(screen.getByText(saludo)).toBeInTheDocument()
    // expect(screen.getByText('Hola, soy Goku')).toBeInTheDocument()
    // expect(screen.getByText((saludo = ''))).toBeInTheDocument() // error
  })
})
