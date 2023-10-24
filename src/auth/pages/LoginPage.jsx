import { useDispatch } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startCheckingAuthentication,  } from "../../store/auth"

export const LoginPage = () => {
  const dispatch = useDispatch()
  
  const { email, password, onInputChange } = useForm({
    email: 'cesarr@gmail.com',
    password: '123456'
  })
  
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch( startCheckingAuthentication({ email, password }) )    
  }

  const onGoogleSignIn = () => {
    dispatch( startCheckingAuthentication({ email, password }) )
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }} >
            <TextField 
              label="Contraceña"
              type="password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant='contained' fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                variant='contained' 
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container 
            direction='row' 
            justifyContent='center' 
            textAlign='center'
            sx={{ mt:2 }}
          >
            <Link 
              component={ RouterLink} 
              color='inherit' 
              to="/auth/register"
            >
              Crear Cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
