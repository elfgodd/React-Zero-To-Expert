import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
import { heroImages } from '../../helpers/heroImages'
// Manejo de imagenes metodos 1, 2, 3
// Imagenes 2 Estatico
// import batman from '../../assets/heroes/dc-batman.jpg'

// Imagenes 3  WebPack manejo de imagenes
// const heroImages = require.context('../../assets/heroes', true)

export const HeroScreen = () => {
  const params = useParams()
  const { heroeId } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(heroeId), [heroeId])

  const handleReturn = () => {
    // Que vaya a la pagina anterior
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/' />
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  console.log(params)
  console.log(params.heroeId)
  console.log({ heroeId })

  // Imagenes 1
  // desde public/assets
  // const imagePath = `/assets/${id}.jpg`
  // src={`../assets/heroes/${heroeId}.jpg`}

  //

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          // src={imagePath} // import
          // src={heroImages(`./marvel-spider.jpg`)}
          src={heroImages(`./${heroeId}.jpg`)}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className='mt-5'>Characters</h5>
        <p>{characters}</p>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}
