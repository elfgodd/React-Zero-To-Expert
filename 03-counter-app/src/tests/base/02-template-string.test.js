import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar hola elf', () => {
    const nombre = 'Elf'

    const saludo = getSaludo(nombre)
    console.log(saludo)
    expect(saludo).toBe('Hola ' + nombre + '!')
  })
  test('getSaludo debe de retornar Hola Paladin! si no hay argumento nombre', () => {
    const saludo = getSaludo()
    expect(saludo).toBe('Hola Paladin!')
  })
})
