import { createStore, Reducer } from "redux";
import { TODO_ADD, TODO_DELETE, TODO_STATUS_CHANGE } from "./actions/todo.";
import { initialTodoState, todoReducer, TodoState } from "./state/todo";
import { initialUserState, userReducer, UserState } from "./state/user";
import { Todo } from "./types/types";

export type State = {
  todos: TodoState;
  users: UserState;
};

const savedTodos = localStorage.getItem("todos");

const initialState: State = {
  todos: initialTodoState,
  users: initialUserState,
};

const reducer: Reducer<State> = (state = initialState, action) => {
  return {
    todos: todoReducer(state.todos, action),
    users: userReducer(state.users, action),
  };
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
