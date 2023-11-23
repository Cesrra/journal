import { Navigate, Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { Loader } from "../UI/Loader"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {
  const { status } = useCheckAuth()

  if( status === 'checking') {
    return <Loader />
  }

  return (
    <Routes>
      {
        status === 'authenticated' ? 
          <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }
      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
              
    </Routes>
  )
}
