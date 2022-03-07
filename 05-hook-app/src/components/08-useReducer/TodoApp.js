import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import useForm from './useForm'

import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []

  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: 'Aprender React',
  //     done: false,
  //   },
  // ]
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  })
  console.log(todos)
  // console.log(formValues)
  console.log(description)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {
    // console.log(todoId)
    const action = {
      type: 'delete',
      payload: todoId,
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Nueva tarea')

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }
    const action = {
      type: 'add',
      payload: newTodo,
    }
    dispatch(action)
    reset()
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
                <p
                  className={`${todo.done && 'complete'}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {' '}
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(todo.id)}
                >
                  Borrar
                </button>
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
              value={description}
              onChange={handleInputChange}
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
