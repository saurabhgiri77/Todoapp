import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { completeSelector, incompleteSelector } from "../selectors/todo";
import { Todo } from "../types/types";

type Props = {};

const TodoDisplayer: FC<Props> = () => {
  const todoCount: Todo[] = useSelector(incompleteSelector);
  const doneCount: Todo[] = useSelector(completeSelector);

  return (
    <div className="sm:flex sm:space-x-8 sm:text-xl mt-4 font-serif ml-2">
      <div>
        Incomplete :{" "}
        <span className="text-red-500 font-semibold">{todoCount.length}</span>
      </div>
      <div>
        Completed :{" "}
        <span className="text-green-500 font-semibold">{doneCount.length}</span>
      </div>
    </div>
  );
};

export default memo(TodoDisplayer);
