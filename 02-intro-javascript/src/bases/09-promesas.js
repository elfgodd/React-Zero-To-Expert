import { heroes } from '../data/heroes'

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id)
      if (heroe) {
        resolve(heroe)
      } else {
        reject('No se pudo encontrar el heroe')
      }
    }, 2000)
  })

  // return promesa
}

getHeroeByIdAsync(4)
  .then(console.log)
  // .then((heroe) => console.log('Heroe: ', heroe))
  .catch(console.warn)
// .catch((err) => console.warn(err))

//
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2 segundos despues')
//     // Tarea
//     const heroe = getHeroeById(2)

//     resolve(heroe)
//     // reject(heroe)
//     return heroe
//   }, 2000)
// })

// promesa
//   .then((heroe) => {
//     console.log('Then de la promesa')
//     console.log('heroe: ', heroe)
//   })
//   .catch((err) => console.warn(err))
