import styled from "styled-components";

const GenreSection = styled.section`
  background-color: rgba(225, 225, 225, 0.5);
  border-radius: 0.5rem;
  color: #1e1e1e;
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const Genre = ({ children }) => <GenreSection>{children}</GenreSection>;

const SliderSection = styled.div`
  grid-column: span 2;
  text-align: center;
  width: 100%;

  @media (min-width: 520px) {
    grid-column: span 4;
  }

  @media (min-width: 768px) {
    grid-column: span 6;
  }

  .rangeslider-horizontal {
    border-radius: 10px;
    display: block;
    margin: 2rem auto;
    width: 30rem;
    height: 12px;
  }
`;

export const Slide = ({ children }) => (
  <SliderSection>{children}</SliderSection>
);

const MovieSection = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  max-width: 100%;
  transition: all 1s;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Movies = ({ children }) => <MovieSection>{children}</MovieSection>;
