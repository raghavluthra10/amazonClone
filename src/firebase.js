
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8L5Zrxcjm2ttn8naYVkSPpo1RBAHYVwU",
    authDomain: "clone-4773d.firebaseapp.com",
    projectId: "clone-4773d",
    storageBucket: "clone-4773d.appspot.com",
    messagingSenderId: "779294455470",
    appId: "1:779294455470:web:eb4eae043101bf6e351f3f"
  });

  // const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }