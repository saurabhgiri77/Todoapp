import { FC, memo } from "react";
import { connect, useDispatch } from "react-redux";
import { TODO_STATUS_CHANGE } from "../actions/todo.";
import { completeSelector, incompleteSelector } from "../selectors/todo";
import { State } from "../store";
import { Todo } from "../types/types";
import TodoRow from "./TodoRow";

type Props = {
  todos: Todo[];
};

const TodoList: FC<Props> = ({ todos }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (id: number, done: boolean) => {
    dispatch({ type: TODO_STATUS_CHANGE, payload: { id, done } });
  };

  return (
    <div>
      {todos.map((t) => (
        <TodoRow key={t.id} todo={t} onStatusChange={handleStatusChange} />
      ))}
      {!todos.length && <h1 className="text-gray-500">No todo's here</h1>}
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const incompleteMapper = (s: State) => ({ todos: incompleteSelector(s) });

const completeMapper = (s: State) => {
  return { todos: completeSelector(s) };
};

const incompleteHOC = connect(incompleteMapper);
const completeHOC = connect(completeMapper);

export const IncompleteTodoList = incompleteHOC(TodoList);
export const CompleteTodoList = completeHOC(TodoList);
