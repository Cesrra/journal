import { Box } from "@mui/material"
import { NavBar } from "../../UI"

const drawerWidth = 240

// eslint-disable-next-line react/prop-types, no-unused-vars
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', }}>
        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth } />
        {/* Sidebar */}
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            { children }
        </Box>
        {/* Navbar */}
    </Box>
  )
}
