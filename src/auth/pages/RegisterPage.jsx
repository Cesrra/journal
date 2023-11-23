import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startRegisterUserEmailPassword } from "../../store/auth"

const formData = {
  displayName: 'Cesar Rincon',
  email: 'cesarr@gmail.com',
  password: '123456',
  confirmPassword: '123456' 
}

const formValidations = {
  displayName: [(value) => value.length > 1 , 'El nombre es obligatorio y mayor a un caracter'],
  email: [(value) => value.includes('@') , 'El email debe tener @'],
  password: [(value) => value.length >= 6 , 'La contraceña debe tener más de 5 caracteres'],
  // confirmPassword: [(value) => value === confirmPassword , 'Las contraceñas no coinciden'],
}

export const RegisterPage = () => {
  const { 
    displayName, displayNameValid,
    email, emailValid,
    password, passwordValid,
    formState, isFormValid,
    confirmPassword,
    onInputChange 
  } = useForm( formData, formValidations )

  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth )

  // const [ setFormSubmited ] = useState(false)
  const [ confirmPasswordValid, setConfirmPasswordValid ] = useState(null)
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  useEffect(() => {
    if( password === confirmPassword ) {
      setConfirmPasswordValid(null)
    }else {
      setConfirmPasswordValid('Las contraceñas no coinciden')      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmPassword])
  

  const onRegister = ( event ) => {
    event.preventDefault()
    if( isFormValid && confirmPasswordValid == null ) {
      dispatch( startRegisterUserEmailPassword(formState) )
    }
  }

  return (
    <AuthLayout title="Registro">
      <form onSubmit={ onRegister }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Nombre Completo"
              type="text"
              placeholder="César Rincón"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid }
              helperText={ displayNameValid }
            />
          </Grid>
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
              placeholder="******"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid }
              helperText={ passwordValid }
            />
          </Grid>
          <Grid item xs={12} mt={ 3 } >
            <TextField 
              label="Confirmar Contraceña"
              type="password"
              placeholder="******"
              fullWidth
              name="confirmPassword"
              value={ confirmPassword }
              onChange={ onInputChange }
              error={ !!confirmPasswordValid }
              helperText={ confirmPasswordValid }
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
            <Grid item xs={ 12 } sm={ 12 }>
              <Button 
                variant='contained'
                type="submit"
                fullWidth
                disabled={ isAuthenticating }
              >
                Crear Cuenta
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
            <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
            <Link 
              component={ RouterLink } 
              color='inherit' 
              to="/auth/login"
            >
              Inisia Sesión
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
