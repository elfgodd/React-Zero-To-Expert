import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// console.log(process.env)

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
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
