import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {Button, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonIcon from '@mui/icons-material/Person';


const NavBar = () => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    marginTop="30px"
                    marginBottom="20px"
                    noWrap
                    sx={{ flex: 1 }}
                    color="primary"
                >
                    Employee Management System
                </Typography>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-around', overflowX: 'auto' }}
            >
                <Button variant="text">
                    <HomeIcon color="primary" sx={{marginRight:'5px'}} />
                <Link
                    style={{ color: 'inherit', textDecoration: 'none'}}
                    color="inherit"
                    noWrap
                    to={'/'}
                    variant="body2"
                    sx={{ p: 5, flexShrink: 0 }}
                >
                    Home
                </Link>
                </Button>

                <Button variant="text">
                    <AssignmentTurnedInIcon color="primary" sx={{marginRight:'5px'}} />
                    <Link
                        style={{ color: 'inherit', textDecoration: 'none'}}
                    color="inherit"
                    noWrap
                    to={'/tasks/'}
                    variant="body2"
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    Tasks
                </Link>
                </Button>

                <Button variant="text">
                    <PersonIcon color="primary" sx={{marginRight:'5px'}} />
                    <Link
                        style={{ color: 'inherit', textDecoration: 'none'}}
                        color="inherit"
                    noWrap
                    to={'/employees/'}
                    variant="body2"
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    Employees
                </Link>
            </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;