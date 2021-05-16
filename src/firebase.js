
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8L5Zrxcjm2ttn8naYVkSPpo1RBAHYVwU",
    authDomain: "clone-4773d.firebaseapp.com",
    projectId: "clone-4773d",
    storageBucket: "clone-4773d.appspot.com",
    messagingSenderId: "779294455470",
    appId: "1:779294455470:web:eb4eae043101bf6e351f3f"
  };

//   if (!firebase.apps.length) {
//     try {
//       firebase.initializeApp(firebaseConfig)
//     } catch (err) {
//         console.error('Firebase initialization error raised' ,err.stack)
//     }
// }


  // if (!firebase.apps.length) {
      
  //   }

  // const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.initializeApp(firebaseConfig).firestore();

  const auth = firebase.auth();

  export  {db};

  export { auth };