export const TODO_STATUS_CHANGE = "todo changed";

export const TODO_ADD = "todo added";

export const TODO_DELETE = "todo deleted";

export const TODO_EDIT = "todo edit";

let nextId = 1;

export const addCreator = (titleText: string) => {
  return {
    type: TODO_ADD,
    payload: { id: ++nextId, title: titleText, done: false },
  };
};

export const statusChangeCreator = (todoId: number, doneChange: boolean) => {
  return {
    type: TODO_STATUS_CHANGE,
    payload: { id: todoId, done: doneChange },
  };
};

export const deleteCreator = (todoId: number) => {
  return {
    type: TODO_DELETE,
    payload: { id: todoId.toString() },
  };
};

export const editCreator = (id: string, title: string) => {
  return {
    type: TODO_EDIT,
    payload: { id, title },
  };
};
