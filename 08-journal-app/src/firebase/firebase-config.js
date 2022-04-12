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

const firebaseConfigTesting = {
  apiKey: 'AIzaSyDceIDIAd0oJbsXnThtZwN6ricgNUH25wc',

  authDomain: 'redux-test-6cee8.firebaseapp.com',

  projectId: 'redux-test-6cee8',

  storageBucket: 'redux-test-6cee8.appspot.com',

  messagingSenderId: '851856973528',

  appId: '1:851856973528:web:ff81568e3e370b7434c1ad',
}

if (process.env.NODE_ENV === 'test') {
  // testing
  firebase.initializeApp(firebaseConfigTesting)
} else {
  // dev/prod
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
