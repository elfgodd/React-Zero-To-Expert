import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const HomeScreen = () => {
  // const userContext = useContext(UserContext)
  // console.log(userContext)
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <>
      <h1>HomeScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  )
}

export default HomeScreen
