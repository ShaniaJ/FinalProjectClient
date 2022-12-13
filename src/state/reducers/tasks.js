import {CREATE_EMPLOYEE, CREATE_TASK, DELETE_TASK, GET_TASKS, UPDATE_EMPLOYEE, UPDATE_TASK} from "../../actions";
import employee from "../../views/employee/employee";

const tasksReducer = (state, action) => {
    if (!state) {
        state = [];
    }
    if (action.type === GET_TASKS) {
        return action.tasks;
    } else if (action.type === CREATE_TASK) {
        return [...state, action.task];
    } else if (action.type === UPDATE_TASK) {
        return state.map(task => task.id === action.task.id ? action.task : task);
    } else if (action.type === DELETE_TASK) {
        return state.filter(task => task.id !== action.id);
    } else if (action.type === CREATE_EMPLOYEE || action.type === UPDATE_EMPLOYEE) {
        return state.map(task => {
            const newTask = {...task};
            if (action.tasks.includes(task.id)) {
                newTask.EmployeeId = action.employee.id;
            } else if (task.EmployeeId === action.employee.id) {
                newTask.EmployeeId = undefined;
            }
            return newTask;
        });
    }
    return state;
};

export {tasksReducer};