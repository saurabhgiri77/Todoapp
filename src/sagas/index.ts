import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { FETCH_STUDENTS } from "../actions/students";
import { getStudentSaga } from "./student";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeEvery(FETCH_STUDENTS, getStudentSaga);
}

export default sagaMiddleware;
