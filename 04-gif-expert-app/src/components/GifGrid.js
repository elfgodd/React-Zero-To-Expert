import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

// const apiKey = '91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm'
const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    // getGifs(category).then((imgs) => setImages(imgs))
    getGifs(category).then(setImages)
  }, [category])

  // const getGifs = async () => {
  //   // const url =
  //   //   'https://api.giphy.com/v1/gifs/search?api_key=91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm&q=rick and morty&limit=10'
  //   const url = `https://api.giphy.com/v1/gifs/search?api_key=91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm&q=${encodeURI(
  //     category
  //   )}&limit=10`
  //   const resp = await fetch(url)
  //   // const data = await resp.json()
  //   const { data } = await resp.json()
  //   const gifs = data.map((img) => {
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       // url: img.images.downsized_medium.url,
  //       url: img.images?.downsized_medium.url,
  //     }
  //   })

  //   // console.log(data)
  //   console.log(gifs)
  //   setImages(gifs)
  // }

  // getGifs()
  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
        {/* {images.map((img) => (
          <GifGridItem key={img.id} img={img} />
        ))} */}
        {/* {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))} */}
        {/* {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))} */}
      </div>
    </>
  )
}

export default GifGrid
