import {CREATE_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK} from "../../actions";

const taskReducer = (state, action) => {
    if (!state) {
        state = {}
    }

    if (action.type === GET_TASKS) {
        const id = window.location.pathname.split('/').pop();
        const task = action.tasks?.filter(task => task.id === id).pop()
        if (task) {
            return task;
        }
    } else if (action.type === CREATE_TASK) {
        return action.task;
    } else if (action.type === UPDATE_TASK) {
        return action.task;
    } else if (action.type === DELETE_TASK) {
        return {};
    }
    return state;
};

export {taskReducer};