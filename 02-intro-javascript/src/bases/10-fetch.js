const apiKey = '91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original
    console.log(url)

    const img = document.createElement('img')
    img.src = url

    document.body.append(img)

    // console.log(data)
    // console.log(data.images.original.url)
  })
  .catch(console.warn)

// peticion
//   .then((resp) => {
//     // console.log(resp)
//     resp.json().then((data) => {
//       console.log(data)
//     })
//   })
//   .catch(console.warn)
