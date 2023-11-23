import { Box, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const SideBar = ({ drawerWidth = 240 }) => {
    const { displayName } = useSelector( state => state.auth )
    const { notes } = useSelector( state => state.journal )
  return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent" //temporary
            open
            sx={{
                display: { sx: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar >
                <Typography 
                    variant="h6"
                    noWrap
                    component="div"
                >
                    { displayName }
                </Typography>
            </Toolbar>

            <List>
                {
                notes.map( note => (
                    <SideBarItem note={ note } key={ note.id } />
                ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
