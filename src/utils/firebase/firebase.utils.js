import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
} 
from "firebase/auth";
import { 
    getFirestore, 
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Create an app instance based on config

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmzvYTl2gy-bYmOjY2Lru8cXxf2Bq0Kos",
    authDomain: "e-shop-db-98d54.firebaseapp.com",
    projectId: "e-shop-db-98d54",
    storageBucket: "e-shop-db-98d54.appspot.com",
    messagingSenderId: "61867970605",
    appId: "1:61867970605:web:e0a0f25ee967eaa44f28a4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName, 
          email,
          createdAt
        })
      } catch(error) {
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef
  }