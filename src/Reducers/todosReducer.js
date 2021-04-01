import { ADD_TASK } from "../Constants/action-types";
import { TOGGLE_TASK } from "../Constants/action-types";
import { MODIFY_TASK } from "../Constants/action-types";

const initTodos = { 
    todos: [
    {
        id: Math.random(),
        title: "First Task",
        isDone: false,
    },
    {
        id: Math.random(),
        title: "Second Task",
        isDone: false,
    }] 
};

export default function todosReducer(state = initTodos, action) {
    const { type, payload } = action;
        switch (type) {
            case ADD_TASK: {
                return {
                    todos: [
                    ...state.todos,
                    { id: Math.random(), title: payload.task, isDone: false },
                    ],
                };
            }
            case TOGGLE_TASK: {
                return {
                    todos: state.todos.map((task) =>
                    task.id === payload.id ? { ...task, isDone: !task.isDone } : task
                    ),
                };
            }
            case MODIFY_TASK: {
                // console.log(payload.modifiedName);
                return {
                    todos: state.todos.map((task) =>
                    task.id === payload.id ? { ...task, title: payload.modifiedName } : task
                    ),
                };
            }
            default:
                return state;
        }
}