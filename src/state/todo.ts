import { Reducer } from "redux";
import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
  TODO_STATUS_CHANGE,
} from "../actions/todo.";
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

    case TODO_DELETE: {
      const { id } = action.payload;

      return Object.keys(todoState)
        .filter((idKey) => idKey !== id)
        .reduce((obj, key) => {
          return { ...obj, [key]: todoState[key as any] };
        }, {});
    }

    case TODO_EDIT: {
      console.log("edit chala");
      const { id, title } = action.payload;

      return { ...todoState, [id]: { ...todoState[id], title } };
    }

    default: {
      return todoState;
    }
  }
};
