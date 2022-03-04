import React from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from './useCounter'

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  // const state = useFetch(`https://www.breakingbadapi.com/api/quotes/6`)
  // console.log(state)
  // const { loading, data } = useFetch(
  //   `https://www.breakingbadapi.com/api/quotes/12 `
  // )
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  console.log(loading)
  console.log(data)
  // null, !null negacion de null es true, !!null doble negacion de null es false
  const { author, quote } = !!data && data[0]
  console.log(author, quote)
  return (
    <div>
      <h1>MultipleCustomHooks</h1>
      <h2>BreakingBad Quotes</h2>
      <hr />
      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-3'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}
      <button className='btn btn-primary' onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  )
}

export default MultipleCustomHooks
