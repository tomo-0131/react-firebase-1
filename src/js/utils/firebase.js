import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyANu_TXlhHf_3CIlNGAfh63eQFCJctLKBQ",
  authDomain: "react-firebase-todo-b5ac7.firebaseapp.com",
  projectId: "react-firebase-todo-b5ac7",
  storageBucket: "react-firebase-todo-b5ac7.appspot.com",
  messagingSenderId: "1061325279968",
  appId: "1:1061325279968:web:f3f1d0f6208884dd30f685"
})

const auth = firebase.auth()
const db = firebase.firestore()

db.settings({ timestampsInSnapshots: true })

export { auth, db }
