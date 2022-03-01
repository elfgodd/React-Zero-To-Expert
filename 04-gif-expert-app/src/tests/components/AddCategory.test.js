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
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Hola Mundo'
    // 1. simular el inputChange
    wrapper.find('input').simulate('change', { target: { value } })
    // 2. simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    // 3. setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled()
    // si quiero ver si se a llamado mas de 1 vez o varias
    // expect(setCategories).toHaveBeenCalledTimes(2)
    expect(setCategories).toHaveBeenCalledTimes(1)
    // estoy esperando que se haya llamado con cualquier tipo de funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    // 4. el valor del input debe de estar ''
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
