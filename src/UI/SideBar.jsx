import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const SideBar = ({ drawerWidth = 240 }) => {
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
                    César Rincón
                </Typography>
            </Toolbar>

            <List>
                {
                ['Enero', 'Febrero', 'Abril', 'Marzo', 'Mayo'].map( text => (
                    <ListItem key={ text } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={ text } />
                                <ListItemText secondary={ 'Ejercicio de Cillum irure para probar y aprender'} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
