import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../actions/students";
import { userSelector } from "../selectors/users";
import { State } from "../store";
import { User } from "../types/types";
import UserRow from "./UserRow";

type Props = {
  users: User[];
  getStudents: () => any;
};

const UserList: FC<Props> = ({ users, getStudents }) => {
  useEffect(() => {
    getStudents();
  }, []);

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

const mapDispatchToProps = {
  getStudents: fetchStudents,
};

export default connect(userMapper, mapDispatchToProps)(memo(UserList));
