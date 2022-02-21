import React from 'react'
import PropTypes from 'prop-types'

const App = ({ saludo, subtitulo = 'soy un subtitulo' }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  )
}

App.defaultProps = {
  subtitulo: 'soy un subtitulo',
}

App.propTypes = {
  saludo: PropTypes.string,
}

export default App
