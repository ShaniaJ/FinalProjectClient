import React, {useEffect, useState} from 'react';
import './employee.css';
import {useSelector} from "react-redux";
import {Button, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {createEmployee, updateEmployee} from "../../api/api";
import {Person} from "@mui/icons-material";
import Footer from "../components/footer";
import NavBar from "../components/navbar";


const theme = createTheme();

const Employee = () => {
    const employee = useSelector((state) => state.employee)
    const tasks = useSelector((state) => state.tasks)
    const [firstName, setFirstName] = useState(employee?.firstName);
    const [lastName, setLastName] = useState(employee?.lastName);
    const [department, setDepartment] = useState(employee?.department);
    const [assignedTasks, setAssignedTasks] = useState(tasks.filter(task => task.EmployeeId === employee.id));
    useEffect(() => {
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setDepartment(employee.department);
        setAssignedTasks(tasks.filter(task => task.EmployeeId === employee.id))
    }, [employee, tasks])

    const getTaskIds = (tasks) => {
        return tasks.map(task => task === '' ? undefined : task.id).filter(task => task);
    }

    const submit = (event) => {
        event.preventDefault();
        if (Object.keys(employee).length === 0) {
            createEmployee({
                firstName: firstName,
                lastName: lastName,
                department: department,
                tasks: getTaskIds(assignedTasks)
            });
        } else {
            updateEmployee({
                id: employee.id,
                firstName: firstName,
                lastName: lastName,
                department: department,
                tasks: getTaskIds(assignedTasks)
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <NavBar props={['HOME', 'EMPLOYEES', 'TASKS']}></NavBar>
            <Container component="main" maxWidth="xs" className="employee">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <Person/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        EMPLOYEE
                    </Typography>
                    <Box component="form" onSubmit={submit} noValidate sx={{mt: 1}}>
                        <FormControl sx={{m: 1, width: 400}}>
                            <InputLabel id="first-name-label" shrink={true}>First Name</InputLabel>
                            <Input
                                id="first-name-input"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}/>
                        </FormControl>
                        <FormControl sx={{m: 1, width: 400}}>
                            <InputLabel id="last-name-label" shrink={true}>Last Name</InputLabel>
                            <Input
                                id="last-name-input"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}/>
                        </FormControl>
                        <FormControl sx={{m: 1, width: 400}}>
                            <InputLabel id="department-label" shrink={true}>Department</InputLabel>
                            <Input
                                id="department-input"
                                value={department}
                                onChange={(event) => setDepartment(event.target.value)}/>
                        </FormControl>
                        <FormControl sx={{m: 1, width: 400}}>
                            <InputLabel id="tasks-label" shrink={true}>Tasks</InputLabel>
                            <Select
                                labelId="tasks-label"
                                id="employee"
                                onChange={(event) => {
                                    setAssignedTasks(event.target.value)
                                }}
                                multiple={true}
                                value={assignedTasks}
                                input={<OutlinedInput label="Tasks"/>}
                            >
                                {tasks.map((task) => (
                                    <MenuItem
                                        key={task.id}
                                        value={task}>
                                        {task.description}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{m: 1, width: 400}}
                        >
                            {Object.keys(employee).length === 0 ? 'CREATE' : 'UPDATE'}
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </ThemeProvider>
    );
};

export default Employee;