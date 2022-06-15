import { FC, memo } from "react";
import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./todo components/TodoPage";
import UsersPage from "./user components/UsersPage";

type Props = {};

const App: FC<Props> = (props) => {
  return (
    <div className="sm:px-8 px-4 bg-gray-800 h-screen">
      <div className="space-x-3 font-semibold text-blue-600 text-xl text-center">
        <Link to="/">TODO</Link>
        <Link to="/users">USERS</Link>
      </div>
      <Routes>
        <Route index element={<TodoPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
};

App.defaultProps = {};

export default memo(App);
