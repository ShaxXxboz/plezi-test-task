import { takeLatest } from "redux-saga/effects";
import { getMovieFetch, getMoviesFetch } from "../slices/movies";
import { handleGetMovie, handleGetMovies } from "./workers/movies";

export function* watchGetMovies() {
  yield takeLatest(getMoviesFetch.type, handleGetMovies);
}

export function* watchGetMovie() {
  yield takeLatest(getMovieFetch.type, handleGetMovie);
}
