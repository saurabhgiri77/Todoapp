import { FC, memo, useState } from "react";
import Button from "../todo components/Button";
import UserForm from "./UserForm";
import UserList from "./UserList";

type Props = {};

const UsersPage: FC<Props> = (props) => {
  const [form, setForm] = useState(false);
  return (
    <div className="space-y-4">
      {!form && (
        <Button
          className="bg-indigo-500"
          onClick={() => setForm(true)}
          theme="tertiory"
        >
          Add a user
        </Button>
      )}
      {form && <UserForm hideForm={() => setForm(false)} />}
      <UserList />
    </div>
  );
};

UsersPage.defaultProps = {};

export default memo(UsersPage);
