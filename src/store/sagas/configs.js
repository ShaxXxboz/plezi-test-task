import { takeLatest } from "redux-saga/effects";
import { getConfigsFetch } from "../slices/configs";
import { handleGetConfigs } from "./workers/configs";

export function* watchGetConfigs() {
  yield takeLatest(getConfigsFetch.type, handleGetConfigs);
}
