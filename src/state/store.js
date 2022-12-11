import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {employeesReducer} from "./reducers/employees";
import {tasksReducer} from "./reducers/tasks";
import {taskReducer} from "./reducers/task";

const store = configureStore({
    reducer: combineReducers({
        task: taskReducer,
        tasks: tasksReducer,
        employees: employeesReducer
    }),
});

export {store};