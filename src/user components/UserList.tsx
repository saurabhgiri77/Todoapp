import { FC, memo } from "react";
import { connect } from "react-redux";
import { userSelector } from "../selectors/users";
import { State } from "../store";
import { User } from "../types/types";
import UserRow from "./userRow";

type Props = {
  users: User[];
};

const UserList: FC<Props> = ({ users }) => {
  return (
    <div className="space-y-2 sm:text-center">
      {users.map((u) => (
        <UserRow key={u.id} user={u} />
      ))}
    </div>
  );
};

UserList.defaultProps = {};

const userMapper = (state: State) => ({
  users: userSelector(state),
});

export default connect(userMapper)(memo(UserList));
