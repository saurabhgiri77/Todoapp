import { Reducer } from "redux";
import { TODO_ADD, TODO_STATUS_CHANGE } from "../actions/todo.";
import { Todo } from "../types/types";

export type TodoState = {
  [id: number]: Todo;
};

export const initialTodoState = {};

export const todoReducer: Reducer<TodoState> = (
  todoState = initialTodoState,
  action
) => {
  switch (action.type) {
    case TODO_ADD: {
      const todo: Todo = action.payload;
      return { ...todoState, [todo.id]: todo };
    }

    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      return {
        ...todoState,
        [id]: { ...todoState[id], done },
      };
    }

    // case TODO_DELETE: {
    //   const { id } = action.payload;

    //   const newTodos = Object.keys(todoState.todos)
    //     .map((todoId) => todoState.todos[todoId as any])
    //     .filter((t) => t.id !== id);
    //   // todoState.todos.filter((t) => t.id !== id);
    //   return { ...todoState, todos: { ...todoState.todos, newTodos } };
    // }

    default: {
      return todoState;
    }
  }
};
