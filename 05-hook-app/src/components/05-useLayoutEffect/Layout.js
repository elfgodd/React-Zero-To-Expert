import React, { useState, useLayoutEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../03-examples/useCounter'

import './layout.css'

const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  const { quote } = !!data && data[0]

  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    console.log('hola Layout')
    console.log(pTag.current.getBoundingClientRect())
    setBoxSize(pTag.current.getBoundingClientRect())

    return () => {
      console.log('bye Layout')
    }
  }, [quote])
  return (
    <div>
      <h2>LayoutEffect</h2>
      <hr />
      <blockquote className='blockquote text-end'>
        <p className='mb-3' ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className='btn btn-primary' onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  )
}

export default Layout
