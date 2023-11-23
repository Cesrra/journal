// import { Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { NoteView, NothingSelectedView } from "../views"
import { JournalLayout } from "../layout/JournalLayout"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {
  const dispatch = useDispatch()
  const { isSaving, activedNote } = useSelector( state => state.journal )
  const onCLickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>
      {
        (activedNote?.id) ? <NoteView /> : <NothingSelectedView />      
      }
            
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
    </JournalLayout>
  )
}
