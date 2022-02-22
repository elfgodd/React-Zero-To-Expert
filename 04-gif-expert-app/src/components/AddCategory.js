import React, { useState } from 'react'

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('hola mundo')

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit hecho')
  }
  return (
    <>
      {/* <h1>{inputValue}</h1> */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>
    </>
  )
}

export default AddCategory
