import { all, fork, put, takeEvery } from "redux-saga/effects";
import { SET_USERNAME } from "../../constants/actionTypes";
import { setUsernameSuccess } from "./actions";

function* setUsername({ payload }) {
  yield put(setUsernameSuccess(payload));
}

export function* watchStartGame() {
  yield takeEvery(SET_USERNAME, setUsername);
}

export default function* rootSaga() {
  yield all([fork(watchStartGame)]);
}
