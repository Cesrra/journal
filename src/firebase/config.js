// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd95PhD8KKiu4e52ODespjfy7WROEewYQ",
  authDomain: "journal-react-cesrra.firebaseapp.com",
  projectId: "journal-react-cesrra",
  storageBucket: "journal-react-cesrra.appspot.com",
  messagingSenderId: "1097587837364",
  appId: "1:1097587837364:web:2279f030ca874ba5668ae1"
}

// Initialize Firebase 
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )