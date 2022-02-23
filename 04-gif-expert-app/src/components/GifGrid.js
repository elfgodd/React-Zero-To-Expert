// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'

// const apiKey = '91WiRxPNNNfsSYcNJeD6u2tNlR1hKfMm'
const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])

  // importing custom hook
  // const state = useFetchGifs()
  // console.log(state)
  const { data: images, loading } = useFetchGifs(category)
  // console.log(data)
  // console.log(loading)

  // useEffect(() => {
  //   // getGifs(category).then((imgs) => setImages(imgs))
  //   getGifs(category).then(setImages)
  // }, [category])

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
      <h3 className='animate__animated animate__flip'>{category}</h3>
      {/* {loading ? 'Cargando...' : 'Data cargada'} */}
      {/* {loading ? <p>Loading</p>> : null} */}
      {loading && (
        <p className='animate__animated animate__flash'>Loading...</p>
      )}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

export default GifGrid

// <div className='card-grid'>
//   {images.map((img) => (
//     <GifGridItem key={img.id} {...img} />
//   ))}
//   {/* {images.map((img) => (
//     <GifGridItem key={img.id} img={img} />
//   ))} */}
//   {/* {images.map(({ id, title }) => (
//     <li key={id}>{title}</li>
//   ))} */}
//   {/* {images.map((img) => (
//     <li key={img.id}>{img.title}</li>
//   ))} */}
// </div>
