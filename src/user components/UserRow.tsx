import { FC, memo } from "react";
import { User } from "../types/types";

type Props = {
  user: User;
};

const UserRow: FC<Props> = ({ user }) => {
  const { id, name } = user;
  return (
    <div className="p-2 text-white bg-indigo-500">
      #{id} {name}
    </div>
  );
};

UserRow.defaultProps = {};

export default memo(UserRow);
