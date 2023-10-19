import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../../UI"

const drawerWidth = 240

// eslint-disable-next-line react/prop-types, no-unused-vars
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', }}>
        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth } />
        {/* Sidebar */}
        <SideBar drawerWidth={ drawerWidth } />
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />
            { children }
        </Box>
        {/* Navbar */}
    </Box>
  )
}
