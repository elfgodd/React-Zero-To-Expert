// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
  try {
    const apiKey = '91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm'
    // const apiKey = '91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm1111' // wrong API
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const { data } = await resp.json()

    const { url } = data.images.original

    return url
  } catch (error) {
    // manejo del error
    // console.error(error)
    return 'No existe'
  }
}

getImagen()
