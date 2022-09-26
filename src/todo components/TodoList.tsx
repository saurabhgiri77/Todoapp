import { FC, memo } from "react";
import { connect } from "react-redux";
import {
  deleteCreator,
  editCreator,
  statusChangeCreator,
} from "../actions/todo.";
import { completeSelector, incompleteSelector } from "../selectors/todo";
import { State } from "../store";
import { Todo } from "../types/types";
import TodoRow from "./TodoRow";

type Props = {
  todos: Todo[];
  handleStatusChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

const TodoList: FC<any> = ({ todos, handleStatusChange, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((t: any) => (
        <TodoRow
          key={t.id}
          todo={t}
          onStatusChange={handleStatusChange}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
      {!todos.length && <h1 className="text-gray-300">No todo's here</h1>}
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const incompleteMapper = (s: State) => ({ todos: incompleteSelector(s) });
const completeMapper = (s: State) => ({ todos: completeSelector(s) });

const dispatchMapper = {
  handleStatusChange: statusChangeCreator,
  onDelete: deleteCreator,
  onEdit: editCreator,
};

const incompleteHOC = connect(incompleteMapper, dispatchMapper);
const completeHOC = connect(completeMapper, dispatchMapper);

export const IncompleteTodoList = incompleteHOC(TodoList);
export const CompleteTodoList = completeHOC(TodoList);
