import { State } from "../store";

export const todoListSelector = (s: State) =>
  Object.keys(s.todos).map((todoId) => s.todos[todoId as any]);

export const incompleteSelector = (s: State) =>
  todoListSelector(s).filter((t) => !t.done);

export const completeSelector = (s: State) =>
  todoListSelector(s).filter((t) => t.done);
