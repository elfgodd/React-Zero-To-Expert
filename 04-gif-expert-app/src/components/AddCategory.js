import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('') // useState() undefined

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInputValue(e.target.value)
    console.log('handleInputChange llamado')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit, submit hecho', inputValue)

    if (inputValue.trim().length > 2) {
      // setCategories((cats) => [...cats, inputValue])
      // para que inserte primero la nueva categoria
      setCategories((cats) => [inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <>
      {/* <h1>{inputValue}</h1> */}
      <form onSubmit={handleSubmit}>
        <p>{inputValue}</p>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

// export default AddCategory
// este codigo de abajo es para test enzyme
// {/* <p>{inputValue}</p> */}
