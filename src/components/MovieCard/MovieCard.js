import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Wrapper, Overlay, Title } from "./MovieCard.styles";
import { getImageConfigs } from "../../store/selectors/configs";

const MovieCard = memo(({ movie }) => {
  const imageConfigs = useSelector(getImageConfigs);
  const posterUrl = useMemo(
    () =>
      `${imageConfigs?.base_url}${imageConfigs?.poster_sizes[4]}${movie.poster_path}`,
    [imageConfigs, movie]
  );

  return (
    <Wrapper posterUrl={posterUrl}>
      <Overlay />
      <Title>{movie.original_title}</Title>
    </Wrapper>
  );
});

export default MovieCard;
