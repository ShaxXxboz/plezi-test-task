import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieFetch } from "../../store/slices/movies";
import { getMovie } from "../../store/selectors/movies";
import MovieInfo from "../../components/MovieInfo";

const Movie = ({ movie: movieId }) => {
  const movie = useSelector(getMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieFetch({ movieId }));
  }, [movieId]);

  return <MovieInfo movie={movie} />;
};

export default Movie;
