import { FC, memo, useState } from "react";
import H3 from "./H3";
import TodoDisplayer from "./TodoDisplayer";
import { IncompleteTodoList, CompleteTodoList } from "./TodoList";
import Button from "./Button";
import TodoForm from "./TodoForm";

type Props = {};

const TodoPage: FC<Props> = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between border-b text-white">
        <H3 className="font-semibold text-lg sm:text-2xl pb-4 pt-4 font-serif">
          <span className="text-red-500">Saurabh's </span>Todo
        </H3>
        <TodoDisplayer />
      </div>
      <H3 className="font-bold text-xl sm:text-3xl pb-4 pt-10">
        Things to get done
      </H3>
      <H3>Things to do</H3>
      <IncompleteTodoList />
      {!showForm && (
        <Button onClick={() => setShowForm(true)} theme="tertiory">
          Add a todo
        </Button>
      )}
      {showForm && <TodoForm hideForm={() => setShowForm(false)} />}
      <H3>Things done</H3>
      <CompleteTodoList />
    </div>
  );
};

TodoPage.defaultProps = {};

export default memo(TodoPage);
