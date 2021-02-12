import React from "react";
import Genre from "../Genres/";
import styled from "styled-components";

const MovieArticle = styled.article`
  background-color: #1e1e1e;
  border-radius: 0.5rem;
  border: 0.1rem solid #e1e1e1;
  transition: all 0.5s;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 1rem 0 rgba(255, 255, 255, 0.5);
  }
`;

const MovieContent = styled.div`
  width: 100%;
  padding: 1.5rem 0.5rem;
`;

const Meta = styled.span``;

const Star = styled.p`
  margin-bottom: 1rem;
`;

function Movies({ movie, index, genres }) {
  const posterPath = `https://image.tmdb.org/t/p/w500`;
  return movie.visible || movie.visible === undefined ? (
    <MovieArticle>
      <img alt={movie.title} src={`${posterPath}${movie.poster_path}`} />
      <MovieContent>
        <h2>{movie.title}</h2>
        <Star>Rating: {movie.vote_average}/10</Star>
        <Meta>
          {movie.genre_ids.map((movie_genre) => (
            <Genre
              key={movie_genre}
              genre={genres.genres.map((genre) =>
                genre.id === movie_genre ? genre.name : ""
              )}
              index={index}
            />
          ))}
        </Meta>
      </MovieContent>
    </MovieArticle>
  ) : (
    ""
  );
}

export default Movies;
