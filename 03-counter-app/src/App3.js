import React from 'react'
import PropTypes from 'prop-types'

const App = ({ saludo, subtitulo = 'soy un subtitulo' }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi segunda aplicacion</p>
      <p>{subtitulo}</p>
    </>
  )
}

App.defaultProps = {
  subtitulo: 'soy un subtitulo',
  // Tambien lo puedo pasar sin valor
  // subtitulo: '',
}

App.propTypes = {
  saludo: PropTypes.string,
  // saludo: PropTypes.string.isRequired,
}

export default App
