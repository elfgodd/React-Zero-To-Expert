import React, { useEffect } from 'react'

import useForm from '../../hooks/useForm'

import './effects.css'

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formValues

  useEffect(() => {
    console.log('email cambio')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formValues)
  }

  // destructurando el target del event, target === e.target
  // const handleInputChange = ({ target }) => {
  //   // console.log(e.target.name)
  //   // console.log(e.target.value)

  //   setFormState({
  //     ...formState,
  //     [target.name]: target.value,
  //   })
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h1>useEffect</h1>
      <h2>FormWithCustomHook</h2>
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
      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*****'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>
      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  )
}

export default FormWithCustomHook
