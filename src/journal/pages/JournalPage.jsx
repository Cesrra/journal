// import { Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid, IconButton } from "@mui/material"
import { AddOutlined, DeleteOutline } from "@mui/icons-material"
import { NoteView, NothingSelectedView } from "../views"
import { JournalLayout } from "../layout/JournalLayout"
import { setActiveNote, startDeletingActiveNote } from "../../store/journal"

export const JournalPage = () => {
  const dispatch = useDispatch()
  const { isSaving, activedNote } = useSelector( state => state.journal )
  
  const onCLickNewNote = () => {
    // dispatch( startNewNote() )
    dispatch( setActiveNote({
      id: '1',
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: []
    }) )
  }

  const onDelete = () => {
    dispatch( startDeletingActiveNote() )
  }

  return (
    <JournalLayout>
      {
        (activedNote?.id) ? <NoteView /> : <NothingSelectedView />      
      }
      {
        (!activedNote?.id) ? (
          <IconButton
            disabled={ isSaving }
            onClick={ onCLickNewNote }
            size="large"
            sx={{
              color: "white",
              backgroundColor: 'error.main',
              ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
              position: "fixed",
              right: 50,
              bottom: 65
            }}
          >
            <AddOutlined sx={{ fontSize: 30 }} />
          </IconButton>
        )
        : (
          <Grid
            container
            justifyContent='start'
          >
            <Button
              variant="outlined"
              onClick={ onDelete }
              color="error"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              sx={{
                mt: 2,
                position: "fixed",
                right: 50,
                bottom: 65
              }}
            >
              <DeleteOutline />
              Borrar
            </Button>
          </Grid>
        )  
      }            
    </JournalLayout>
  )
}
