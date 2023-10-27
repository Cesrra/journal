import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider )
        // const credential = GoogleAuthProvider.credentialFromResult( result )
        const { displayName, email, photoURL, uid } = result.user        

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const { errorCode, errorMessage, customData:{email} } = error
        const credential = GoogleAuthProvider.credentialFromError( error )
        return {
            ok: false,
            errorCode,
            errorMessage,
            email,
            credential
        }
    }
}