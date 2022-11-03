import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDWLzl9S0KkdW-Y5WSZ_KIs14wchoA52GI",
    authDomain: "anteiku-818.firebaseapp.com",
    projectId: "anteiku-818",
    storageBucket: "anteiku-818.appspot.com",
    messagingSenderId: "857837630991",
    appId: "1:857837630991:web:3b7e00c6bb911fd6f0957a"
  };

  //init firebase
  initializeApp(firebaseConfig)
  

  const projectAuth =firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }