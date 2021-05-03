import { ADD_TASK } from "../Constants/action-types";
import { TOGGLE_TASK } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";
export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};
export const toggleTask = (payload) => {
    return {
        type: TOGGLE_TASK,
        payload: payload,
    };
};
export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload: payload,
    };
};
