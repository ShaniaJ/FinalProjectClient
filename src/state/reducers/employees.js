import {CREATE_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE} from "../../actions";

const employeesReducer = (state, action) => {
    if (!state) {
        state = [];
    }
    if (action.type === GET_EMPLOYEES) {
        return action.employees;
    } else if (action.type === CREATE_EMPLOYEE) {
        return [...state, action.employee];
    } else if (action.type === UPDATE_EMPLOYEE) {
        return state.map(employee => employee.id === action.employee.id ? action.employee : employee);
    } else if (action.type === DELETE_EMPLOYEE) {
        return state.filter(employee => employee.id !== action.id);
    }
    return state;
};

export {employeesReducer};