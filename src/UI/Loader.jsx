import { CircularProgress, Grid } from "@mui/material"


export const Loader = () => {
  return (
    <Grid 
      container
      direction="column"
      spacing={ 0 }
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 8 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  )
}
