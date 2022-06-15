import { State } from "../store";

export const userSelector = (state: State) => {
  return Object.keys(state.users).map((userId) => state.users[userId as any]);
};
