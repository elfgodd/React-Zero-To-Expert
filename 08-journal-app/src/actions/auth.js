import { getAuth, signInWithPopup } from 'firebase/auth'
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types'

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'ElfGod'))
    }, 3500)
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
          // login(user.uid, user.displayName, user.email, user.photoURL)
        )
      })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
})
