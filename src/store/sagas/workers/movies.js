import { call, put } from "@redux-saga/core/effects";
import { apiCall } from "../../../helpers/axiosApiCallWrapper";
import {
  getMoviesError,
  getMoviesSuccess,
  getMovieSuccess,
} from "../../slices/movies";

export function* handleGetMovies() {
  try {
    const res = yield call(apiCall, "GET", "/movie/popular");
    yield put(getMoviesSuccess({ movies: res }));
  } catch (error) {
    yield put(getMoviesError({ error: error.message }));
  }
}

export function* handleGetMovie(action) {
  try {
    const res = yield call(apiCall, "GET", `/movie/${action.payload.movieId}`);
    yield put(getMovieSuccess({ movie: res }));
  } catch (error) {
    yield put(getMoviesError({ error: error.message }));
  }
}
