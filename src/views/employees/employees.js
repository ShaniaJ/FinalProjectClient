import React from 'react';
import './employees.css';
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {Clear, Person} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {store} from "../../state/store";
import {CREATE_EMPLOYEE, UPDATE_EMPLOYEE} from "../../actions";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import {deleteEmployee} from "../../api/api";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const theme = createTheme();


const Employees = () => {

    const employees = useSelector((state) => state.employees);

    const create = () => {
        store.dispatch({
            type: CREATE_EMPLOYEE,
            employee: undefined
        })
    };

    const updateEmployee = (id) => {
        const employee = employees.filter((employee) => employee.id === id).pop()
        if (employee) {
            store.dispatch({
                type: UPDATE_EMPLOYEE,
                employee: employee
            })
        }
    };

    return (
        <div className="tasks">
            <ThemeProvider theme={theme}>
                <NavBar props={['HOME', 'TASKS']}></NavBar>
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
                            LIST OF EMPLOYEES
                        </Typography>

                        <List>
                            {employees.map((employee) => {
                                const labelId = `checkbox-list-label-${employee.id}`;
                                const employeeLink = `/employee/${employee.id}`;
                                return (
                                    <Box sx={{mt: 1}} key={employee.id}>
                                        <ListItem key={employee.id} disablePadding>
                                            <Link onClick={() => updateEmployee(employee.id)} to={employeeLink}
                                                  style={{textDecoration: 'none', color: '#000'}}>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Person
                                                            edge="start"
                                                            tabIndex={-1}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={labelId}
                                                                  primary={`${employee.firstName} ${employee.lastName}`}/>
                                                </ListItemButton>
                                            </Link>
                                            <Button onClick={() => deleteEmployee(employee.id)}
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
                        <Link onClick={() => create()} to={'/employee/'}
                              style={{textDecoration: 'none', color: '#000'}}>
                            CREATE EMPLOYEE
                        </Link>
                    </Box>
                </Container>
                <Footer></Footer>
            </ThemeProvider>
        </div>
    );
}

export default Employees;