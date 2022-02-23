import React from 'react'
import 'animate.css'

const GifGridItem = ({ id, title, url }) => {
  // console.log(img)
  console.log(id, title, url)
  return (
    <div className='card animate__animated animate__flip'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
