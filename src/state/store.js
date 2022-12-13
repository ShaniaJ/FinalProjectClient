import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {employeesReducer} from "./reducers/employees";
import {tasksReducer} from "./reducers/tasks";
import {taskReducer} from "./reducers/task";
import {employeeReducer} from "./reducers/employee";

const store = configureStore({
    reducer: combineReducers({
        task: taskReducer,
        tasks: tasksReducer,
        employee: employeeReducer,
        employees: employeesReducer
    }),
});

export {store};