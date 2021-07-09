import React, { useMemo, memo } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useSelector } from "react-redux";
import { getImageConfigs } from "../../store/selectors/configs";
import { PosterWrapper, InfoWrapper, InfoData } from "./MovieInfo.styles";

const MovieInfo = memo(({ movie }) => {
  const imageConfigs = useSelector(getImageConfigs);

  const posterUrl = useMemo(
    () =>
      `${imageConfigs?.base_url}${imageConfigs.poster_sizes[4]}${movie?.poster_path}`,
    [movie, imageConfigs]
  );

  return (
    <Container>
      {movie && (
        <Row>
          <Col md={3} sm={10}>
            <PosterWrapper posterUrl={posterUrl}></PosterWrapper>
          </Col>
          <Col md={7} sm={10}>
            <InfoWrapper>
              <h3>{movie.original_title}</h3>
              <p>{movie.overview}</p>
              <InfoData>
                <b>Release date: </b>
                <span>{movie.release_date}</span>
              </InfoData>
              <InfoData>
                <b>Budget: </b>
                <span>${movie.budget}</span>
              </InfoData>
              <InfoData>
                <b>Revenue: </b>
                <span>${movie.revenue}</span>
              </InfoData>
              <InfoData>
                <b>Rating: </b>
                <span>{movie.vote_average}/10</span>
              </InfoData>
            </InfoWrapper>
          </Col>
        </Row>
      )}
    </Container>
  );
});

export default MovieInfo;
