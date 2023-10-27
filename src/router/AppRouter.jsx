import { useEffect } from "react"
import { Route, Routes } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { Loader } from "../UI/Loader"
import { FirebaseAuth } from "../firebase"
import { login, logout } from "../store/auth"

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async ( user ) => {
      if( !user ) return dispatch( logout() )

      const { uid, displayName, email, photoURL } = user
      dispatch( login({ uid, displayName, email, photoURL }) )
    } )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  if( status === 'checking') {
    return <Loader />
  }

  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        <Route path="/*" element={ <JournalRoutes /> } />
    </Routes>
  )
}
