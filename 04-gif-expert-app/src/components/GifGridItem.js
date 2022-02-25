import React from 'react'
import PropTypes from 'prop-types' // impt shortcut
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

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem
