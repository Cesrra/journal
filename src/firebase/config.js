// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
import { getEnvVariables } from '../helpers'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORA_BUCKET,
  FIREBASE_MESSAGIN_SENDER_ID,
  FIREBASE_APP_ID,
} = getEnvVariables()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId:FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORA_BUCKET,
  messagingSenderId: FIREBASE_MESSAGIN_SENDER_ID,
  appId: FIREBASE_APP_ID
}

// Initialize Firebase 
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )