import {GET_TASKS, UPDATE_TASK} from "../../actions";

const tasksReducer = (state, action) => {
    if (!state) {
        state = [];
    }
    if (action.type === GET_TASKS) {
        return action.tasks;
    } else if (action.type === UPDATE_TASK) {
        return state.map(task => task.id === action.task.id ? action.task : task);
    }
    return state;
};

export {tasksReducer};