import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react'

import '../03-examples/effects.css'

const Padre = () => {
  const numeros = [2, 4, 6, 8, 10]
  const [valor, setValor] = useState(0)

  //   const incrementar = (num) => {
  //     setValor(valor + num)
  //   }

  const incrementar = useCallback(
    (num) => {
      setValor((v) => v + 1)
    },
    [setValor]
  )

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  )
}

export default Padre
