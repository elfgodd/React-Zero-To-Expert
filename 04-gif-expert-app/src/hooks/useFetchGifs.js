import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      })
      // setTimeout(() => {
      //   // console.log(imgs)
      //   setState({
      //     data: imgs,
      //     loading: false,
      //   })
      // }, 2000)
    })
  }, [category])

  // setTimeout(() => {
  //   setState({
  //     data: [1, 2, 3, 4, 5, 6, 7],
  //     loading: false,
  //   })
  // }, 1500)

  return state // { data: [], loading: true  }
}
