import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsstQl66hbhPD9F6NZddAfLYyH7md5MWU",
  authDomain: "linkedin-clone-b530a.firebaseapp.com",
  projectId: "linkedin-clone-b530a",
  storageBucket: "linkedin-clone-b530a.appspot.com",
  messagingSenderId: "15266169867",
  appId: "1:15266169867:web:c43e7932e9ece7b3b6b30e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
