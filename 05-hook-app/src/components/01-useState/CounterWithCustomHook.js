import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter()

  return (
    <>
      <h1>CounterWithCustomHook</h1>
      <h2>Counter with Hook: {state}</h2>
      <hr />

      <button onClick={() => increment(2)} className='btn'>
        + 1
      </button>
      <button onClick={() => reset()} className='btn'>
        Reset
      </button>
      <button onClick={() => decrement(2)} className='btn'>
        - 1
      </button>
      {/*    
      <button onClick={increment} className='btn'>
        + 1
      </button>
      <button onClick={decrement} className='btn'>
        - 1
      </button> */}
    </>
  )
}

export default CounterWithCustomHook
