import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: "linkedin-clone-b530a",
  storageBucket: "linkedin-clone-b530a.appspot.com",
  messagingSenderId: "15266169867",
  appId: "1:15266169867:web:c43e7932e9ece7b3b6b30e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
