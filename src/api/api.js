import {store} from "../state/store";
import {
    CREATE_EMPLOYEE,
    CREATE_TASK,
    DELETE_EMPLOYEE,
    DELETE_TASK,
    GET_EMPLOYEES,
    GET_TASKS,
    UPDATE_EMPLOYEE,
    UPDATE_TASK
} from "../actions";

const serverURL = 'http://localhost:3001';

const getEmployees = () => {
    fetch(`${serverURL}/employees/`)
        .then(response => response.json())
        .then(response => {
            store.dispatch({
                type: GET_EMPLOYEES,
                employees: response.employees
            })
        })
};

const getTasks = () => {
    fetch(`${serverURL}/`)
        .then(response => response.json())
        .then(response => {
            store.dispatch({
                type: GET_TASKS,
                tasks: response.tasks
            })
        })
}

const createTask = (task) => {
    fetch(`${serverURL}/task/create/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then(response => {
            store.dispatch({
                type: CREATE_TASK,
                task: response.task
            })
        })
}

const createEmployee = (employee) => {
    fetch(`${serverURL}/employee/create/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    })
        .then(response => response.json())
        .then(response => {
            store.dispatch({
                type: CREATE_EMPLOYEE,
                employee: response.employee,
                tasks: employee.tasks
            })
        })
}

const updateTask = (task) => {
    fetch(`${serverURL}/task/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then(response => {
            store.dispatch({
                type: UPDATE_TASK,
                task: response.task
            })
        })
}

const updateEmployee = (employee) => {
    fetch(`${serverURL}/employee/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    })
        .then(response => response.json())
        .then(response => {
            store.dispatch({
                type: UPDATE_EMPLOYEE,
                employee: response.employee,
                tasks: employee.tasks
            })
        })
}

const deleteTask = (id) => {
    fetch(`${serverURL}/task/delete/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })
        .then(response => response.json())
        .then(response => {
            if (response?.rowsDeleted === 1) {
                store.dispatch({
                    type: DELETE_TASK,
                    id: id
                })
            }
        })
}

const deleteEmployee = (id) => {
    fetch(`${serverURL}/employee/delete/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })
        .then(response => response.json())
        .then(response => {
            if (response?.rowsDeleted === 1) {
                store.dispatch({
                    type: DELETE_EMPLOYEE,
                    id: id
                })
            }
        })
}

export {
    getTasks,
    getEmployees,
    createTask,
    createEmployee,
    updateTask,
    updateEmployee,
    deleteTask,
    deleteEmployee
};
