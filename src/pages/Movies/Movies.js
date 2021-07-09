import React, { useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/selectors/movies";
import { getMoviesFetch } from "../../store/slices/movies";
import MovieCard from "../../components/MovieCard";
import { nanoid } from "@reduxjs/toolkit";

const Movies = () => {
  const { results } = useSelector(getMovies);
  const dispatch = useDispatch();
  const movieRows = useMemo(
    () =>
      results.reduce((rows, key, index) => {
        if (index % 5 === 0) {
          rows.push([key]);
        } else {
          rows[rows.length - 1].push(key);
        }

        return rows;
      }, []),
    [results]
  );

  useEffect(() => {
    dispatch(getMoviesFetch());
  }, [dispatch]);

  return (
    <Container>
      {movieRows.map((row) => (
        <Row key={nanoid()}>
          {row.map((movie) => (
            <Col md={2} key={movie.original_title}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Movies;
