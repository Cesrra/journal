import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth"

const formValidations = {
  email: [(value) => value.includes('@') , 'El email debe tener @'],
  password: [(value) => value.length >= 6 , 'La contraceña debe tener más de 5 caracteres'],
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch()
  
  const { email, emailValid, password, passwordValid, onInputChange } = useForm({
    email: 'cesarr@gmail.com',
    password: '123456'
  }, formValidations)

  const isAuthenticating = useMemo(() => status === 'checking', [status])
  
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch( startLoginWithEmailPassword({ email, password }) )    
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() )
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
              error={ !!emailValid }
              helperText={ emailValid }
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
              error={ !!passwordValid }
              helperText={ passwordValid }
            />
          </Grid>

          <Grid item sm={ 12 } xs={ 12 } mt={ 3 }
            // eslint-disable-next-line no-extra-boolean-cast
            display={ !!errorMessage ? '' : 'none' }
            container 
            justifyContent='center' 
          >
            <Alert severity="error">
              { errorMessage }
            </Alert>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={ isAuthenticating } 
                variant='contained' 
                fullWidth 
                type="submit"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                disabled={ isAuthenticating }
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
