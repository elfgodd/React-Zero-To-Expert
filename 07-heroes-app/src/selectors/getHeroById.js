import { heroes } from '../data/heroes.js'

export const getHeroById = (id = '') => {
  console.log('getHeroById Called')
  return heroes.find((hero) => hero.id === id)
}
