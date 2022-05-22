import { createStore, Reducer } from "redux";
import {
  DONE_DECREASE,
  DONE_INCREASE,
  TODO_DECREASE,
  TODO_INCREASE,
} from "./actions";
import { Todo } from "./types";

type State = {
  todo: Todo[];
  done: Todo[];
};

const initialState: State = { todo: [], done: [] };

const reducer: Reducer<State> = (currentState = initialState, action) => {
  console.log("currentState", currentState, "action", action);
  switch (action.type || action.payload) {
    case TODO_INCREASE: {
      const newArray = [...currentState.todo, action.payload];
      return { ...currentState, todo: newArray };
    }
    case TODO_DECREASE: {
      const newArray = currentState.todo.filter((_, i) => i);
      return { ...currentState, todo: newArray };
    }
    case DONE_INCREASE: {
      const newArray = [...currentState.done, action.payload];
      return { ...currentState, done: newArray };
    }
    case DONE_DECREASE: {
      const newArray = currentState.done.filter((_, i) => i);
      return { ...currentState, done: newArray };
    }
    default: {
      return currentState;
    }
  }
};

const store = createStore(reducer);

export default store;

// const newArray = currentState.todo.map((t) => {
//   if (t === action.payload) {
//     return { ...t };
//   }
//   return t;
// });
