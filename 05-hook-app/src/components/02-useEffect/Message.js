import React, { useEffect } from 'react'

const Message = () => {
  useEffect(() => {
    console.log('Componente montado message')

    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  return (
    <>
      <h1>Message</h1>
      <h2>Eres genial</h2>
    </>
  )
}

export default Message
