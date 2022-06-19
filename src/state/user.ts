import { Reducer } from "redux";
import { FETCH_STUDENTS } from "../actions/students";
import { USER_ADD } from "../actions/users";
import { User } from "../types/types";

export type UserState = {
  [id: number]: User;
};

export const initialUserState = {};

export const userReducer: Reducer<UserState> = (
  userState = initialUserState,
  action
) => {
  switch (action.type) {
    case USER_ADD: {
      const user: User = action.payload;
      return { ...userState, [user.id]: user };
    }
    case FETCH_STUDENTS: {
    }
    default: {
      return userState;
    }
  }
};
