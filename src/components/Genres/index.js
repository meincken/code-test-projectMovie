import styled from "styled-components";

const GenreBtn = styled.span`
  background: white;
  border-radius: 0.5rem;
  color: #1e1e1e;
  display: inline-block;
  margin: 0 0.3rem 0.3rem 0;
  padding: 0.25rem 0.5rem;
  text-align: center;
`;

function MovieGenre(movie, index) {
  return <GenreBtn key={index}>{movie.genre}</GenreBtn>;
}

export default MovieGenre;
