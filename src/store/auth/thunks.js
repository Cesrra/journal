import { checkingCredentials, login, logout } from "./"
import { logoutFirebase, registerUserWithEmailPassword, sigInWithEmailPassword, signInWithGoogle } from "../../firebase/"

export const startCheckingAuthentication = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}


export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await signInWithGoogle()
        if ( !result.ok ) return dispatch( logout({ errorMessage: result.errorMessage }) )
        dispatch( login( result ) )
    }
}

export const startRegisterUserEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await registerUserWithEmailPassword({ email, password, displayName })
        console.log(result)
        if(!result.ok) return dispatch( logout( result ) )

        dispatch( login( result ) )     
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await sigInWithEmailPassword({ email, password })
        if(!result.ok) return dispatch( logout( result ) )

        dispatch( login( result ) )
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        const result = await logoutFirebase()
        if( result.ok === false ) return
        dispatch( logout() )
    }
}