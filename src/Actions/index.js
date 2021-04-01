import { ADD_TASK } from "../Constants/action-types";
import { TOGGLE_TASK } from "../Constants/action-types";
import { MODIFY_TASK } from "../Constants/action-types";

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

export const modifyTask = (payload) => {
    return {
        type: MODIFY_TASK,
        payload: payload,
    };
};
