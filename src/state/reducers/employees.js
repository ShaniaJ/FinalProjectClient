import {GET_EMPLOYEES} from "../../actions";

const employeesReducer = (state, action) => {
    if (!state) {
        state = [];
    }
    if (action.type === GET_EMPLOYEES) {
        return action.employees;
    }
    return state;
};

export {employeesReducer};