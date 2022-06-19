import { applyMiddleware, createStore, Reducer } from "redux";
import sagaMiddleware, { rootSaga } from "./sagas";
import { initialTodoState, todoReducer, TodoState } from "./state/todo";
import { initialUserState, userReducer, UserState } from "./state/user";

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
  console.log("dispatched", action);
  return {
    todos: todoReducer(state.todos, action),
    users: userReducer(state.users, action),
  };
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
