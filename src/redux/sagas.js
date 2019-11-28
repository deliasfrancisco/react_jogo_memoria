import { all } from "redux-saga/effects";
import cardsSaga from "./cards/saga";
import formSaga from "./form/saga";

export default function* rootSaga() {
  yield all([cardsSaga(), formSaga()]);
}
