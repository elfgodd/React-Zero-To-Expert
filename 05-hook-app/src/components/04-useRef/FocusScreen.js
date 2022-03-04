import React, { useRef } from 'react'
import '../03-examples/effects.css'

const FocusScreen = () => {
  const inputRef = useRef()
  console.log(inputRef)
  const handleClick = () => {
    // document.querySelector('input').focus()
    // document.querySelector('input').select()
    inputRef.current.select()
    console.log(inputRef)
  }
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input ref={inputRef} className='form-control' placeholder='Su nombre' />
      <button className='btn btn-outline-primary mt-3' onClick={handleClick}>
        Focus
      </button>
    </>
  )
}

export default FocusScreen
