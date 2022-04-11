import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgNvyMnXmKRw_45uiaN_pMonv9cNrZGoU",
    authDomain: "disneyplus-clone-7ba28.firebaseapp.com",
    projectId: "disneyplus-clone-7ba28",
    storageBucket: "disneyplus-clone-7ba28.appspot.com",
    messagingSenderId: "345558280909",
    appId: "1:345558280909:web:07c3856a45efc9d9b3d784",
    measurementId: "G-WFLPEM04BP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;
