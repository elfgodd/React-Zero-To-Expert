/*
Cosas que podriamos considerar:
1. Que pasaria si recibimos un id que no existe, ahi que ver el comportamiento
2. Que pasaria si mando un id correcto, pero no existe un heroe
3. Que pasaria si mando un id correcto, y encuentra un heroe
*/

import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Heroes', () => {
  test('debe de retornar un heroe por id', () => {
    const id = 1
    const heroe = getHeroeById(id)
    // console.log(id)
    // console.log(heroe)

    const heroeData = heroes.find((h) => h.id === id)

    expect(heroe).toEqual(heroeData)
  })
  test('debe retornar un undefined si Heroe no existe', () => {
    const id = 10
    const heroe = getHeroeById(id)

    expect(heroe).toBe(undefined)
  })

  // debe de retornar un arreglo con los heroes de DC
  // owner
  // toEqual al arreglo filtrado
  test('debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)

    // console.log(heroes)

    const heroesData = heroes.filter((h) => h.owner === owner)

    expect(heroes).toEqual(heroesData)
  })
  test('debe de retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)

    expect(heroes.length).toBe(2) // length = 2 // toBe
  })
})
