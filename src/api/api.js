import {store} from "../state/store";
import {GET_EMPLOYEES, GET_TASKS, UPDATE_TASK} from "../actions";

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

export {getTasks, getEmployees, updateTask};
