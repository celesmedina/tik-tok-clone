// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSf1ZNgHud7gIlL8SzIhvnAl5ZQ4CLqPI",
  authDomain: "tik-tok-clone-2da88.firebaseapp.com",
  projectId: "tik-tok-clone-2da88",
  storageBucket: "tik-tok-clone-2da88.appspot.com",
  messagingSenderId: "886696551558",
  appId: "1:886696551558:web:0bec814826947151691d07",
  measurementId: "G-YT9CNZL1NK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
