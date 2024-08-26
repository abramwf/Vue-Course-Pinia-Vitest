import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBmNifimYxIIXbQmKLfG-UvcSPjnFGAQS0',
  authDomain: 'music-28c3c.firebaseapp.com',
  projectId: 'music-28c3c',
  storageBucket: 'music-28c3c.appspot.com',
  //   messagingSenderId: '1070051593612',
  appId: '1:1070051593612:web:4658c221dff2a683819aa9'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, storage, songsCollection }
