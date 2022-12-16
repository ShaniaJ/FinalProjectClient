import React from 'react';
import './tasks.css';
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {Clear, Task} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {store} from "../../state/store";
import {CREATE_TASK, UPDATE_TASK} from "../../actions";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import {deleteTask} from "../../api/api";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const theme = createTheme();

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

    const create = () => {
        store.dispatch({
            type: CREATE_TASK,
            employee: undefined
        })
    };

    return (
        <div className="tasks">
            <ThemeProvider theme={theme}>
                <NavBar ></NavBar>
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
                                    <Box sx={{mt: 1}} key={task.id}>
                                        <ListItem key={task.id} disablePadding>
                                            <Link onClick={() => updateTask(task.id)} to={taskLink}
                                                  style={{textDecoration: 'none', color: '#000'}}>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Task
                                                            edge="start"
                                                            tabIndex={-1}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={labelId} primary={`${task.description}`}/>
                                                </ListItemButton>
                                            </Link>
                                            <Button onClick={() => deleteTask(task.id)}
                                                    style={{textDecoration: 'none', color: '#000'}}>
                                                <ListItemIcon>
                                                    <Clear
                                                        edge="start"
                                                        tabIndex={-1}
                                                    />
                                                </ListItemIcon>
                                            </Button>
                                        </ListItem>
                                    </Box>
                                );
                            })}
                        </List>
                    </Box>

                    <Box
                        sx={{
                            marginTop: 8,
                            marginLeft: 8,
                            marginRight: 10,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >

                        <div  style={{justifyContent: 'right'}}>
                            <Link onClick={() => create()} to={'/task/'}
                                  style={{textDecoration: 'none', color: '#FFF'}}>
                                <Button variant="contained">
                                    CREATE NEW TASK
                                </Button>
                            </Link>

                        </div>

                    </Box>
                </Container>
                <Footer></Footer>
            </ThemeProvider>
        </div>
    );
}

export default Tasks;