// import {
//   all,
//   fork,
//   put,
//   takeEvery,
//   takeLatest,
//   call,
//   delay
// } from "redux-saga/effects";
// import { TOGGLE_MODAL, FETCH_RANKING } from "../../constants/actionTypes";
// import { toggleModalSuccess, fetchRankingSuccess } from "./actions";
// import { fetchRanking } from "../../firebase/cards";

// function* setIsOpen({ payload }) {
//   yield put(toggleModalSuccess(payload));
// }

// function* fetch() {
//   let ranking = yield call(fetchRanking);
//   yield delay(200);
//   yield put(fetchRankingSuccess(ranking));
// }

// export function* watchToggleModal() {
//   yield takeEvery(TOGGLE_MODAL, setIsOpen);
// }

// export function* watchFetchRanking() {
//   yield takeLatest(FETCH_RANKING, fetch);
// }

// export default function* rootSaga() {
//   yield all([fork(watchToggleModal)]);
// }
