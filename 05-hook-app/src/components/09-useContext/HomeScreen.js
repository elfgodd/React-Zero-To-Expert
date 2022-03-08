import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const HomeScreen = () => {
  const userContext = useContext(UserContext)
  console.log(userContext)
  return (
    <>
      <h1>HomeScreen</h1>
    </>
  )
}

export default HomeScreen
