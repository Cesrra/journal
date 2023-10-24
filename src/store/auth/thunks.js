import { checkingCredentials } from "./"
import { signInWithGoogle } from "../../firebase/"

export const startCheckingAuthentication = ({ email, password }) => {
    console.log(email, password, 'In Thunk')
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}


export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await signInWithGoogle()
        console.log(result)
    }
}