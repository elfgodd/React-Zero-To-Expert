import React from 'react'

const GifGridItem = ({ id, title, url }) => {
  // console.log(img)
  console.log(id, title, url)
  return (
    <>
      <img src={url} alt={title} />
      <p>{title}</p>
    </>
  )
}

export default GifGridItem
