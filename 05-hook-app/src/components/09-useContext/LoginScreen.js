import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const LoginScreen = () => {
  const { setUser } = useContext(UserContext)
  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() =>
          setUser({
            id: 123,
            name: 'ElfGod',
          })
        }
      >
        Login
      </button>
    </>
  )
}

export default LoginScreen
