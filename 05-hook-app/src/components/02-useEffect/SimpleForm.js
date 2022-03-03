import React, { useState, useEffect } from 'react'
import Message from './Message'

import './effects.css'

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const { name, email } = formState

  useEffect(() => {
    console.log('hey')
  }, [])

  useEffect(() => {
    console.log('formState cambio')
  }, [formState])

  useEffect(() => {
    console.log('name cambio')
  }, [name])

  useEffect(() => {
    console.log('email cambio')
  }, [email])

  // destructurando el target del event, target === e.target
  const handleInputChange = ({ target }) => {
    // console.log(e.target.name)
    // console.log(e.target.value)

    setFormState({
      ...formState,
      [target.name]: target.value,
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <h2>SimpleForm</h2>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email@email.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      {name === '123' && <Message />}
      {/* {name && <Message />} */}
    </>
  )
}

export default SimpleForm
