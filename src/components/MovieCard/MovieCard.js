import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Wrapper, Overlay, Title } from "./MovieCard.styles";
import { getConfigs } from "../../store/selectors/configs";

const MovieCard = ({ movie }) => {
  const configs = useSelector(getConfigs);
  const posterUrl = useMemo(
    () =>
      `${configs?.images.base_url}${configs?.images.poster_sizes[4]}${movie.poster_path}`,
    [configs]
  );

  return (
    <Wrapper posterUrl={posterUrl}>
      <Overlay />
      <Title>{movie.original_title}</Title>
    </Wrapper>
  );
};

export default MovieCard;
