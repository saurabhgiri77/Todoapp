import { createSelector } from "reselect";
import { State } from "../store";

export const userStateSelector = (s: State) => s.users;

export const userSelector = createSelector(userStateSelector, (userState) =>
  Object.keys(userState).map((userId) => userState[userId as any])
);
