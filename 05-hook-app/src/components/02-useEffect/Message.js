import React, { useEffect, useState } from 'react'

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { x, y } = coords

  useEffect(() => {
    // console.log('Componente montado message')

    const mouseMove = (e) => {
      // se llaman igual coords por que estan fuera de scope
      const coords = { x: e.x, y: e.y }
      setCoords(coords)
      console.log(coords)
      console.log(' :D ')
    }

    window.addEventListener(
      'mousemove',
      mouseMove
      // console.log(e)
      // const coords = { x: e.x, e: e.y }
      // console.log(coords)
    )
    return () => {
      // console.log('Componente desmontado')
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <>
      <h1>Message</h1>
      <h2>Eres genial</h2>
      <p>
        x:{x}, y:{y}
      </p>
    </>
  )
}

export default Message
