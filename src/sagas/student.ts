import getStudents from "../api";
import { call } from "redux-saga/effects";

export function* getStudentSaga(): Generator {
  const a = yield call(getStudents);
  console.log("data from api", a);
}
