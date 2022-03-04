import React, { useState, useMemo } from 'react'
import useCounter from '../03-examples/useCounter'

import '../03-examples/effects.css'
import { procesoPesado } from '../../helpers/procesoPesado'

const MemoHook = () => {
  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
      <button
        className='btn btn-outline-primary ms-3'
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default MemoHook
