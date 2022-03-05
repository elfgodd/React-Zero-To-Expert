import React from 'react'

const Showincrement = React.memo(({ increment }) => {
  console.log('Me volvi a generar')

  return (
    <button className='btn btn-primary' onClick={() => increment(5)}>
      Increment
    </button>
  )
})

export default Showincrement
