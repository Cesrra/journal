import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FirebaseAuth } from "../firebase"
import { login, logout } from "../store/auth"

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth)
    const dispatch = useDispatch()
  
    useEffect(() => {
      onAuthStateChanged( FirebaseAuth, async ( user ) => {
        if( !user ) return dispatch( logout() )
  
        const { uid, displayName, email, photoURL } = user
        dispatch( login({ uid, displayName, email, photoURL }) )
      } )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onAuthStateChanged])

    return {
        status
    }
}
