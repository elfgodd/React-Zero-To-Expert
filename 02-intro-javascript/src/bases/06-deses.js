// Desestructuracion
// Asignacion Desestructurada

const persona = {
  nombre: 'elf',
  apellido: 'god',
  edad: 34,
  clave: 'DragonBall',
}

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.clave)

console.log('\n')
const { nombre, apellido, edad, clave } = persona
console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(clave)

// Extraer el nombre y cambiarle el nombre
console.log('\n')
const { nombre: nombre2 } = persona
console.log('nombre: nombre2 =  ', nombre2)

console.log('\n')
const retornaPersona = (usuario) => {
  const { nombre, apellido, edad, clave } = usuario
  console.log(nombre)
  console.log(apellido)
  console.log(edad)
  console.log(clave)
}
retornaPersona(persona)

console.log('\n')
const retornaPersona2 = ({ nombre, edad }) => {
  console.table(`nombre: ${nombre}, edad: ${edad}
  `)
}
retornaPersona2(persona)

console.log('\n')

const retornaPersona3 = ({ nombre, rango = 'capitan' }) => {
  console.table(nombre, rango)
}
retornaPersona3(persona)

persona.rango = 'soldado'
console.log('\n')
// Retornara soldado y no capitan, por que le da prioridad a los datos ya prestablecidos
const retornaPersona4 = ({ nombre, rango = 'capitan' }) => {
  console.log(nombre, rango)
}
retornaPersona4(persona) // elf soldado

console.log('\n')
const useContext = ({ nombre, edad, rango }) => {
  return {
    nombreClave: clave,
    age: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  }
}
const {
  nombreClave,
  age,
  latlng: { lat, lng },
} = useContext(persona)
console.log(nombreClave, age)
console.log('lat: ', lat, 'lng', lng)

console.log('\n')
console.log('\n')
