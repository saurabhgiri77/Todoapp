import { createStore, Reducer } from "redux";
import {
  DONE_DECREASE,
  DONE_INCREASE,
  TODO_DECREASE,
  TODO_INCREASE,
} from "./actions";

type State = {
  todo: number;
  done: number;
};

const initialState: State = { todo: 0, done: 0 };

const reducer: Reducer<State> = (currentState = initialState, action) => {
  console.log("currentState", currentState, "action", action);
  switch (action.type) {
    case TODO_INCREASE: {
      return { ...currentState, todo: currentState.todo + 1 };
    }
    case TODO_DECREASE: {
      return { ...currentState, todo: currentState.todo - 1 };
    }
    case DONE_INCREASE: {
      return { ...currentState, done: currentState.done + 1 };
    }
    case DONE_DECREASE: {
      return { ...currentState, done: currentState.done - 1 };
    }
    default: {
      return currentState;
    }
  }
};

const store = createStore(reducer);

export default store;
