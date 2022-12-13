import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './state/store';
import Tasks from './views/tasks/tasks';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Task from "./views/task/task";
import {getEmployees, getTasks} from "./api/api";
import Employees from "./views/employees/employees";
import Employee from "./views/employee/employee";
import Home from "./views/home/home";

const container = document.getElementById('root');
const root = createRoot(container);

getTasks();
getEmployees();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                    <Route path="task/:id" element={<Task/>}/>
                    <Route path="task/" element={<Task/>}/>
                    <Route path="/employees" element={<Employees/>}/>
                    <Route path="employee/:id" element={<Employee/>}/>
                    <Route path="employee/" element={<Employee/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

