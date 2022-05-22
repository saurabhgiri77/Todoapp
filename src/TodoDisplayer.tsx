import { FC, memo } from "react";
import { useSelector } from "react-redux";

type Props = {};

const TodoDisplayer: FC<Props> = () => {
  const todoCount: number = useSelector((s: any) => s.todo.length);
  const doneCount: number = useSelector((s: any) => s.done.length);

  return (
    <div className="sm:flex sm:space-x-8 sm:text-xl mt-4 font-serif ml-2">
      <div>
        Incomplete :{" "}
        <span className="text-red-500 font-semibold">{todoCount}</span>
      </div>
      <div>
        Completed :{" "}
        <span className="text-green-500 font-semibold">{doneCount}</span>
      </div>
    </div>
  );
};

export default memo(TodoDisplayer);
