import React, { useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/selectors/movies";
import { getMoviesFetch } from "../../store/slices/movies";
import MovieCard from "../../components/MovieCard";

const Movies = () => {
  const { results } = useSelector(getMovies);
  const dispatch = useDispatch();
  const movieRows = useMemo(
    () =>
      results.reduce(function (rows, key, index) {
        return (
          (index % 5 == 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows
        );
      }, []),
    [results]
  );

  useEffect(() => {
    dispatch(getMoviesFetch());
  }, []);

  return (
    <Container>
      {movieRows.map((row) => (
        <Row key={row[0]?.id}>
          {row.map((movie) => (
            <Col md={2} key={movie.original_title}>
              <Link
                to={`/movies/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
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
