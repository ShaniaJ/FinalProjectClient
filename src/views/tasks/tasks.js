import React from 'react';
import './tasks.css';
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {Task} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {store} from "../../state/store";
import {UPDATE_TASK} from "../../actions";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from "@mui/material/ListItemButton";

const theme = createTheme();

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © Shania Joseph '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Tasks = () => {

    const tasks = useSelector((state) => state.tasks);

    const updateTask = (id) => {
        const task = tasks.filter((task) => task.id === id).pop()
        if (task) {
            store.dispatch({
                type: UPDATE_TASK,
                task: task
            })
        }
    };

    return (
        <div className="tasks">
            <ThemeProvider theme={theme}>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
                >
                    <Toolbar sx={{flexWrap: 'wrap'}}>
                        <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                            Assigment
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container component="main" maxWidth="xl" className="task">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            marginLeft: 8,
                            marginRight: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            LIST OF TASKS
                        </Typography>

                        <List>
                            {tasks.map((task) => {
                                const labelId = `checkbox-list-label-${task.id}`;
                                const taskLink = `/task/${task.id}`;
                                return (
                                    <Box sx={{mt: 1}}>
                                        <ListItem
                                            key={task.id}
                                            disablePadding
                                        >
                                            <Link onClick={() => updateTask(task.id)} to={taskLink}
                                                  style={{textDecoration: 'none', color: '#000'}}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <Task
                                                            edge="start"
                                                            tabIndex={-1}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={labelId} primary={`${task.description}`}/>
                                                </ListItemButton>


                                            </Link>
                                        </ListItem>
                                    </Box>
                                );
                            })}
                        </List>


                    </Box>
                </Container>

                {/* Footer */}
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                        mt: 8,
                        py: [3, 6],
                    }}
                >
                    <Copyright sx={{mt: 5}}/>
                </Container>
                {/* End footer */}
            </ThemeProvider>
        </div>
    );
}

export default Tasks;