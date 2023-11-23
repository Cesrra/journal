import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../../UI"
import { useForm } from "../../hooks"

export const NoteView = () => {
  const initial_form = {
    title: '',
    body: '',
    date: new Date().getTime(),
  }
  const { title, body, date, onInputChange } = useForm(initial_form)

  return (
    <Grid 
      container 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center'
      sx={{ mb: 2 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
          <Button color="secondary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField 
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{ border: 'none', mb: 1 }}
            name="title"
            value={ title }
            onChange={ onInputChange }
          />
          <TextField 
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió hoy?"
            minRows={ 5 }
            name="body"
            value={ body }
            onChange={ onInputChange }
          />
        </Grid>
        {/* Imagenes de la nota */}
        <ImageGallery />
    </Grid>
  )
}
