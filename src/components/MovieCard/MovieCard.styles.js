import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  background-image: url(${(props) => props.posterUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1em;
  position: relative;

  @media (max-width: 1600px) {
    height: 50vh;
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

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Title = styled.h2`
  color: white;
  z-index: 1;
  text-align: center;
  padding: 0 0.5em;
`;
