import React, { useState, useCallback } from 'react'
import Showincrement from './Showincrement'

import '../03-examples/effects.css'

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num)
    },
    [setCounter]
  )

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <Showincrement increment={increment} />
    </>
  )
}

export default CallbackHook
