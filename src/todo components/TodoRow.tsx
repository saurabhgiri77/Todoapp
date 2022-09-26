import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { Todo } from "../types/types";
import cn from "classnames";

type Props = {
  todo: Todo;
  onStatusChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

const TodoRow: FC<Props> = ({ todo, onStatusChange, onDelete, onEdit }) => {
  const { id, title, done } = todo;
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id]);

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  const handleSaveEdit = () => {
    onEdit(id, editValue);
    setEditValue("");
    setVisibleEdit(false);
  };

  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-2 text-blue-400">
        <input
          checked={done}
          onChange={handleChange}
          type="checkbox"
          className="w-4 h-4 rounded accent-green-700 "
        />
        <span className={cn({ "line-through": done })}>{title}</span>
        <button
          className="font-extrabold text-sm text-green-600 border-2 border-green-600 px-1 rounded-full"
          onClick={() => {
            setVisibleEdit(!visibleEdit);
          }}
        >
          i
        </button>
        <button
          className="font-extrabold text-sm text-red-600 border-2 border-red-600 px-1 hover:bg-red-400 rounded-full"
          onClick={handleDelete}
        >
          X
        </button>
      </div>
      {visibleEdit && (
        <div className="space-x-2">
          <input onChange={handleEditChange} />
          <button onClick={handleSaveEdit} className="text-green-600">
            save
          </button>
        </div>
      )}
    </div>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
