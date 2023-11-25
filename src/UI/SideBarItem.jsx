/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { setActiveNote } from "../store/journal"

export const SideBarItem = ({ note }) => {
  const dispatch = useDispatch()

  const handleActiveNote = () => {
    dispatch( setActiveNote( note ) )
  }

  return (
    <ListItem 
      disablePadding 
      onClick={ handleActiveNote }
    >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={ note?.title } />
          <ListItemText secondary={ note?.body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
