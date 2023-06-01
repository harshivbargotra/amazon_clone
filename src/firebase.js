
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwicrRlcpBgQG22I2VirFnlWYZwHXPSdI",
  authDomain: "clone-416ed.firebaseapp.com",
  projectId: "clone-416ed",
  storageBucket: "clone-416ed.appspot.com",
  messagingSenderId: "415169454732",
  appId: "1:415169454732:web:8222fdd7a3f2cc793d51a9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};