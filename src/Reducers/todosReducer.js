import { ADD_TASK } from "../Constants/action-types";
import { TOGGLE_TASK } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";

const initialState = {
    todos: [
        {
            id: Math.random(),
            task: "Become a Webdeveloper",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Get Job",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Develop my career",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Build my own project",
            isDone: false,
        },
    ],
};

export default function todosReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK: {
            return {
                todos: [
                    ...state.todos,
                    { id: Math.random(), task: payload.newTask, isDone: false },
                ],
            };
        }
        case TOGGLE_TASK: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        }
        case EDIT_TASK: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, task: payload.newTask }
                        : task
                ),
            };
        }
        default:
            return state;
    }
}
