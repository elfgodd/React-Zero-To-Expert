import { getAuth, signInWithPopup } from 'firebase/auth'
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types'

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        // Add the displayName for a normal new user
        await user.updateProfile({
          displayName: name,
        })
        dispatch(login(user.uid, user.displayName))
      })
      .catch((err) => {
        console.log(err)
      })
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
