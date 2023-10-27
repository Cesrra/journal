import { CircularProgress, Grid } from "@mui/material"


export const Loader = () => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 8 }}
    >
        <Grid
            direction="row"
            justifyContent="center"
        >
            <CircularProgress color="warning" />
        </Grid>
    </Grid>
  )
}
