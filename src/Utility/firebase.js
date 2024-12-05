import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4LzRgI1wkWC-yw4qCB6K7czDkcnqIPwI",
  authDomain: "clone-8bf43.firebaseapp.com",
  projectId: "clone-8bf43",
  storageBucket: "clone-8bf43.firebasestorage.app",
  messagingSenderId: "117863741006",
  appId: "1:117863741006:web:f21e6298a7d9638975351f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();