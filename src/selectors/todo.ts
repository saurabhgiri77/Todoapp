import { State } from "../store";

export const incompleteSelector = (s: State) => s.todos.filter((t) => !t.done);

export const completeSelector = (s: State) => s.todos.filter((t) => t.done);
