import { call, put } from "@redux-saga/core/effects";
import { apiCall } from "../../../helpers/axiosApiCallWrapper";
import { getConfigsError, getConfigsSuccess } from "../../slices/configs";

export function* handleGetConfigs() {
  try {
    const res = yield call(apiCall, "GET", "/configuration");
    yield put(getConfigsSuccess({ configs: res }));
  } catch (error) {
    yield put(getConfigsError({ error: error.message }));
  }
}
