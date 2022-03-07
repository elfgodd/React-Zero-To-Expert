import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

import './styles.css'

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
  },
]

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  console.log(todos)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Nueva tarea')
    const newTodo = {
      id: new Date().getTime(),
      desc: 'Nueva tarea',
      done: false,
    }
    const action = {
      type: 'add',
      payload: newTodo,
    }
    dispatch(action)
  }
  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => (
              <li key={todo.id} className='list-group-item'>
                <p className='text-center'>
                  {' '}
                  {i + 1}. {todo.desc}
                </p>
                <button className='btn btn-danger'>Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-5 d-grid gap-2'>
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='description'
              className='form-control'
              placeholder='Aprender ...'
              autoComplete='off'
            />
            <div className='d-grid gap-2'>
              <button
                type='submit'
                className='btn btn-outline-primary mt-2 btn-block'
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default TodoApp
