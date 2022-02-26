import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState('') // useState() undefined

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit hecho')

    if (inputValue.trim().length > 2) {
      // setcategories((cats) => [...cats, inputValue])
      // para que inserte primero la nueva categoria
      setcategories((cats) => [inputValue, ...cats])
      setInputValue('')
    }
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

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

// export default AddCategory
