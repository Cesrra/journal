import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../../UI"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"

export const NoteView = () => {
  const dispatch = useDispatch()
  const { activedNote } = useSelector( state => state.journal )
  const { title, body, date, imageUrls, formState, onInputChange } = useForm( activedNote )
  
  const dateString = useMemo(() => {
    const newDate = new Date( date )
    return newDate.toUTCString()
  }, [ date ])

  useEffect(() => {
    
  }, [activedNote])
  

  return (
    <Grid 
      container 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center'
      sx={{ mb: 2 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
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
