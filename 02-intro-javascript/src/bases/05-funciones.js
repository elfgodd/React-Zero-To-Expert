// Funciones

// No es recomendable hacer funciones de esta manera
// Ya que podemos caer en el error de asignar esta misma
// variable a otro dato
function saludar(nombre) {
  return `hola, ${nombre}`
}

console.log(saludar)
console.log('\n')
console.log(saludar('elf'))
console.log('\n')

// Utilizando const ya no cometemos el error de asignar esta variable
// a otro tipo de dato por descuido
const saludar2 = function (nombre) {
  return `hola, ${nombre}`
}

console.log(saludar2('paladin'))
console.log('\n')

// funciones flecha
const saludar3 = (nombre) => {
  return `Hola, ${nombre}`
}

console.log(saludar3('orc'))
console.log('\n')

const saludar4 = (nombre) => `hola, ${nombre}`
console.log(saludar4('troll'))

console.log('\n')
const saludar5 = () => `hola mundo!`
console.log(saludar5())

console.log('\n')
const getUser = () => {
  return {
    udi: 101,
    username: 'el_101',
  }
}
console.log('getUser: ', getUser)
console.log('getUser: ', getUser())

console.log('\n')
const getUser2 = () => ({ udi: 102, username: 'el_102' })
console.log('getUser2: ', getUser2())

// Tarea
console.log('\n')
const getUsuarioActivo = (nombre) => ({
  udi: 103,
  username: nombre,
})

const usuarioActivo = getUsuarioActivo('Human')
console.log('usuarioActivo: ', usuarioActivo)
