import React from 'react'
import PropTypes from 'prop-types'

const App = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  )
}

App.propTypes = {
  saludo: PropTypes.string.isRequired,
}
App.defaultProps = {
  subtitulo: 'soy un subtitulo',
}

export default App
