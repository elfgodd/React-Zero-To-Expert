// Funcional Component
import React from 'react'

// const App = (props) => {
// Agregar este codigo en el return <p>{props.saludo}</p>
// console.log(props)

// const App = ({ saludo }) => {

// saludo pasa datos, por si el comp padre no envia props
const App = ({ saludo = 'Hola mundo' }) => {
  const saludo2 = 'Hola mundo const'
  const numeros = 123
  const booleanos = true
  const cadena = [1, 2, 3, 4, 5]

  const objecto = {
    nombre: 'elf',
    apellido: 'god',
  }

  return (
    <>
      <h1>App</h1>
      <h5>Descripcion del app:</h5>
      <p>app de prueba educativa</p>
      <p>
        {saludo2} + {numeros}
      </p>
      <p>{saludo}</p>
      <p>booleanos: {booleanos}</p>
      <p>cadena: {cadena}</p>
      <p>{JSON.stringify(objecto)}</p>
      <pre>{JSON.stringify(objecto)}</pre>
      <pre>{JSON.stringify(objecto, null, 3)}</pre>
    </>
  )
}

export default App
