import React from 'react'
import useFetch from '../../hooks/useFetch'

const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/6`)
  console.log(state)
  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <h2>Custom Hooks</h2>
    </>
  )
}

export default MultipleCustomHooks
