import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 


const firebaseConfig = {
    apiKey: "AIzaSyDHTYLvobv0PsAq_aDeuwRY4btPGFBc5GE",
    authDomain: "todo-aead4.firebaseapp.com",
    databaseURL: "https://todo-aead4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-aead4",
    storageBucket: "todo-aead4.appspot.com",
    messagingSenderId: "921035371335",
    appId: "1:921035371335:web:1077c314de4651587ad262",
    measurementId: "G-39CZ6DG98L"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
