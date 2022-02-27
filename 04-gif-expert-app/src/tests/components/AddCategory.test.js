import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
  // const setCategories = () => {}
  // jest.fn me permite saber como fue llamada, si fue llamada
  // cuantas veces fue llamada, etc
  const setCategories = jest.fn()
  // const wrapper = shallow(<AddCategory setCategories={setCategories} />)
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    jest.to
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'Hola Mundo'
    // Evento de un input change, objeto que estoy enviando en el evento
    input.simulate('change', { target: { value } })
    // este dara error Expected: "Hola Mundo1" Received: 'Hola Mundo'
    // expect(wrapper.find('p').text().trim()).toBe(value + '1')
    expect(wrapper.find('p').text().trim()).toBe(value)
  })
  test('NO debe de postear la informacion con submit', () => {
    // wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    wrapper.find('form').simulate('submit', { preventDefault() {} })

    // expect(setCategories).toHaveBeenCalled() // this fails
    expect(setCategories).not.toHaveBeenCalled()
  })
})
