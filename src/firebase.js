import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfuJTC4PLHXlJdsdW7FqZeFny5nkwT9rg",
  authDomain: "clone-24f04.firebaseapp.com",
  projectId: "clone-24f04",
  storageBucket: "clone-24f04.appspot.com",
  messagingSenderId: "445379130384",
  appId: "1:445379130384:web:a5945da097caf76ecd4695",
  measurementId: "G-44Y9RXKQES"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };