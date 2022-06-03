import { FC, memo, useCallback } from "react";
import { Todo } from "../types/types";
import cn from "classnames";

type Props = {
  todo: Todo;
  onStatusChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
};

const TodoRow: FC<Props> = ({ todo, onStatusChange, onDelete }) => {
  const { id, title, done } = todo;

  const handleChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id]);

  return (
    <div className="flex items-center space-x-2">
      <input
        checked={done}
        onChange={handleChange}
        type="checkbox"
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded accent-yellow-700 "
      />
      <span className={cn({ "line-through": done })}>{title}</span>
      <button
        className="font-extrabold text-sm text-red-600 border-2 border-red-600 px-1 hover:bg-red-400 rounded-full"
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
