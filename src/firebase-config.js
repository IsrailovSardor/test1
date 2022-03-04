import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkipB4EzUrhmpl1O9fnlZC9WW-dOlnXbI",
    authDomain: "todos-8635c.firebaseapp.com",
    projectId: "todos-8635c",
    storageBucket: "todos-8635c.appspot.com",
    messagingSenderId: "126989824226",
    appId: "1:126989824226:web:53dd93e4e3a2b1e0f22ebb",
    measurementId: "G-P6GPSN1DFY"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app)