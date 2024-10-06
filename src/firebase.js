import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "finance-tracker-89118.firebaseapp.com",
  projectId: "finance-tracker-89118",
  storageBucket: "finance-tracker-89118.appspot.com",
  messagingSenderId: "470023010091",
  appId: "1:470023010091:web:552803fafccadc19cd776e",
  measurementId: "G-RZGGGJ04LN"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };