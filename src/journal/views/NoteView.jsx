import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"
import { ImageGallery } from "../../UI"
import { useForm } from "../../hooks"
import { setActiveNote, startUpdateNote, startUpladingFiles } from "../../store/journal"

export const NoteView = () => {
  const dispatch = useDispatch()
  const { activedNote, messageSaved, isSaving } = useSelector( state => state.journal )
  const { title, body, date, formState, onInputChange } = useForm( activedNote )
  
  const dateString = useMemo(() => {
    const newDate = new Date( date )
    return newDate.toUTCString()
  }, [ date ])

  const fileInputRef = useRef()

  useEffect(() => {
    dispatch( setActiveNote( formState ) )
  }, [ formState, dispatch ])

  useEffect(() => {
    if ( messageSaved.length > 0) {
      Swal.fire('Nota actualizad', messageSaved, 'success')
    }
  },[ messageSaved ])
  
  const onSaveNote = () => {
    dispatch( startUpdateNote() )
    // dispatch( startNewNote() )
  }

  const onFileInputChange = ({ target }) => {
    if( target.files.length === 0 ) return

    dispatch( startUpladingFiles( target.files ) )
  }
  
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
          <input 
            type="file"
            multiple
            ref={ fileInputRef }
            onChange={ onFileInputChange }
            style={{ display: 'none' }}
          />
          <IconButton 
            color="primary"
            disabled={ isSaving }
            onClick={ () => fileInputRef.current.click() }
          >
            <UploadOutlined />
          </IconButton>
          <Button
            disabled={ isSaving }
            color="secondary"
            sx={{ padding: 2 }}
            onClick={ onSaveNote }
          >
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
        <ImageGallery images={ activedNote.imageUrls } />
    </Grid>
  )
}
