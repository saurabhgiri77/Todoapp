import { FC, memo } from "react";
import { connect } from "react-redux";
import { statusChangeCreator } from "../actions/todo.";
import { completeSelector, incompleteSelector } from "../selectors/todo";
import { State } from "../store";
import { Todo } from "../types/types";
import TodoRow from "./TodoRow";

type Props = {
  todos: Todo[];
  handleStatusChange: (id: number, done: boolean) => void;
};

const TodoList: FC<Props> = ({ todos, handleStatusChange }) => {
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
const completeMapper = (s: State) => ({ todos: completeSelector(s) });

const dispatchMapper = {
  handleStatusChange: statusChangeCreator,
};

const incompleteHOC = connect(incompleteMapper, dispatchMapper);
const completeHOC = connect(completeMapper, dispatchMapper);

export const IncompleteTodoList = incompleteHOC(TodoList);
export const CompleteTodoList = completeHOC(TodoList);
