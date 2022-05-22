import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { DONE_DECREASE, TODO_INCREASE } from "./actions";
import { TodolistProps } from "./types";

const Donelist: FC<TodolistProps> = (props) => {
  const dispatch = useDispatch();
  const todolistUpdater = () => {
    dispatch({ type: TODO_INCREASE, action: props.todo });
  };
  const donelistUpdater = () => {
    dispatch({ type: DONE_DECREASE, action: props.todo });
  };

  const checkBox = () => {
    props.check(props.todo);
    todolistUpdater();
    donelistUpdater();
  };

  const onDelete = () => {
    props.onDelete(props.todo);
    donelistUpdater();
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

Donelist.defaultProps = {};

export default memo(Donelist);
