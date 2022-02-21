import React from 'react'
import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
import App from '../App'
import { shallow } from 'enzyme'

describe('Pruebas en <App />', () => {
  test('debe de mostrar <App /> correctamente ', () => {
    const saludo = 'Hola, soy Goku'
    const wrapper = shallow(<App saludo={saludo} />)

    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, soy Goku'
    const subTitulo = 'Soy un subTitulo'

    const wrapper = shallow(<App saludo={saludo} subtitulo={subTitulo} />)

    // document.querySelector('p') estamos haciendo algo asi con el find
    const textoParrafo = wrapper.find('p').text()
    // console.log(textoParrafo)

    expect(textoParrafo).toBe(subTitulo)
  })
})

// describe('Pruebas en <App />', () => {
//   test('debe de mostrar el mensaje "Hola, soy Goku', () => {
//     const saludo = 'Hola, soy Goku'

//     // const wrapper = render(<App saludo={saludo} />)
//     // const { getByText } = render(<App saludo={saludo} />)
//     render(<App saludo={saludo} />)

//     expect(screen.getByText(saludo)).toBeInTheDocument()
//     // expect(screen.getByText('Hola, soy Goku')).toBeInTheDocument()
//     // expect(screen.getByText((saludo = ''))).toBeInTheDocument() // error
//   })
// })
