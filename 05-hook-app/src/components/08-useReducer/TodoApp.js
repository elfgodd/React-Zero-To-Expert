import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

import './styles.css'

const initialState = [
  {
    id: new Date().getTime(),
    des: 'Aprender React',
    done: false,
  },
]

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState)
  console.log(todos)
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>Hola</li>
        <li>mundo</li>
        <li>Hola de nuevo</li>
      </ul>
    </>
  )
}

export default TodoApp
