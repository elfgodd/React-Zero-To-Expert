import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {
  // destructuracion de counter
  // const [{ counter1, counter2 }, setCounter] = useState({
  //   counter1: 10,
  //   counter2: 20,
  // })
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  })
  const { counter1, counter2 } = state
  // console.log(counter)
  return (
    <>
      <h1>CounterApp</h1>
      <h2>Counter {counter1}</h2>
      <h2>Counter {counter2}</h2>

      <button
        className='btn btn-primary'
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 1,
          })
        }}
      >
        +1
      </button>
    </>
  )
}
export default CounterApp

/*
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  })

   <h2>Counter {counter.counter1}</h2>
   <h2>Counter {counter.counter2}</h2>
*/
