import { Grid, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const AuthLayout = ({ children, title='' }) => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
        <Grid item
            className="box-shadow"
            xs={ 3 }
            sx={{
                width: { md: 550 },
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2
            }}
        >
            <Typography align="center" variant="h4" sx={{ mb:1 }} >{ title }</Typography>

            {/* Los componentes o elementos hijos */
                children
            }

        </Grid>
    </Grid>
  )
}
