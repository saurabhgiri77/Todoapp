import React, { FC } from "react";
import TodoForm from "./TodoForm";
import Button from "./Button";
import Todolist from "./Todolist";
import Donelist from "./Donelist";
import TodoDisplayer from "./TodoDisplayer";
import { useDispatch } from "react-redux";
import { DONE_DECREASE, TODO_DECREASE } from "./actions";

let i: number = 0;

const App: FC = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [inComplete, setIncomplete] = React.useState([]);
  const [complete, setComplete] = React.useState([]);

  type todoType = {
    id: number;
    title: string;
  };

  const dispatch = useDispatch();
  const incompleteUpdater = () => {
    dispatch({ type: TODO_DECREASE });
    console.log("decreased");
  };
  const completeUpdater = () => {
    dispatch({ type: DONE_DECREASE });
  };

  const notChecked = false;
  const checked = true;

  const updateTodoList = (todoList: any) => {
    setIncomplete(todoList);
  };

  const saveTodo = (todo: todoType) => {
    updateTodoList([...inComplete, { id: i, title: todo }]);
    i++;
  };

  const toComplete = (todo: never) => {
    const change = inComplete.filter((t) => t !== todo);
    setComplete([...complete, todo]);
    setIncomplete(change);
    localStorage.setItem("a", JSON.stringify(inComplete));
  };

  const toBackToList = (todo: never) => {
    const change = complete.filter((t) => t !== todo);
    setIncomplete([...inComplete, todo]);
    setComplete(change);
  };

  const deleteComplete = (todo: todoType) => {
    const change = complete.filter((t) => t !== todo);
    setComplete(change);
    completeUpdater();
  };

  const deleteIncomplete = (todo: todoType) => {
    const change = inComplete.filter((t) => t !== todo);
    setIncomplete(change);
    incompleteUpdater();
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
        {inComplete.map((t) => (
          <Todolist
            todo={t}
            key={t}
            check={toComplete}
            done={notChecked}
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
        {complete.map((t) => (
          <Donelist
            todo={t}
            key={t}
            check={toBackToList}
            done={checked}
            onDelete={deleteComplete}
          />
        ))}
      </div>
    </div>
  );
};

App.defaultProps = {};

export default App;
