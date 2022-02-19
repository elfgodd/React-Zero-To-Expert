import React from 'react'
import PropTypes from 'prop-types'

const App = ({ saludo }) => {
  return (
    <>
      <h1>{saludo}</h1>

      <p>Mi segunda aplicacion</p>
    </>
  )
}

App.propTypes = {
  saludo: PropTypes.string,
  // saludo: PropTypes.string.isRequired,
}

export default App
