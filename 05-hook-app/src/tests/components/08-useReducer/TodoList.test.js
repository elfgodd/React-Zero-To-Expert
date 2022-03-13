import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../../../components/08-useReducer/TodoList'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en el <TodoList />', () => {
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  )
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de tener dos <TodoListItem />', () => {
    console.log(wrapper.html())
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)

    console.log(wrapper.find('TodoListItem').at(0).props())
    // console.log(wrapper.find('TodoListItem').at(0).prop('handleDelete'))
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    )
  })
})
