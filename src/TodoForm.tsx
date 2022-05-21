import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_INCREASE } from "./actions";
import Button from "./Button";
import { TodoFormProps } from "./types";

const TodoForm: FC<TodoFormProps> = (props) => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const update = () => {
    dispatch({ type: TODO_INCREASE });
  };

  const inputChange = (event: any) => {
    setTodo(event.target.value);
  };

  const saveTodo = () => {
    if (todo === "") {
      return;
    } else {
      props.create(todo);
      setTodo("");
      props.hideForm();
      update();
    }
  };

  return (
    <div className="border p-3 sm:p-3 sm:text-lg rounded-md">
      <h3 className="sm:py-2 py-2 font-semibold">Create a Todo</h3>
      <input
        value={todo}
        onChange={inputChange}
        placeholder="Write an article about XState"
        className="sm:mt-3 mt-3 
        border-2 border-yellow-500 rounded-md w-full sm:w-1/3 px-4 py-1"
      />
      <div className="text-sm space-x-5 sm:py-4 py-4">
        <Button onClick={saveTodo}>Save</Button>
        <Button onClick={props.hideForm} theme="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

TodoForm.defaultProps = {};

export default memo(TodoForm);
