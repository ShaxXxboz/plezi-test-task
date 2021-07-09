import styled from "styled-components";

export const PosterWrapper = styled.div`
  background-image: url(${(props) => props.posterUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1600px) {
    height: 70vh;
  }
  @media (max-width: 1200px) {
    margin: 0 1em;
    height: 65vh;
  }
  @media (max-width: 768px) {
    height: 40vh;
  }
  @media (max-width: 576px) {
    height: 90vh;
  }
`;

export const InfoWrapper = styled.div`
  color: white;
  padding: 1em 3em;

  @media (max-width: 1600px) {
    height: 70vh;
  }
  @media (max-width: 1200px) {
    height: 65vh;
  }
  @media (max-width: 768px) {
    height: 40vh;
  }
  @media (max-width: 576px) {
    height: 90vh;
  }
`;

export const InfoData = styled.div`
  margin: 1em 0;

  & a {
    color: white;
  }
`;
