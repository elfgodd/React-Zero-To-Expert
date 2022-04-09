import { shallowEqual } from 'react-redux'
import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types'
import { startLoading, finishLoading } from './ui'
import { noteLogout } from './notes'

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))

        dispatch(finishLoading())
      })
      .catch((err) => {
        console.log(err)
        dispatch(finishLoading())
        Swal.fire('Error', err.message, 'error')
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
        Swal.fire('Error', err.message, 'error')
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

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()

    dispatch(logout())
    dispatch(noteLogout())
  }
}

export const logout = () => ({
  type: types.logout,
})
