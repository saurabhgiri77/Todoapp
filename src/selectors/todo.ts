import { createSelector } from "reselect";
import { State } from "../store";

export const todoStateSelector = (s: State) => s.todos;

export const todoListSelector = createSelector(todoStateSelector, (todoState) =>
  Object.keys(todoState).map((todoId) => todoState[todoId as any])
);

export const incompleteSelector = (s: State) =>
  todoListSelector(s).filter((t) => !t.done);

export const completeSelector = createSelector(todoListSelector, (todos) =>
  todos.filter((t) => t.done)
);
