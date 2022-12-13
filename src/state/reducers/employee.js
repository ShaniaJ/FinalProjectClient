import {CREATE_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE} from "../../actions";

const employeeReducer = (state, action) => {
    if (!state) {
        state = {}
    }

    if (action.type === UPDATE_EMPLOYEE) {
        const id = window.location.pathname.split('/').pop();
        const employee = action.employees?.filter(employee => employee.id === id).pop()
        if (employee) {
            return employee;
        }
    }

    if (action.type === GET_EMPLOYEES) {
        const id = window.location.pathname.split('/').pop();
        const employee = action.employees?.filter(employee => employee.id === id).pop()
        if (employee) {
            return employee;
        }
    } else if (action.type === CREATE_EMPLOYEE) {
        return action.employee;
    } else if (action.type === UPDATE_EMPLOYEE) {
        return action.employee;
    } else if (action.type === DELETE_EMPLOYEE) {
        return {};
    }
    return state;
};

export {employeeReducer};