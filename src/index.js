import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './state/store';
import Tasks from './views/tasks/tasks';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Task from "./views/task/task";
import {getEmployees, getTasks} from "./api/api";

const container = document.getElementById('root');
const root = createRoot(container);

getTasks();
getEmployees();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Tasks/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                    <Route path="task/:id" element={<Task/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

