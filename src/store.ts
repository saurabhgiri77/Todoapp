import { createStore, Reducer } from "redux";
import { TODO_ADD, TODO_STATUS_CHANGE } from "./actions/todo.";
import { Todo } from "./types/types";

export type State = {
  todos: Todo[];
};

let nextNumber = 0;

const savedTodos = localStorage.getItem("todos");

const initialState: State = {
  todos: savedTodos ? JSON.parse(savedTodos) : [],
};

const reducer: Reducer<State> = (state = initialState, action) => {
  console.log("state", state, "action", action); //doubt
  switch (action.type) {
    case TODO_ADD: {
      const titleText = action.payload;
      const todo: Todo = { id: nextNumber, title: titleText, done: false };
      nextNumber++;

      return { ...state, todos: [...state.todos, todo] };
    }

    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      const newTodos = state.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done };
        }
        return t;
      });
      return { ...state, todos: newTodos };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
