import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDPWqH6P_oOvDu73X-u-fd1njumvxyFKRM',

  authDomain: 'react-app-courses-1cfb4.firebaseapp.com',

  projectId: 'react-app-courses-1cfb4',

  storageBucket: 'react-app-courses-1cfb4.appspot.com',

  messagingSenderId: '96326384956',

  appId: '1:96326384956:web:2bd4a20d6c4fdfa5e53239',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
