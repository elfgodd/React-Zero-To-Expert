import React from 'react'
import { shallow } from 'enzyme'
import TodoAdd from '../../../components/08-useReducer/TodoAdd'

describe('Pruebas en <TodoAdd />', () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('NO debe de llamar addTODO', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit')

    console.log(formSubmit)
    // formSubmit() // TypeError: Cannot read properties of undefined (reading 'preventDefault')
    formSubmit({ preventDefault() {} })

    // expect(handleAddTodo).toHaveBeenCalledTimes(1) // Error
    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })
  test('debe de llamar la funcion handleAddTodo', () => {
    const value = 'Aprender React'
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    })
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })

    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)) // {}
    // expect(handleAddTodo).toHaveBeenCalledWith({}) // Error
    expect(handleAddTodo).toHaveBeenCalledWith({
      // Esto le dice a Jest me importa que sea un numero asi sea cualquiera
      id: expect.any(Number),
      // id: expect.any(String),
      desc: value,
      done: false,
    })
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
