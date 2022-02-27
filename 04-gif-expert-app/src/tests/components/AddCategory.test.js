import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
  const setCategories = () => {}
  const wrapper = shallow(<AddCategory setCategories={setCategories} />)
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
})
