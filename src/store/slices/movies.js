import { createSlice } from "@reduxjs/toolkit";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../constants";

const initialState = {
  movies: {
    results: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
  },
  movie: null,
  status: IDLE,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    getMoviesFetch: (state) => {
      state.status = PENDING;
    },
    getMoviesSuccess: (state, action) => {
      state.movies = action.payload.movies;
      state.status = SUCCEEDED;
    },
    getMoviesError: (state, action) => {
      state.status = FAILED;
      state.error = action.payload.error;
    },
    getMovieFetch: (state) => {
      state.status = PENDING;
    },
    getMovieSuccess: (state, action) => {
      state.movie = action.payload.movie;
      state.status = SUCCEEDED;
    },
  },
});

export const {
  getMoviesFetch,
  getMoviesSuccess,
  getMoviesError,
  getMovieFetch,
  getMovieSuccess,
} = moviesSlice.actions;

export default moviesSlice.reducer;
