export const USER_ADD = "user added";

let nextId = 0;

export const userAddCreator = (name: string) => ({
  type: USER_ADD,
  payload: { id: ++nextId, name },
});
