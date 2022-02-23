import React from 'react'
// const apiKey = '91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm'
const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?api_key=91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm&q=rick and morty&limit=10'
    const resp = await fetch(url)
    // const data = await resp.json()
    const { data } = await resp.json()
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        // url: img.images.downsized_medium.url,
        url: img.images?.downsized_medium.url,
      }
    })

    // console.log(data)
    console.log(gifs)
  }

  getGifs()
  return (
    <>
      <h3>{category}</h3>
    </>
  )
}

export default GifGrid
