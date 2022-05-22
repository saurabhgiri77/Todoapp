import React, { FC } from "react";
import TodoForm from "./TodoForm";
import Button from "./Button";
import Todolist from "./Todolist";
import Donelist from "./Donelist";
import TodoDisplayer from "./TodoDisplayer";
import { Todo } from "./types";

let i: number = 0;

const App: FC = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [inComplete, setIncomplete] = React.useState<Todo[]>([]);
  const [complete, setComplete] = React.useState<Todo[]>([]);

  const saveTodo = (todo: string) => {
    setIncomplete([...inComplete, { id: i, title: todo, done: false }]);
    i++;
  };

  const toComplete = (todo: Todo) => {
    const change = inComplete.filter((t) => t !== todo);
    setComplete([...complete, todo]);
    setIncomplete(change);
    todo.done = true;
  };

  const toBackToList = (todo: Todo) => {
    const change = complete.filter((t) => t !== todo);
    setIncomplete([...inComplete, todo]);
    setComplete(change);
    todo.done = false;
  };

  const deleteComplete = (todo: Todo) => {
    const change = complete.filter((t) => t !== todo);
    setComplete(change);
  };

  const deleteIncomplete = (todo: Todo) => {
    const change = inComplete.filter((t) => t !== todo);
    setIncomplete(change);
  };

  return (
    <div className="sm:px-8 px-4">
      <div className="flex justify-between border-b">
        <h1 className="font-semibold text-lg sm:text-2xl pb-4 pt-4 font-serif">
          <span className="text-red-500">Saurabh's </span>Todo
        </h1>
        <TodoDisplayer />
      </div>
      <h1 className="font-bold text-xl sm:text-3xl pb-4 pt-10">
        Things to get done
      </h1>
      <div className="my-4">
        <h3 className="font-semibold text-xl sm:py-4 py-4">Things to do</h3>
        {!inComplete.length && (
          <h1 className="text-gray-500">No todo's here</h1>
        )}
        {inComplete.map((t: Todo) => (
          <Todolist
            todo={t}
            key={t.id}
            check={toComplete}
            done={t.done}
            onDelete={deleteIncomplete}
          />
        ))}
      </div>

      {!showForm && (
        <Button onClick={() => setShowForm(true)} theme="tertiory">
          Add a todo
        </Button>
      )}
      {showForm && (
        <TodoForm hideForm={() => setShowForm(false)} create={saveTodo} />
      )}

      <div className="my-4">
        <h3 className="font-semibold text-xl sm:py-4 py-4">Things Done</h3>
        {!complete.length && <h1 className="text-gray-500">No todo's here</h1>}
        {complete.map((t: Todo) => (
          <Donelist
            todo={t}
            key={t.id}
            check={toBackToList}
            done={t.done}
            onDelete={deleteComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
