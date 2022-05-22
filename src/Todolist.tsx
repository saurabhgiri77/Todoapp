import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { DONE_INCREASE, TODO_DECREASE } from "./actions";
import { TodolistProps } from "./types";

const Todolist: FC<TodolistProps> = (props) => {
  const dispatch = useDispatch();
  const todolistUpdater = () => {
    dispatch({ type: TODO_DECREASE, payload: props.todo.id });
  };
  const donelistUpdater = () => {
    dispatch({ type: DONE_INCREASE, payload: props.todo.id });
  };

  const checkBox = () => {
    props.check(props.todo);
    donelistUpdater();
    todolistUpdater();
  };

  const onDelete = () => {
    props.onDelete(props.todo);
    todolistUpdater();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <input
          checked={props.todo.done}
          onChange={checkBox}
          type="checkbox"
          className="w-4 h-4 text-yellow-600 border-gray-300 rounded accent-yellow-700 "
        />
        <span>{props.todo.title}</span>
        <button
          className="font-extrabold text-sm text-red-600 border-2 border-red-600 px-1 hover:bg-red-400 rounded-full"
          onClick={onDelete}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default memo(Todolist);
