import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBAuXkwc7NBz9P8YztDxEdyVudIBrsJSmw",
    authDomain: "chamados-4e8ac.firebaseapp.com",
    projectId: "chamados-4e8ac",
    storageBucket: "chamados-4e8ac.appspot.com",
    messagingSenderId: "593331102445",
    appId: "1:593331102445:web:b53644707cada3f269a2e4",
    measurementId: "G-90P8CPQ9WY"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseapp);
  const db = getFirestore( firebaseapp);
  const storage = getStorage( firebaseapp);

  export {auth, db, storage};
