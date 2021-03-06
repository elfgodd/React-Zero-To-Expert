// import { heroes } from './data/heroes'

// import { heroes } from './data/heroes'

// importando 2 data de 1 mismo archivo file
import { heroes, owners } from '../data/heroes'

// importando data por default + otra que no es la default
// import heroes, o{wners} from './data/heroes'

console.log(heroes)
console.log('\n')
console.log(owners)
console.log('\n')

// Encontrar el heroe segun su id

// solucion corta
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

// Solucion mediana
// const getHeroeById = (id) => {
//   return heroes.find((heroe) => heroe.id === id)
// }

console.log(getHeroeById(2))
console.log('\n')
console.log(getHeroeById(3))

// Solucion larga
// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

// console.log(getHeroeById(2))

// Encontrar todos los owner ya sea de DC or Marvel
console.log('\n')
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner)

console.log(getHeroesByOwner('DC'))
console.log('\n')
console.log(getHeroesByOwner('Marvel'))
