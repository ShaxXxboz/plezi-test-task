import { all } from "redux-saga/effects";
import { watchGetMovie, watchGetMovies } from "./movies";
import { watchGetConfigs } from "./configs";

export default function* rootSaga() {
  yield all([watchGetMovies(), watchGetMovie(), watchGetConfigs()]);
}
