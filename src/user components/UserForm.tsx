import React, { ChangeEvent, FC, memo, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { userAddCreator } from "../actions/users";
import Button from "../todo components/Button";

type Props = {
  onSubmit: (name: string) => void;
  hideForm: (data: boolean) => void;
};

const UserForm: FC<Props> = ({ onSubmit, hideForm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue === "") {
      return;
    } else {
      // onSubmit(inputValue);
      dispatch(userAddCreator(inputValue));
      setInputValue("");
      // hideForm();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-3 sm:p-3 sm:text-lg rounded-md"
    >
      <h3 className="sm:py-2 py-2 font-semibold text-white">Add a user</h3>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Write an article about XState"
        className="sm:mt-3 mt-3 
        border-2 border-yellow-500 rounded-md w-full sm:w-1/3 px-4 py-1"
      />
      <div className="text-sm space-x-5 sm:py-4 py-4">
        <Button className="bg-indigo-500" onClick={handleSubmit}>
          Save
        </Button>
        <Button className="bg-red-500" onClick={hideForm} theme="secondary">
          Cancel
        </Button>
      </div>
    </form>
  );
};

UserForm.defaultProps = {};

export default connect(undefined, { onSubmit: userAddCreator })(memo(UserForm));
