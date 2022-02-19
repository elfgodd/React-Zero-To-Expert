describe('Pruebas en el archibo demo.test.js', () => {
  test('deben de ser iguales los strings', () => {
    // 1. inicializacion
    const mensaje = 'Hola mundo'

    // 2. estimulo
    const mensaje2 = `Hola mundo`

    // 3 observar el comportamiento
    expect(mensaje).toBe(mensaje2) // ===
  })
})

// Ejemplo 1
// test('debe de ser true', () => {
//   const isActive = true

//   if (isActive) {
//     throw new Error('No esta activo')
//   }
// })
