// Version 3
import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      // Se va disparar cuando el componente o efecto se desmonte
      // Aqui cambiamos el valor del useRef
      // Esto no va disparar nuevamente la renderizacion del componente
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          })
        }
      })
  }, [url])

  return state
}

export default useFetch

// // Version 2
// import { useState, useEffect, useRef } from 'react'

// const useFetch = (url) => {
//   const isMounted = useRef(true)
//   const [state, setState] = useState({ data: null, loading: true, error: null })

//   useEffect(() => {
//     return () => {
//       // Se va disparar cuando el componente o efecto se desmonte
//       // Aqui cambiamos el valor del useRef
//       // Esto no va disparar nuevamente la renderizacion del componente
//       isMounted.current = false
//     }
//   }, [])

//   useEffect(() => {
//     setState({ data: null, loading: true, error: null })
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         setTimeout(() => {
//           if (isMounted.current) {
//             setState({
//               loading: false,
//               error: null,
//               data,
//             })
//           } else {
//             console.log('setState no se llamo')
//           }
//         }, 4000)
//       })
//   }, [url])

//   return state
// }

// export default useFetch

console.log('#####')

// // Version 1
// import { useState, useEffect } from 'react'

// const useFetch = (url) => {
//   const [state, setState] = useState({ data: null, loading: true, error: null })

//   useEffect(() => {
//     setState({ data: null, loading: true, error: null })
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         setTimeout(() => {
//           setState({
//             loading: false,
//             error: null,
//             data,
//           })
//         }, 4000)
//         // setState({
//         //   loading: false,
//         //   error: null,
//         //   data,
//         // })
//       })
//   }, [url])

//   return state
// }

// export default useFetch
