import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Nombre Completo"
              type="text"
              placeholder="César Rincón"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }} >
            <TextField 
              label="Contraceña"
              type="password"
              placeholder="******"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }} >
            <TextField 
              label="Confirmar Contraceña"
              type="password"
              placeholder="******"
              fullWidth
            />
          </Grid>


          <Grid container spacing={ 2 } sx={{ mt: 1 }}>
            <Grid item xs={ 12 } sm={ 12 }>
              <Button variant='contained' fullWidth>
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
