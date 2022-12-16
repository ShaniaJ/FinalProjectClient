import React, {useEffect, useState} from 'react';
import './task.css';
import {useSelector} from "react-redux";
import {Button, Checkbox, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import {createTask, updateTask} from "../../api/api";
import Footer from "../components/footer";
import NavBar from "../components/navbar";


const theme = createTheme();

const Task = () => {
    const task = useSelector((state) => state.task)
    const employees = useSelector((state) => state.employees)
    let initEmployee = {
        createdAt: "",
        department: "",
        firstName: "",
        id: "",
        lastName: "",
        updatedAt: ""
    }
    if (task && task.id && employees && employees.length > 0) {
        initEmployee = employees.filter(emp => emp.id === task.EmployeeId).pop();
    }
    const [employee, setEmployee] = useState(initEmployee);
    const [description, setDescription] = useState('');
    const [completionStatus, setCompletionStatus] = useState(false);
    const [priorityLevel, setPriorityLevel] = useState('');
    useEffect(() => {
        setEmployee(employees.filter(emp => emp.id === task.EmployeeId).pop())
        setDescription(task.description);
        setCompletionStatus(task.completionStatus);
        setPriorityLevel(task.priorityLevel);
    }, [employees, task])

    const submit = (event) => {
        event.preventDefault();
        if (Object.keys(task).length === 0) {
            createTask({
                description: description,
                EmployeeId: Object.keys(employee).length === 0 ? null : employee.id,
                completionStatus: completionStatus,
                priorityLevel: priorityLevel
            });
        } else {
            updateTask({
                id: task.id,
                description: description,
                EmployeeId: Object.keys(employee).length === 0 ? null : employee.id,
                completionStatus: completionStatus,
                priorityLevel: priorityLevel
            });
        }

    }

    return (
        <ThemeProvider theme={theme}>
            <NavBar ></NavBar>
            <Container component="main" maxWidth="xs" className="task">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                        <AssignmentTurnedIn/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        TASK
                    </Typography>
                    <Box component="form" onSubmit={submit} noValidate sx={{mt: 1}}>
                        <FormControl sx={{m: 1, width: 400}}>
                            <InputLabel id="description-label" shrink={true}>Description</InputLabel>
                            <Input
                                id="description-input"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}/>
                        </FormControl>
                        <FormControl sx={{m: 1, width: 400}}>
                            <InputLabel id="priority-label" shrink={true}>Priority</InputLabel>
                            <Input
                                id="priority-input"
                                value={priorityLevel}
                                onChange={(event) => setPriorityLevel(event.target.value)}/>
                        </FormControl>
                        <FormControl sx={{m: 1, width: 200}}>
                            <InputLabel id="status-label" shrink={true}>Status</InputLabel>
                            <Checkbox
                                checked={completionStatus} onChange={(event) => {
                                setCompletionStatus(event.target.checked)
                            }}/>
                        </FormControl>
                        <FormControl sx={{m: 1, width: 400}}>
                            <InputLabel id="employee-label" shrink={true}>Employee</InputLabel>
                            <Select
                                labelId="employee-label"
                                id="employee-select"
                                onChange={(event) => {
                                    setEmployee(event.target.value)
                                }}
                                displayEmpty
                                value={employee ?? ''}
                                input={<OutlinedInput label="Employee"/>}
                            >
                                <MenuItem value="">
                                    <em>Unassigned</em>
                                </MenuItem>
                                {employees.map((employee) => (
                                    <MenuItem
                                        key={employee.id}
                                        value={employee}>
                                        {employee.firstName} {employee.lastName}
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
                            {Object.keys(task).length === 0 ? 'CREATE' : 'UPDATE'}
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </ThemeProvider>
    );
}

export default Task;