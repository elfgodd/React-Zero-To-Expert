const persona = {
  nombre: 'Elf',
  apellido: 'God',
  edad: 34,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 13.3232,
    lng: 34.9233321,
  },
}

console.log(persona)

console.log('\n')
console.log({
  persona: persona,
})

console.log('\n')
console.log({ persona })

console.log('\n')
console.table(persona)

console.log('\n')
// Estamos utilizando el mismo espacio en memoria
// Esto no nos dara error
const persona2 = persona
console.log(persona2)
persona2.nombre = 'Robin Hood'

console.log(persona.nombre) // Robin Hood
console.log(persona2.nombre) // Robin Hood

console.log('\n')
const persona3 = { ...persona }
persona3.nombre = 'Superman'
console.log(persona.nombre) // Robin Hood
console.log(persona3.nombre) // Superman
