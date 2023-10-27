import { Link as RouterLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"

const formData = {
  displayName: 'Cesar Rincon',
  email: 'cesarr@gmail.com',
  password: '123456',
  confirmPassword: '123456' 
}
export const RegisterPage = () => {
  const { displayName, email, password, confirmPassword, onInputChange, formState } = useForm( formData )
  const onRegister = ( event ) => {
    event.preventDefault()
    console.log(formState)
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
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }} >
            <TextField 
              label="Confirmar Contraceña"
              type="password"
              placeholder="******"
              fullWidth
              name="confirmPassword"
              value={ confirmPassword }
              onChange={ onInputChange }
            />
          </Grid>


          <Grid container spacing={ 2 } sx={{ mt: 1 }}>
            <Grid item xs={ 12 } sm={ 12 }>
              <Button variant='contained' type="submit" fullWidth>
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
