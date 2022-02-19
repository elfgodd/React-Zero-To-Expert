import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0)

  // const [state] = useState('Goku')
  // console.log(state)
  // console.log(state[0])

  const handleAdd = () => {
    // setCounter(counter + 1)
    setCounter((c) => c + 1)
  }

  // handleAdd
  // const handleAdd = (e) => {
  //   console.log(e)
  // }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      {/* <button
        onClick={(e) => {
          console.log(e)
        }}
      >
        +1
      </button> */}
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp
