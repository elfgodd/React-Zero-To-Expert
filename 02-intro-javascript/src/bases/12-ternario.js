const activo = true

// let mensaje = ''

// if (!activo) {
//   mensaje = 'Activo'
// } else {
//   mensaje = 'Inactivo'
// }

// const mensaje = !activo ? 'Activo' : 'Inactivo'

// estis 2 codigos de abajo son exactamente lo mismo
// const mensaje = activo ? 'Activo' : 'Inactivo'
// const mensaje = activo === true ? 'Activo' : 'Inactivo'

// const mensaje = activo === true ? 'Activo' : null

// Forma corta de hacer un if
// Esta manera corta sera muy utilizada en React
const mensaje = activo && 'Activo'

// const mensaje = (activo === true) && 'Activo'

console.log(mensaje)
