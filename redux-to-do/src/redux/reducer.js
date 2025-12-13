// redux/reducer.js
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from "./actionTypes";

// 1. Define Initial State
const initialState = {
  tasks: [
    { id: 1, description: "Finish Redux Checkpoint", isDone: false },
    { id: 2, description: "Review Redux Principles", isDone: true },
  ],
  filter: "ALL", // 'ALL', 'DONE', 'NOT_DONE'
};

// 2. Define Reducer Function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Reducer must return a NEW state object (immutability)
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone } // Create a NEW task object
            : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.newDescription }
            : task
        ),
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;