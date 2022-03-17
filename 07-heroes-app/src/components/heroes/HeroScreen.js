import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {
  const params = useParams()
  const { heroeId } = useParams()

  const hero = getHeroById(heroeId)

  if (!hero) {
    return <Navigate to='/' />
  }

  console.log(params)
  console.log(params.heroeId)
  console.log({ heroeId })
  return (
    <div>
      <h1>HeroScreen</h1>
      <p>{hero.superhero}</p>
    </div>
  )
}
