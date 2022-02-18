const getImagen = async () => {
  try {
    const apiKey = '91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm'
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    // estos 2 codigos son iguales
    // const { data } = await resp.json()
    const data = await resp.json()

    console.log(data.data)

    // estos 2 codigos son iguales
    // const { url } = data.images.original
    const url = data.data.images.original.url

    console.log(url)

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    // manejo error
    console.error(error)
  }
}

getImagen()
