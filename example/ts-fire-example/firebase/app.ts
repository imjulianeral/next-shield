import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIRE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIRE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIRE_DB_URL,
    projectId: process.env.NEXT_PUBLIC_FIRE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIRE_STORAGE,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRE_MESSAGING,
    appId: process.env.NEXT_PUBLIC_FIRE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIRE_MEASUREMENT_ID,
  })
}

const auth = firebase.auth
const firestore = firebase.firestore

export { firebase, auth, firestore }
