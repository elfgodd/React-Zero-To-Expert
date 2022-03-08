import React from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UseContext'

const MainApp = () => {
  const user = {
    id: 1234,
    name: 'elfGod',
    email: 'elfgod@elfgod.com',
  }

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  )
}

export default MainApp
